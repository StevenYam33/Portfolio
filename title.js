const title = document.querySelector(".welcome-heading-title");

const titleLoop = function(){
            
    setTimeout (()=>{
        title.textContent = "Front-End Web Developer";
        document.documentElement.style.setProperty('--word-count', '46');
    },3000)

    setTimeout(() => {
        title.textContent = "Mobile App Developer";
        document.documentElement.style.setProperty('--word-count', '40');
    },6000);

    setTimeout(() => {
        title.textContent = "Financial Technology Specialist";
        document.documentElement.style.setProperty('--word-count', '62');
    },12000);
    setTimeout(() => {
        title.textContent = "Front-End Web Developer"
        document.documentElement.style.setProperty('--word-count', '46');
    },18000);

};

setInterval(titleLoop,18000);
document.onload = titleLoop();