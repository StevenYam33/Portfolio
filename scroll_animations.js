const home = document.querySelector(".home-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add("scroll-animation")
        }
    })
})