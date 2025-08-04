// =============================
// variables
// =============================
import { Globals } from "./globals.js";

// =============================
// Utility Functions
// =============================

/**
 * Appends an element to the body, disables scrolling, and animates it into view.
 * @param {jQuery} element - The jQuery element to show.
 */
function showElement(element) {
	$("body").append(element).css("overflow", "hidden");

	// Trigger reflow for animation
	element[0].offsetHeight;

	// Animate element
	element
		.attr("aria-hidden", "false")
		.css({ visibility: "visible", opacity: 1 });
	element.find(".modal__overlay, .mobile-menu__overlay").css({ opacity: 1 });
	element
		.find(".modal__content, .mobile-menu__content")
		.css({ opacity: 1, transform: "scale(1)" });
}

/**
 * Fades out and removes a modal or menu element, restoring body scroll.
 * @param {jQuery} element - The jQuery element to close.
 */
function closeElement(element) {
	element.css({ opacity: 0 });
	$("body").css("overflow", "");
	setTimeout(() => {
		element.css({ visibility: "hidden" }).remove();
	}, 300);
}

// =============================
// Modal Functionalities
// =============================

/**
 * Creates a modal with the given ID and HTML content.
 * @param {string} id - The modal ID.
 * @param {string} title - Modal title text.
 * @param {string} description - Modal description text.
 * @param {string} formContent - Inner HTML for the modal form.
 * @returns {jQuery} The created modal.
 */
function createModal(id, title, description, formContent) {
	const modal = $(`
    <div id="${id}" class="modal" aria-hidden="true">
      <div class="modal__overlay"></div>
      <div class="modal__content">
        <div class="modal__wrapper">
          <div class="modal__info">
            <h2 class="modal__title">${title}</h2>
            <p class="modal__description">${description}</p>
          </div>
          <div class="modal__form-wrapper">
            <div class="modal__close-wrapper">
              <button class="modal__close-button" aria-label="Close modal">
                <i class="ri-close-line modal__close-icon"></i>
              </button>
            </div>
            ${formContent}
          </div>
        </div>
      </div>
    </div>
  `);

	showElement(modal);
	return modal;
}

/**
 * Closes the specified modal element.
 *
 * @param {HTMLElement} modal - The modal element to be closed.
 */
export function closeModal(modal) {
	closeElement(modal);
}

/**
 * Creates and returns a "Get Started" modal for user sign-up.
 *
 * The modal includes a form with fields for email, password, and a terms agreement checkbox.
 * It displays a title, description, and a submit button.
 *
 * @returns {HTMLElement} The constructed modal element for the "Get Started" sign-up process.
 */
export function createGetStartedModal() {
	return createModal(
		"get-started-modal",
		"Lets Get you Signed Up",
		"No charges, no fees. Get note taking in minutes!",
		`
      <form action="#" method="POST">
        <div class="modal__inputs">
          <div class="modal__form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="janedone@gmail.com" required />
          </div>
          <div class="modal__form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="*************" required />
          </div>
        </div>

        <div class="modal__actions">
          <div class="modal__terms-wrapper">
            <input type="checkbox" id="terms" name="terms" required />
            <label for="terms" class="modal__terms">I agree to all terms</label>
          </div>
          <button type="submit" class="button button--primary modal__submit">Get Started</button>
        </div>
      </form>
    `
	);
}

/**
 * Creates and returns a login modal element.
 *
 * The modal includes a form for user authentication with fields for email and password,
 * as well as buttons for submitting the login form or switching to account creation.
 *
 * @returns {HTMLElement} The constructed login modal element.
 */
export function createLoginModal() {
	return createModal(
		"login-modal",
		"Welcome Back",
		"Log in to access your notes quickly and securely.",
		`
      <form action="#" method="POST">
        <div class="modal__inputs">
          <div class="modal__form-group">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" name="email" placeholder="janedoe@gmail.com" required />
          </div>
          <div class="modal__form-group">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" name="password" placeholder="*************" required />
          </div>
        </div>

        <div class="modal__actions">
          <button type="submit" class="button button--primary modal__submit">Log In</button>
          <button type="button" class="button button--secondary modal__submit js-show-signup">Create Account</button>
        </div>
      </form>
    `
	);
}

// ============================
// Mobile Menu Functionalities
// ============================

/**
 * Creates and returns a mobile menu element for the landing page.
 *
 * The menu includes navigation links (Home, Pricing, About, Community),
 * close button, and footer actions (Login, Get Started).
 * The menu is initially shown using the `showElement` utility.
 *
 * @returns {jQuery} The jQuery object representing the mobile menu element.
 */
