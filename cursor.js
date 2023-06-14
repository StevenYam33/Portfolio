const cursor = document.querySelector(".cursor");
const moblieMenu = document.querySelector("#header-navigation-menu");
const profilePic = document.querySelector("#profile-pic");
const expTab = document.querySelector(".experience-tab");

// Set cursor movement
window.addEventListener("mousemove", e =>{
    cursor.style.display = "block";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// not display when outside
window.addEventListener("mouseout", ()=>{

    cursor.style.display = "none";
});
// Set color when hover to the elements
[preloader, profilePic, expTab, formContianer, footer, moblieMenu].forEach(function(elements){

    ["mousemove", "mousedown"].forEach(pointer => 
        elements.addEventListener(pointer, cursorColorChange)
    );
    
    elements.addEventListener("mouseout", ()=>{
        cursorColorReset();
    });

});

function cursorColorChange() {
    cursor.style.boxShadow = "0 0 0 1px var(--background)";
}

function cursorColorReset() {
    cursor.style.boxShadow = "0 0 0 1px var(--text)";
}

document.onload = moblieMenuColor();
window.onresize = () => moblieMenuColor();