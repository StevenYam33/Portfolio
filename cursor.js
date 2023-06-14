const cursor = document.querySelector(".cursor");
const cursorOuter = document.querySelector(".cursorOuter");
const moblieMenu = document.querySelector("#header-navigation-menu");
const profilePic = document.querySelector("#profile-pic");
const expTab = document.querySelector(".experience-tab");

// Set cursor movement
window.addEventListener("mousemove", e =>{
    cursor.style.display = "block";
    cursorOuter.style.display = "block";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorOuter.animate({
        left: e.clientX + "px",
        top: e.clientY + "px"
    }, {duration: 800, fill: "forwards"});

});

// not display when outside
window.addEventListener("mouseout", e=>{
    if (e.relatedTarget === null) {
        cursor.style.display = "none";
        cursorOuter.style.display = "none";
    }
});

// Set color when hover to the elements
[preloader, profilePic, expTab, formContianer, footer].forEach(function(elements){

    ["mousemove", "mousedown"].forEach(pointer => 
        elements.addEventListener(pointer, cursorColorChange)
    );
    
    elements.addEventListener("mouseout", ()=>{
        cursorColorReset();
    });

});

//set color change for sidebar menu
function moblieMenuColor(){
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);

    if (width <= 850){
        moblieMenu.addEventListener("mousemove", ()=>{
            cursorColorChange();
        })

        moblieMenu.addEventListener("mouseout", ()=>{
            cursorColorReset();
        })
    };
};

function cursorColorChange() {
    cursorOuter.style.boxShadow = "0 0 0 1px var(--background)";
}

function cursorColorReset() {
    cursorOuter.style.boxShadow = "0 0 0 1px var(--text)";
}

document.onload = moblieMenuColor();
window.onresize = () => moblieMenuColor();