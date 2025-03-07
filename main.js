let img = document.querySelector('.img');
let container = document.querySelector('.container');

function phones(phone){
    img.src = phone;
}
function colors(color){
    container.style.background =color;

}
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("ul");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        // change the style of the arrow
        if (navMenu.classList.contains("active")) {
            menuIcon.textContent = "▲"; 
        } else {
            menuIcon.textContent = "▼"; 
        }
    });
});
