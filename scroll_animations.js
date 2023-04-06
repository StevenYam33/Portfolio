// const sections = document.querySelector(".animation");

const observer = new IntersectionObserver((entries, observer) => {
    
    entries.filter(e => e.isIntersecting).forEach((entry) =>{
        entry.target.classList.add("scroll");
        observer.unobserve(entry.target);
    });

},{
    threshold: 0.2
});

document.querySelectorAll('.home-container')
    .forEach(e =>{
        observer.observe(e)
    });