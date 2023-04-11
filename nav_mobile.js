const headerList = document.querySelector(".header-list");
const headerButton = document.querySelector(".header-menu-button");
const main = document.querySelector("#home");
const headerLink = document.querySelector(".header-links");
const body = document.querySelector("body");


[headerButton, headerLink].forEach(function(e){
    e.addEventListener('click', () => {
        const visibility = headerList.getAttribute('data-visible');
    
        if (visibility === "false") {
            headerList.setAttribute("data-visible", true);
            body.setAttribute("aria-expanded", true);
            headerButton.setAttribute("aria-expanded", true);
            main.setAttribute("aria-expanded", true);
        } else if (visibility === "true") {
            headerList.setAttribute("data-visible", false);
            body.setAttribute("aria-expanded", false);
            headerButton.setAttribute("aria-expanded", false);
            main.setAttribute("aria-expanded", false);
        }
    })
});

main.addEventListener('click', () =>{
    const visibility = headerList.getAttribute('data-visible');

    if (visibility === "true") {
        headerList.setAttribute("data-visible", false);
        body.setAttribute("aria-expanded", false);
        headerButton.setAttribute("aria-expanded", false);
        main.setAttribute("aria-expanded", false);
    }
    })
