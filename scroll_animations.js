const headerItem = document.querySelectorAll(".header-link");
const pages = document.querySelectorAll(".home-container");
const headerItemUnderLine = document.querySelectorAll(".header-link::before");

const observer = new IntersectionObserver((entries, observer) => {
    
    entries.filter(e => e.isIntersecting).forEach((entry) =>{
        entry.target.classList.add("scrolled");

        if (entry.isIntersecting){
            console.log(entry.target);
            const index = Array.from(pages).indexOf(entry.target)
            headerItem.forEach(headerItem => {
                headerItem.classList.remove("activeTab")
            })
            headerItem[index-1].classList.add("activeTab")
        }
    });

},{
    threshold: 0.2
});

document.querySelectorAll('.home-container')
    .forEach(e =>{
        observer.observe(e)
    });