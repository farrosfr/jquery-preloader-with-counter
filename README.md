# Advanced Preloader with Percentage Counter

A lightweight, standalone preloader built with CSS and jQuery. This preloader displays a smooth CSS spinning animation, your logo, and a percentage counter that runs from 0% to 100% as the page loads, providing a great user experience for asset-heavy websites.

---

## Features

-   **Smooth CSS Spinner:** A clean, lightweight loading animation created purely with CSS keyframes.
-   **Dynamic Percentage Counter:** Simulates loading progress from 0-99% and completes to 100% only when the page is fully loaded.
-   **Logo Integration:** Easily display your brand's logo at the center of the loading screen.
-   **Graceful Fade Out:** The preloader fades out smoothly once all page assets (images, scripts, etc.) are ready.
-   **Easy to Integrate:** Can be dropped into any web project with minimal setup.
-   **Dependency:** Requires jQuery.

---

## How to Use

Follow these steps to add the preloader to your website:

### 1. HTML

Copy the following HTML code and place it directly after the opening `<body>` tag in your main HTML file (or `header.php` in WordPress).

```html
<div class="preloader">
    <div class="preloader-content">
        <div class="loading-spinner"></div>
        <img class="preloader-logo" src="logo.png" alt="Logo">
        <div class="percentage-counter">0%</div>
    </div>
</div>
```
**Note:** Remember to change the `src="logo.png"` to the correct path for your logo image.

### 2. CSS

Copy the contents of `style.css` from this repository and add them to your main stylesheet. This includes all the necessary styles for the layout, spinner animation, and text.

### 3. JavaScript

Copy the contents of `script.js` from this repository and add it to your project. Make sure this script is loaded before the closing `</body>` tag.

**Important:** This script requires **jQuery** to be loaded on your page before it runs. If you don't already have it, you can add it from a CDN:
```html
<script src="[https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js)"></script>
```

---

## Customization

You can easily customize the preloader by editing the `style.css` file:
-   **Background Color:** Change the `background-color` in the `.preloader` class.
-   **Spinner Color:** Modify the `border-left-color` in the `.loading-spinner` class.
-   **Text and Logo Size:** Adjust the `max-width`, `font-size`, and other properties as needed.

---

## Need a Professional Website?

If you're looking for a custom, high-performance website or need expert help with your web development projects, I'm available for hire. My focus is on creating secure, fast, and modern web experiences.

**Visit my portfolio at [farrosfr.com](https://farrosfr.com) or contact me directly at [hello@farrosfr.com](mailto:hello@farrosfr.com).**

---

## License

This project is open-source and available under the [MIT License](LICENSE).
