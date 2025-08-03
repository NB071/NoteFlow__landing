// =============================
// Modal Functionalities
// =============================

const closeModal = ($modal) => {
	$modal.css({ opacity: 0 });
	$("body").css("overflow", "");
	setTimeout(() => {
		$modal.css({ visibility: "hidden" }).remove();
	}, 300);
};

const createGetStartedModal = () => {
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

	modal.css({ visibility: "visible", opacity: 1 });
	modal.find(".modal__overlay").css({ opacity: 1 });
	modal.find(".modal__content").css({ opacity: 1, transform: "scale(1)" });

	return modal;
};

const createLoginModal = () => {
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
              <button class="modal__close-button" aria-label="Close modal">✕</button>
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

	requestAnimationFrame(() => {
		modal.css({ visibility: "visible", opacity: 1 });
		modal.find(".modal__overlay").css({ opacity: 1 });
		modal
			.find(".modal__content")
			.css({ opacity: 1, transform: "scale(1)" });
	});

	return modal;
};

// ============================
// Event Listeners
// ============================

// Get Started Modal
$(".hero__content-left > button, .header__buttons > button:nth-child(2)").click(
	() => {
		createGetStartedModal();
	}
);

// Login Modal
$(".header__buttons > button:nth-child(1)").click(() => {
	createLoginModal();
});

// Close Modal on overlay or close button
$(document).on("click", ".modal__overlay, .modal__close-button", function () {
	closeModal($(this).closest(".modal"));
});

// Close on ESC
$(document).on("keydown", (e) => {
	if (e.key === "Escape") {
		$(".modal").each(function () {
			closeModal($(this));
		});
	}
});
