document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.querySelector(".modal");
    const modalImage = modal.querySelector("img");
    const closeButton = modal.querySelector(".close");

   
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            const fullImageSrc = thumbnail.getAttribute("data-full");
            modalImage.src = fullImageSrc;
            modal.style.display = "flex";
        });
    });

  
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
