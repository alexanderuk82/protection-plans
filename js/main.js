document.addEventListener("DOMContentLoaded", function () {
	const closeBannerButton = document.getElementById("closeBannerTop");
	const promoTop = document.querySelector(".promoTop");

	closeBannerButton.addEventListener("click", function () {
		promoTop.style.display = "none";
	});

	// Hero section boxes options

	const labels = document.querySelectorAll(".custom-checkbox");

	labels.forEach((label) => {
		label.addEventListener("click", function () {
			// Deselect all other checkboxes
			labels.forEach((lbl) => {
				lbl.querySelector("input").checked = false;
				lbl.querySelector(".checkBoxIcon img").classList.add("hidden");
			});

			// Select the current checkbox
			this.querySelector("input").checked = true;
			this.querySelector(".checkBoxIcon img").classList.remove("hidden");

			// Store the selected value in localStorage
			const selectedValue = this.dataset.value;
			localStorage.setItem("selectedInsuranceType", selectedValue);

			// Redirect to another dynamic page
			const nextPageUrl = `${selectedValue}.html`;
			window.location.href = nextPageUrl;
		});
	});
});
