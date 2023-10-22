const headerList = document.querySelector(".header-list");
const headerButton = document.querySelector(".header-menu-button");
const main = document.querySelector("#home");
const headerLink = document.querySelector(".header-links");
const body = document.querySelector("body");
const html = document.documentElement;


[headerButton, headerLink].forEach(function(e){
    e.addEventListener('click', () => {
        const navExpanded = headerList.getAttribute('nav-expanded');
    
        if (navExpanded === "false") {
            headerList.setAttribute("nav-expanded", true);
            html.setAttribute("nav-expanded", true);
            body.setAttribute("nav-expanded", true);
            headerButton.setAttribute("nav-expanded", true);
            main.setAttribute("nav-expanded", true);
            footer.setAttribute("nav-expanded", true);
        } else if (navExpanded === "true") {
            headerList.setAttribute("nav-expanded", false);
            html.setAttribute("nav-expanded", false);
            body.setAttribute("nav-expanded", false);
            headerButton.setAttribute("nav-expanded", false);
            main.setAttribute("nav-expanded", false);
            footer.setAttribute("nav-expanded", false);
        }
    })
});

main.addEventListener('click', () =>{
    const navExpanded = headerList.getAttribute('nav-expanded');

    if (navExpanded === "true") {
        headerList.setAttribute("nav-expanded", false);
        html.setAttribute("nav-expanded", false);
        body.setAttribute("nav-expanded", false);
        headerButton.setAttribute("nav-expanded", false);
        main.setAttribute("nav-expanded", false);
        footer.setAttribute("nav-expanded", false);
    }
    })
