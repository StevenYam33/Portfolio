const headerList = document.querySelector(".header-list");
const headerButton = document.querySelector(".header-menu-button");
const main = document.querySelector("#home");
const headerLink = document.querySelector(".header-links");
const body = document.querySelector("body");
const html = document.documentElement;


[headerButton, headerLink].forEach(function(e){
    e.addEventListener('click', () => {
        const visibility = headerList.getAttribute('data-visible');
    
        if (visibility === "false") {
            headerList.setAttribute("data-visible", true);
            html.setAttribute("nav-expanded", true);
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";
            body.setAttribute("nav-expanded", true);
            headerButton.setAttribute("nav-expanded", true);
            main.setAttribute("nav-expanded", true);
            footer.setAttribute("nav-expanded", true);
        } else if (visibility === "true") {
            headerList.setAttribute("data-visible", false);
            html.setAttribute("nav-expanded", false);
            html.style.overflow = "auto";
            body.style.overflow = "auto";
            body.setAttribute("nav-expanded", false);
            headerButton.setAttribute("nav-expanded", false);
            main.setAttribute("nav-expanded", false);
            footer.setAttribute("nav-expanded", false);
        }
    })
});

main.addEventListener('click', () =>{
    const visibility = headerList.getAttribute('data-visible');

    if (visibility === "true") {
        headerList.setAttribute("data-visible", false);
        html.setAttribute("nav-expanded", false);
        body.setAttribute("nav-expanded", false);
        headerButton.setAttribute("nav-expanded", false);
        main.setAttribute("nav-expanded", false);
        footer.setAttribute("nav-expanded", false);
    }
    })
