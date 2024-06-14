document.addEventListener("DOMContentLoaded", function () {
	const closeBannerButton = document.getElementById("closeBannerTop");
	const promoTop = document.querySelector(".promoTop");

	closeBannerButton.addEventListener("click", function () {
		promoTop.style.display = "none";
	});
});