export function createMobileMenu() {
	const mobileMenu = $(`
    <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
      <div class="mobile-menu__overlay"></div>
      <div class="mobile-menu__content">
        <div class="mobile-menu__close-wrapper">
          <button class="mobile-menu__close-button" aria-label="Close menu">
            <i class="ri-close-line mobile-menu__close-icon"></i>
          </button>
        </div>
        <nav class="mobile-menu__navigation">
          <ul class="mobile-menu__list">
            <li class="mobile-menu__item mobile-menu__item--selected"><a href="#" class="mobile-menu__link">Home</a></li>
            <li class="mobile-menu__item"><a href="#" class="mobile-menu__link">Pricing</a></li>
            <li class="mobile-menu__item"><a href="#" class="mobile-menu__link">About</a></li>
            <li class="mobile-menu__item"><a href="#" class="mobile-menu__link">Community</a></li>
          </ul>
        </nav>
        <div class="mobile-menu__footer">
          <button class="button button--secondary mobile-menu__button">Login</button>
          <button class="button button--primary mobile-menu__button">Get Started</button>
        </div>
      </div>
    </div>
  `);

	showElement(mobileMenu);
	return mobileMenu;
}

/**
 * Closes the specified mobile menu element.
 *
 * @param {HTMLElement} mobileMenu - The mobile menu element to be closed.
 */
export function closeMobileMenu(mobileMenu) {
	closeElement(mobileMenu);
}

// ============================
// FAQ Functionalities
// ============================

// this loads the FAQ section from JSON file
/**
 * Asynchronously fetches FAQ data from a local JSON file.
 *
 * @async
 * @function fetchFAQ
 * @returns {Promise<Object[]|null>} Resolves with the fetched FAQ array if successful, or null if an error occurs.
 */
export async function fetchFAQ() {
	try {
		const { FAQ: fetchedFAQ } = await $.getJSON(
			"assets/js/pages/landing/faq-items.json"
		);

		Globals.FAQ = fetchedFAQ;
		return fetchedFAQ;
	} catch (error) {
		console.error("Failed to load FAQ JSON:", error);
		return null;
	}
}

// this creates the FAQ card item
/**
 * Creates a jQuery FAQ item element with animation and icon.
 *
 * @param {string} title - The title of the FAQ item.
 * @param {string} content - The content or answer for the FAQ item.
 * @param {string} icon - The CSS class for the icon to display.
 * @param {number} idx - The index of the FAQ item, used to calculate animation delay.
 * @returns {jQuery} The jQuery object representing the FAQ item element.
 */
function createFAQItem(title, content, icon, idx) {
	const delay = idx * 100;

	return $(`
    <details class="faq__item" data-aos="fade-up" data-aos-duration="500" data-aos-delay="${delay}">
				<summary class="faq__summary">
					  <div class="faq__summary-icon-wrapper">
							  <i class="${icon} faq__summary-icon"></i>
						</div>
						<h3 class="faq__summary-title">
								${title}
						</h3>
            <i class="ri-arrow-down-s-line faq__summary-arrow" aria-hidden="true"></i>
				</summary>
		<p class="faq__text">
			${content}
		</p>
		</details>
    `);
}

/**
 * Toggles the arrow icon direction in a FAQ summary element based on its open state.
 * Should be used as an event handler with the context (`this`) set to the summary element.
 *
 * When the summary is open, the arrow points up; when closed, it points down.
 *
 * @function
 */
function handleArrowToggle() {
	const arrow = $(this).find(".faq__summary-arrow");
	if (this.open) {
		arrow
			.removeClass("ri-arrow-down-s-line")
			.addClass("ri-arrow-up-s-line");
	} else {
		arrow
			.removeClass("ri-arrow-up-s-line")
			.addClass("ri-arrow-down-s-line");
	}
}

/**
 * Loads and renders a FAQ section by appending FAQ items to the DOM.
 * Each FAQ item is created using the provided title, content, and icon.
 * Also ensures that the toggle event listener is correctly attached to each FAQ item.
 *
 * @param {Array<{title: string, content: string, icon: string}>} section - An array of FAQ item objects to render.
 */
export function loadFAQSection(section) {
	const faqSection = $(".faq__items");

	section.forEach(({ title, content, icon }, idx) => {
		const faqItem = createFAQItem(title, content, icon, idx);
		faqSection.append(faqItem);
	});

	// Remove old listeners first
	faqSection.find("details.faq__item").each(function () {
		this.removeEventListener("toggle", handleArrowToggle);
		this.addEventListener("toggle", handleArrowToggle);
	});
}

/**
 * Checks if the FAQ filter button with the specified title is currently selected (has the "button--primary" class).
 *
 * @param {string} title - The title of the FAQ filter button to check.
 * @returns {boolean} True if the button is selected, false otherwise.
 */
export function skipFAQFilter(title) {
	return $(`.faq__filter-buttons .button:contains("${title}")`).hasClass(
		"button--primary"
	);
}
