const headerItem = document.querySelectorAll(".header-link");
const pages = document.querySelectorAll(".home-container");
const headerItemUnderLine = document.querySelectorAll(".header-link::before");

const pageObserver = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach((entry) =>{
        entry.target.classList.add("scrolled");
        observer.unobserve(entry.target);
    });
},{
    threshold: 0.25
});

const headerObserver = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach((entry) =>{
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

document.querySelectorAll('.home-container').forEach(e =>{
    pageObserver.observe(e)
    headerObserver.observe(e)
});