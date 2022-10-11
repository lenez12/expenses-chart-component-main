document.addEventListener("DOMContentLoaded", async () => {
	const chartwrapper = document.querySelector(".chart");

	const data = await getData();

	const datass = [
		{
			id: 1,
			value: 3,
			text: "10.23",
			label: "mon",
		},
		{
			id: 2,
			value: 6,
			text: "40.11",
			label: "tue",
		},
		{
			id: 3,
			value: 10,
			text: "52.36",
			label: "wed",
		},
		{
			id: 4,
			value: 5,
			text: "31.07",
			label: "thu",
		},
		{
			id: 5,
			value: 4,
			text: "21.12",
			label: "fri",
		},
		{
			id: 6,
			value: 7,
			text: "45.36",
			label: "sat",
		},
		{
			id: 7,
			value: 5.5,
			text: "34.23",
			label: "sun",
		},
	];

	const datas = data.map((item) => item.amount);
	const maxValue = Math.max(...datas);
	var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

	data.forEach((item) => {
		const barWrapper = document.createElement("div");
		barWrapper.classList.add("bar-wrapper");
		barWrapper.id = `bar-wrapper-${item.id}`;

		if (item.amount == maxValue) {
			barWrapper.innerHTML = `
            <span class="bounceInUp">$${item.amount}</span>
            <div class="bar max" style="height: calc(${
							item.amount / 10
						}rem*2);"></div>
            <p>${item.label}</p>`;
		} else {
			barWrapper.innerHTML = `
            <span class="bounceInUp">$${item.amount}</span>
            <div class="bar" style="height: calc(${item.amount / 10}rem*2);
            "></div>
            <p>${item.day}</p>`;
		}
		chartwrapper.appendChild(barWrapper);
		// barWrapper.addEventListener("click", (e) => {
		// 	e.target.previousElementSibling.classList.toggle("active");
		// });
	});

	const barWrappers = document.querySelectorAll(".bar-wrapper");
	barWrappers.forEach((item) => {
		if (width <= 767) {
			item.addEventListener("click", (e) => {
				barWrappers.forEach((item) => {
					const span = item.querySelector("span");
					span.classList.remove("active");
				});
				const spans = e.target.previousElementSibling;
				spans.classList.add("active");
			});
			item.parentElement.addEventListener("click", (e) => {
				if (e.target.className === "chart") {
					barWrappers.forEach((item) => {
						const span = item.querySelector("span");
						span.classList.remove("active");
					});
				}
			});
		}
	});

	chartwrapper.addEventListener("click", (e) => {
		if (e.target.className == "chart") {
		}
	});
});
