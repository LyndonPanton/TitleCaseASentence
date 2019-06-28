"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function display(string) {
		document.getElementById("display").textContent = "???";
		document.getElementById("display").textContent = string;
	}

	function titleCase(string) {
		// Method I
		// if (string === "") {
		// 	display("???");
		// } else {
		// 	let arr = string.trim().replace("  ", "").split(" ");
		// 	arr.forEach(function(value, index) {
		// 		arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1).toLowerCase();
		// 	});

		// 	return display(arr.join(" "));
		// }


		// Method II
		if (string === "") {
			display("???");
		} else {
			display(string.trim().replace("  ", "").split(" ").map(function(value, index) {
						return value[0].toUpperCase() + value.slice(1).toLowerCase();
					}).join(" "));
		}
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");
		}
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		titleCase(this.children[0].value);
	});

	let chevron = document.getElementsByClassName("fas")[0];
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});
};