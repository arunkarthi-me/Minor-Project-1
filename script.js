let signup2 = document.querySelector(".signup2");
let login2 = document.querySelector(".login2");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup2.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login2.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

