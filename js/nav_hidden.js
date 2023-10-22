const headerNav = document.querySelector(".header-main");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navExpanded = headerList.getAttribute('nav-expanded');

    if (lastScrollY < window.scrollY && navExpanded === "false"){
        headerNav.classList.add("header-hidden"); 
    } else {
        headerNav.classList.remove("header-hidden");
    }

    lastScrollY = window.scrollY;

    if (window.scrollY <= 0) {
        headerNav.classList.remove("header-hidden");
    }

});