const headerItem = document.querySelectorAll(".header-link");
const pages = document.querySelectorAll(".home-container");
const headerItemUnderLine = document.querySelectorAll(".header-link::before");

const observer = new IntersectionObserver((entries, observer) => {
    
    entries.filter(e => e.isIntersecting).forEach((entry) =>{
        entry.target.classList.add("scrolled");

        if (entry.isIntersecting){
            const index = Array.from(pages).indexOf(entry.target)
            headerItem.forEach(headerItem => {
                headerItem.classList.remove("activeTab")
            })
            if (headerItem[index-1]) {
                headerItem[index-1].classList.add("activeTab");
            }
        }
    });
},{
    threshold: 0.75
});

document.querySelectorAll('.home-container')
    .forEach(e =>{
        observer.observe(e)
    });