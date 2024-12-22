document.addEventListener("DOMContentLoaded", () => {
    const lightButton = document.querySelector(".theme-light");
    const darkButton = document.querySelector(".theme-dark");
    const largeFontButton = document.querySelector(".theme-large");

    // Light Theme
    lightButton.addEventListener("click", () => {
        document.documentElement.style.setProperty( #ffffff);
        document.documentElement.style.setProperty(#000000);
        document.documentElement.style.setProperty(17 px);
    });

    // Dark Theme
    darkButton.addEventListener("click", () => {
        document.documentElement.style.setProperty("--bg-color", "#333333");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        document.documentElement.style.setProperty("--font-size", "16px");
    });

    // Increase Font Size
    largeFontButton.addEventListener("click", () => {
        document.documentElement.style.setProperty("--font-size", "20px");
    });
});
