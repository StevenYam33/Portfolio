const header = document.querySelector("#header");
const home = document.querySelector("#home");
const footer = document.querySelector("#footer");
const preloader = document.querySelector("#preloader");

window.onload = function(){
    setTimeout(function(){
        header.classList.remove("hide");
        home.classList.remove("hide");
        footer.classList.remove("hide");
        preloader.classList.add("hide");
    }, 3000)
}