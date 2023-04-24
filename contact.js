const formButton = document.querySelector(".contact-form-open");
const formContianer = document.querySelector(".contact-main");
const formMain = document.querySelector(".contact-form");
const sumbmit = document.querySelector(".contact-submit-button");


// animations
const xSmall = [
    { transform: "scaleX(1)" },
    { transform: "scaleX(0.02)" },
];

const ySmall = [
    { transform: "scaleX(0.02) scaleY(1)" },
    { transform: "scaleX(0.02) scaleY(0)" },
];
  
const yBig = [
    { transform: "scaleX(0.02) scaleY(0)" },
    { transform: "scaleX(0.02) scaleY(1)" },
];

const xBig = [
    { transform: "scaleX(0.02) scaleY(1)" },
    { transform: "scaleX(1) scaleY(1)" },
];

const timing = {
    duration: 350,
    iterations: 1,
    fill: "forwards"
};

formButton.addEventListener("click", ()=>{
    
    formContianer.animate(xSmall, timing)

    setTimeout(() =>{
        formContianer.animate(ySmall, timing)
    }, 350)
    
    setTimeout(() =>{
        formContianer.animate(yBig, timing)
    }, 700)

    setTimeout(() =>{
        formContianer.animate(xBig, timing)
        formMain.classList.remove("hide");
        formButton.classList.add("hide");
        formContianer.scrollIntoView({block: "center"});
    }, 1050)
    
});

sumbmit.addEventListener('submit', ()=>{
    formMain.classList.add("hide");
    formButton.classList.remove("hide");
})