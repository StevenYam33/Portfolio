const title = document.querySelector(".welcome-heading-title");

const titleLoop = function(){
            
    setTimeout (()=>{
        title.textContent = "Front-End Web Developer";
        document.documentElement.style.setProperty('--word-count', '23');
    },3000)

    setTimeout(() => {
        title.textContent = "Mobile App Developer";
        document.documentElement.style.setProperty('--word-count', '20');
    },6000);

    setTimeout(() => {
        title.textContent = "Financial Technology Specialist";
        document.documentElement.style.setProperty('--word-count', '31');
    },12000);
    setTimeout(() => {
        title.textContent = "Front-End Web Developer"
        document.documentElement.style.setProperty('--word-count', '23');
    },18000);

};

setInterval(titleLoop,18000);
document.onload = titleLoop();