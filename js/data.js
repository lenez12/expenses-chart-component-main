const getData = async () => {
	let data = await getDataFromJson("../data.json");
	return data;
};

const getDataFromJson = async (path) => {
	try {
		let response = await fetch(path);
		return response.json();
	} catch (error) {
		throw new Error("Error when fetch data . . .");
	}
};
