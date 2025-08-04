// =============================
// variables
// =============================
import { Globals } from "./globals.js";

// =============================
// Modal Functionalities
// =============================

/**
 * Closes the specified modal by fading it out and then removing it from the DOM.
 * Also restores the body's overflow property.
 *
 * @param {jQuery} modal - The jQuery object representing the modal to close.
 */
export function closeModal(modal) {
	modal.css({ opacity: 0 });
	$("body").css("overflow", "");
	setTimeout(() => {
		modal.css({ visibility: "hidden" }).remove();
	}, 300);
}

/**
 * Creates and displays a "Get Started" modal for user sign-up.
 *
 * The modal includes a form for email and password input, a terms agreement checkbox,
 * and a close button. It appends the modal to the body, disables body scrolling,
 * and animates the modal's appearance.
 *
 * @returns {jQuery} The jQuery object representing the created modal element.
 */
export function createGetStartedModal() {
	const modal = $(`
    <div id="get-started-modal" class="modal" aria-hidden="true">
      <div class="modal__overlay"></div>
      <div class="modal__content">
        <div class="modal__wrapper">
          <div class="modal__info">
            <h2 class="modal__title">Lets Get you Signed Up</h2>
            <p class="modal__description">
              No charges, no fees. Get note taking in minutes!
            </p>
          </div>
          <div class="modal__form-wrapper">
            <div class="modal__close-wrapper">
              <button class="modal__close-button" aria-label="Close modal">
                ✕
              </button>
            </div>
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
                <button type="submit" class="button button--primary modal__submit">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `);

	$("body").append(modal);
	$("body").css("overflow", "hidden");

	modal[0].offsetHeight;

	modal.attr("aria-hidden", "false");

	modal.css({ visibility: "visible", opacity: 1 });
	modal.find(".modal__overlay").css({ opacity: 1 });
	modal.find(".modal__content").css({ opacity: 1, transform: "scale(1)" });

	return modal;
}

/**
 * Creates and displays a login modal dialog on the page.
 *
 * The modal includes fields for email and password, as well as buttons for logging in and creating an account.
 * It also handles accessibility attributes and prevents background scrolling while the modal is open.
 *
 * @returns {jQuery} The jQuery object representing the created modal element.
 */
export function createLoginModal() {
	const modal = $(`
    <div id="login-modal" class="modal" aria-hidden="true">
      <div class="modal__overlay"></div>
      <div class="modal__content">
        <div class="modal__wrapper">
          <div class="modal__info">
            <h2 class="modal__title">Welcome Back</h2>
            <p class="modal__description">
              Log in to access your notes quickly and securely.
            </p>
          </div>
          <div class="modal__form-wrapper">
            <div class="modal__close-wrapper">
              <button class="modal__close-button" aria-label="Close modal">
                <i class="ri-close-line modal__close-icon"></i>
              </button>
            </div>
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
                <button type="submit" class="button button--primary modal__submit">
                  Log In
                </button>
                <button type="button" class="button button--secondary modal__submit js-show-signup">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `);

	$("body").append(modal);
	$("body").css("overflow", "hidden");

	modal[0].offsetHeight;

	modal.attr("aria-hidden", "false");

	modal.css({ visibility: "visible", opacity: 1 });
	modal.find(".modal__overlay").css({ opacity: 1 });
	modal.find(".modal__content").css({ opacity: 1, transform: "scale(1)" });

	return modal;
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
