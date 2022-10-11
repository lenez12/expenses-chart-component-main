document.addEventListener("DOMContentLoaded", async () => {
	const chartwrapper = document.querySelector(".chart");

	const data = await getData();

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
            <p>${item.day}</p>`;
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
