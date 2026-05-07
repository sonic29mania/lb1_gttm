document.addEventListener("DOMContentLoaded", () => {
    
    //1. СЛАЙДЕР ВІДЕО ---
    let slides = document.querySelectorAll(".slide");
    let index = 0;
    if (slides.length > 0) {
        function changeVideo() {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }

        setInterval(changeVideo, 4000); 
    }
});