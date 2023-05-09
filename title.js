const title = document.querySelector(".welcome-heading-title");

const zeroWidth = [
    { width: "100%" },
    { width: "0" },
];

const fullWidth = [
    { width: "0" },
    { width: "100%" },
];

const typingOption = {
    duration: 6000,
    iterations: 1,
    fill: "forwards"
};

function titleLoop(){
            
    title.textContent = "Front-End Developer";
    document.documentElement.style.setProperty('--word-count', '19');
    title.classList.remove("untype");
    title.classList.add("type");

    setTimeout (()=>{
        title.classList.remove("type");
    },2000);

    setTimeout (()=>{
        title.classList.add("untype");
    },5000);

    setTimeout (()=>{
        title.textContent = "Mobile App Developer";
        document.documentElement.style.setProperty('--word-count', '20');
        title.classList.remove("untype");
        title.classList.add("type");
    },7000);

    setTimeout (()=>{
        title.classList.remove("type");
    },9000);

    setTimeout (()=>{
        title.classList.add("untype");
    },12000);

    setTimeout(() => {
        title.textContent = "Web Developer";
        document.documentElement.style.setProperty('--word-count', '13');
        title.classList.remove("untype");
        title.classList.add("type");
    },14000);

    setTimeout (()=>{
        title.classList.remove("type");
    },16000);

    setTimeout (()=>{
        title.classList.add("untype");
    },19000);

};

setInterval(titleLoop,21000);

document.onload = titleLoop();