# NoteFlow - AI SaaS Landing Page

<img src="https://nimabargestan.com/wp-content/uploads/2025/08/NetFlow-Landing.png" />

**NoteFlow** – A pixel-perfect, responsive landing page **faithfully implemented from a [Figma design](https://www.figma.com/community/file/1477504952526098298)**.  
Built with **jQuery** and **SCSS** using a **mobile‑first approach**, following **Separation of Concerns (SoC)** and **accessibility best practices**.  

The page was tested using the **Lighthouse extension** and consistently achieved **95+ scores** across **Performance, Accessibility, Best Practices, and SEO**.

---

## 🚀 Features

- **Responsive Design** – Optimized for mobile, tablet, and desktop.
- **SCSS Architecture** – Organized and modular with partials, components, and page‑specific styles.
- **Dynamic FAQ Section** – Loaded from `faq-items.json` using jQuery.
- **Accessible Modals** – Get Started and Login modals with ARIA attributes.
- **Mobile Menu** – Slide‑in navigation with overlay and scroll lock.
- **Smooth Animations** – Subtle transitions using CSS and AOS (Animate on Scroll).

---

## 🛠 Tech Stack

- **HTML5** – Semantic and accessible markup  
- **SCSS (SASS)** – Modular styling with variables, mixins, and partials  
- **JavaScript (jQuery)** – DOM interactions and dynamic FAQ content  
- **AOS Library** – Smooth scroll animations
- **Remix Icons** - Consistent Icons
- **Lighthouse Auditing** – Verified 95+ scores in all metrics  

---

## 📂 Project Structure
```
NoteFlow__landing/
├── assets/
│ ├── fonts/ # Poppins font files
│ ├── images/
│ │ ├── avatars/
│ │ │ ├── testimonial-avatars/
│ │ │ └── trusted-avatars/
│ │ ├── companies/
│ │ ├── favicon.ico
│ │ ├── Feature(1)-image-L.webp
│ │ ├── Feature(2)-image-R.webp
│ │ ├── Hero-image-R.webp
│ │ ├── Logo.png
│ │ └── Preview-OG.png
│
├── js/
│ ├── pages/landing/
│ │ ├── faq-items.json # FAQ data
│ │ ├── globals.js # Global variables
│ │ ├── helpers.js # Utility functions
│ │ └── index.js # Main landing page logic
│
├── styles/
│ ├── components/ # Reusable UI components
│ │ ├── button.scss
│ │ ├── chip.scss
│ │ ├── footer.scss
│ │ ├── header.scss
│ │ ├── mobile-menu.scss
│ │ └── modal.scss
│ ├── pages/
│ │ └── landing.scss # Landing page-specific styles
│ └── partials/ # SCSS partials and helpers
│ ├── _colors.scss
│ ├── _globals.scss
│ ├── _mixins.scss
│ ├── _placeholders.scss
│ ├── _reset.scss
│ ├── _responsive.scss
│ └── _typography.scss
│
├── index.html # Landing page entry point
├── .gitignore
├── LICENSE
└── README.md
```

---

## 📦 Setup & Usage

1. Clone the repository:
```bash
   git clone https://github.com/NB071/NoteFlow__landing.git
   cd NoteFlow__landing
```

2. Open index.html in your browser or run with a local server. (VSC extention: `Live Server`)
3. Compile SCSS. (VSC extention: `Live Sass Compiler`)
4. Enjoy!

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push and open a Pull Request 🎉

---

## 📄 License
This project is licensed under the MIT License.

---

## 💡 Author

Nima Bargestan
