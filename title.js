const title = document.querySelector(".welcome-heading-title");

const titleLoop = function(){
            
    setTimeout (()=>{
        title.textContent = "Front-End Developer";
        document.documentElement.style.setProperty('--word-count', '19');
    },3000)

    setTimeout(() => {
        title.textContent = "Mobile App Developer";
        document.documentElement.style.setProperty('--word-count', '20');
    },6000);

    setTimeout(() => {
        title.textContent = "Web Developer";
        document.documentElement.style.setProperty('--word-count', '13');
    },12000);
    setTimeout(() => {
        title.textContent = "Front-End Developer"
        document.documentElement.style.setProperty('--word-count', '19');
    },18000);

};

setInterval(titleLoop,18000);
document.onload = titleLoop();