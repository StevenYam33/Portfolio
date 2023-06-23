const cursor = document.querySelector(".cursor");
const cursorOuter = document.querySelector(".cursorOuter");
const moblieMenu = document.querySelector("#header-navigation-menu");
const profilePic = document.querySelector(".about-pic img");
const expTab = document.querySelector(".experience-tab");

// Set cursor movement
window.addEventListener("mousemove", e =>{
    if (!isTouchDevice()) {
        cursor.style.display = "block";
        cursorOuter.style.display = "block";
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    
        cursorOuter.animate({
            left: e.clientX + "px",
            top: e.clientY + "px"
        }, 
        {duration: 800, fill: "forwards"}
        );
    }
});

// not display when outside
window.addEventListener("mouseout", e =>{
    if (e.relatedTarget === null) {
        cursorDisable();
    }
});

// Hide cursor for touch events
["touchstart", "touchend", "touchmove", "touchcancel"].forEach(touchEvent =>{
    window.addEventListener(touchEvent, ()=> {
        if (isTouchDevice()){
            cursorDisable();
        }
    })
});

// Set color when hover to the elements
[preloader, profilePic, expTab, formContianer].forEach(elements => {
    ["mousemove", "mousedown"].forEach(mouseEvent => 
        elements.addEventListener(mouseEvent, cursorOuterColorChange)
    );
    
    elements.addEventListener("mouseout", () => {
        cursorOuterColorReset();
    });
});

// Check if device is touch device or not
function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

//set color change for sidebar menu
function moblieMenuColor(){
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);

    if (width <= 850){
        moblieMenu.addEventListener("mousemove", ()=>{
            cursorOuterColorChange();
        })

        moblieMenu.addEventListener("mouseout", ()=>{
            cursorOuterColorReset();
        })
    };

    // reset the color when the width back to nomral
    if (width > 850){
        moblieMenu.addEventListener("mousemove", ()=>{
            cursorOuterColorReset();
        })
    };
};

function cursorDisable(){
    cursor.style.display = "none";
    cursorOuter.style.display = "none";
}

function cursorOuterColorChange() {
    cursorOuter.style.boxShadow = "0 0 0 1px var(--background)";
}

function cursorOuterColorReset() {
    cursorOuter.style.boxShadow = "0 0 0 1px var(--text)";
}

document.onload = moblieMenuColor();
window.onresize = () => moblieMenuColor();