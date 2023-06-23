const openForm = document.querySelector(".contact-form-open");
const formContianer = document.querySelector(".contact-main");
const formMain = document.querySelector(".contact-form");
const sumbmit = document.querySelector(".contact-submit-button");
const name = document.querySelector(".contact-name")
const alert = document.querySelector(".contact-alert");
const resubmit = document.querySelector(".contact-alert-button");

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

// tranformations
openForm.addEventListener("click", ()=>{
    
    formContianer.animate(xSmall, timing)

    setTimeout(() =>{
        formContianer.animate(ySmall, timing)
    }, 350)
    
    setTimeout(() =>{
        formContianer.animate(yBig, timing)
    }, 700)

    setTimeout(() =>{
        formContianer.animate(xBig, timing)
        openForm.classList.add("hide");
        formMain.classList.remove("hide");
        formContianer.scrollIntoView({block: "center"});
    }, 1050)
    
});

// form submit and tranform to success page
formMain.addEventListener("submit", event =>{
    event.preventDefault();

    const formData = new FormData(formMain);
    const data = new URLSearchParams(formData);

    fetch("https://formspree.io/f/mnqyklwg", {
        method: "POST",
        body: data
    })
    .then(res => {
       return res.text();
    }) 
    .catch(error => {
       console.log(error);
    });
    
    name.textContent = formData.get("Name")

    formMain.reset();

    formContianer.animate(xSmall, timing)

    setTimeout(() =>{
        formContianer.animate(ySmall, timing)
    }, 350)
    
    setTimeout(() =>{
        formContianer.animate(yBig, timing)
        alert.classList.remove("hide");
        formMain.classList.add("hide");
        formContianer.scrollIntoView({block: "center"});
    }, 700)

    setTimeout(() =>{
        formContianer.animate(xBig, timing)
    }, 1050)

    return false; 
});

// resubmit
resubmit.addEventListener("click", ()=>{
    formContianer.animate(xSmall, timing)

    setTimeout(() =>{
        formContianer.animate(ySmall, timing)
    }, 350)
    
    setTimeout(() =>{
        formContianer.animate(yBig, timing)
    }, 700)

    setTimeout(() =>{
        formContianer.animate(xBig, timing)
        alert.classList.add("hide");
        formMain.classList.remove("hide");
        formContianer.scrollIntoView({block: "center"});
    }, 1050)
});