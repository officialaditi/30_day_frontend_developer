let bulb = document.querySelector(".bulb");
let button = document.querySelector("button");

let bulbClick = 0;

button.addEventListener("click", function () {
	if (bulbClick === 0) {
		bulb.style.backgroundColor = "yellow";
		button.innerHTML = "off";
		bulbClick = 1;
	} else {
		bulb.style.backgroundColor = "white";
		button.innerHTML = "on";
		bulbClick = 0;
	}
});
