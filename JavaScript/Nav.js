const headerNav = document.querySelector(".header-main");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY){
        headerNav.classList.add("header-hidden"); 
    } else {
        headerNav.classList.remove("header-hidden");
    }

    lastScrollY = window.scrollY;

    if (window.scrollY <= 0) {
        headerNav.classList.remove("header-hidden");
    }

});