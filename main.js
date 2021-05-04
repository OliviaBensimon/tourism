document.addEventListener("DOMContentLoaded", function () {
	const dots = document.querySelectorAll(".dot");

	dots.forEach(function (dot) {
		dot.addEventListener("click", function (e) {
			e.preventDefault();
			const clicked_dot = e.target.closest(".dot");

			if (clicked_dot.classList.contains("active")) {
				clicked_dot.classList.remove("active");
			} else {
				clicked_dot.classList.add("active");
			}
		});
	});
});
// wait for dom ready
document.addEventListener("DOMContentLoaded", function (e) {
	/**
	 * Capture all filters into a NodeList
	 */
	const filter_dropdowns = document.querySelectorAll("select.filter");

	/**
	 * Listen to each filter dropdown for a change and fire the filter function
	 */
	filter_dropdowns.forEach(function (filter_dropdown) {
		filter_dropdown.addEventListener("change", function (e) {
			/**
			 * on change, run the filter_movies function
			 * which will re-evaluate all three dropdown selections and generate
			 * a fresh selector for the filters
			 */
			filter_tourism();
		});
	});
});

/**
 * This function grabs the value of each dropdown and builds
 * a combined class to show/hide
 */
function filter_tourism() {
	/**
	 * Capture the value of each dropdown
	 */
	const transportation_class = document.querySelector("#transportation").value;
	const culture_class = document.querySelector("#culture").value;
	const food_class = document.querySelector("#food").value;

	/**
	 * Remove .active from each active item
	 */
	const active_items = document.querySelectorAll(".item.active");

	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	/**
	 * Show items that match the dropdowns
	 */
	const filtered_items = document.querySelectorAll(`.item.${transportation_class}.${culture_class}.${food_class}`);

	filtered_items.forEach(function (item) {
		item.classList.add("active");
	});
}