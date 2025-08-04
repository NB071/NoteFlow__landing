// imports
import {
	closeModal,
	createGetStartedModal,
	createLoginModal,
	loadFAQSection,
	fetchFAQ,
	skipFAQFilter,
	createMobileMenu,
	closeMobileMenu,
} from "./helpers.js";

// =============================
// variables
// =============================
import { Globals } from "./globals.js";

// =============================
// Starters
// =============================

$(document).ready(function () {
	// load General FAQ section
	(async () => {
		const data = await fetchFAQ();
		if (!data) return;

		// Load default General section
		loadFAQSection(Globals.FAQ.general);
	})();

	// ============================
	// Event Listeners
	// ============================

	// >> Modals
	// Get Started Modal
	$(
		".hero__content-left > button, .header__buttons > button:nth-child(2)"
	).click(function () {
		createGetStartedModal();
	});

	// Login Modal
	$(".header__buttons > button:nth-child(1)").click(function () {
		createLoginModal();
	});

	// Close Modal on overlay or close button
	$(document).on(
		"click",
		".modal__overlay, .modal__close-button",
		function () {
			closeModal($(this).closest(".modal"));
		}
	);

	// Close on ESC
	$(document).on("keydown", function (e) {
		if (e.key === "Escape") {
			$(".modal").each(function () {
				closeModal($(this));
			});
		}
	});

	// #########################################################
	// >> FAQ

	$(".faq__filter-buttons .button").click(function () {
		if (!Globals.FAQ) return;

		// fetch Title of the clicked button
		const title = $(this).text().trim();

		if (skipFAQFilter(title)) return;

		// remove active class from the currently active button
		const activeButton = $(".faq__filter-buttons .button.button--primary");

		// switch to secondary style
		activeButton
			.removeClass("button--primary")
			.addClass("button--secondary");

		// switch to primary style for the clicked button
		$(this).removeClass("button--secondary").addClass("button--primary");

		// load the FAQ section based on the clicked button

		// remove all existing FAQ items
		$(".faq__items").empty();

		// Dynamically load based on clicked filter
		const section = Globals.FAQ[title.toLowerCase()] || [];
		loadFAQSection(section);
	});

	// #########################################################
	// >> Mobile Menu

	$(".header__hamburger-menu").click(function () {
		createMobileMenu();
	});

	// Close Mobile Menu on overlay or close button
	$(document).on(
		"click",
		".mobile-menu__overlay, .mobile-menu__close-button",
		function () {
			closeMobileMenu($(this).closest(".mobile-menu"));
		}
	);

	// Close on ESC
	$(document).on("keydown", function (e) {
		if (e.key === "Escape") {
			closeMobileMenu($(this));
		}
	});
});
