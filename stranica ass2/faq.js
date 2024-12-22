document.addEventListener("DOMContentLoaded", () => {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling; 
            const isOpen = content.style.display === "block";

           
            document.querySelectorAll(".accordion-content").forEach(item => {
                item.style.display = "none";
            });

            
            content.style.display = isOpen ? "none" : "block";
        });
    });
});
