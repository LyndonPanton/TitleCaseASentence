"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function titleCase(string) {
		// Method I
		// let arr = string.split(" ");
		// arr.forEach(function(value, index) {
		// 	arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1).toLowerCase();
		// });

		// return arr.join(" ");


		// Method II
		return string.split(" ").map(function(value, index) {
			return value[0].toUpperCase() + value.slice(1).toLowerCase();
		}).join(" ");
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		titleCase(this.children[0].value);
	});
};