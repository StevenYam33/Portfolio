const cursor = document.querySelector(".cursor");
const moblieMenu = document.querySelector("#header-navigation-menu");
const profilePic = document.querySelector("#profile-pic");
const expTab = document.querySelector(".experience-tab");

// Set cursor movement
window.addEventListener("pointermove", e =>{
    cursor.style.display = "block";
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});
// not display when outside
window.addEventListener("pointerout", ()=>{
    cursor.style.display = "none";
});

// moblie touch events
window.addEventListener("pointerdown", e =>{
    cursor.style.display = "block";
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

// moblie scroll events
window.addEventListener('scroll', ()=>{
    cursor.style.display = "block";
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

window.addEventListener("pointercancel", ()=>{
    cursor.style.display = "none";
});

// Set color when hover to the elements
[preloader, profilePic, expTab, formContianer, footer].forEach(function(e){

    e.addEventListener("pointermove", ()=>{
        cursor.style.boxShadow = "0 0 0 1px var(--background)";
    });
    
    e.addEventListener("pointerout", ()=>{
        cursor.style.boxShadow = "0 0 0 1px var(--text)";
    });

});

function moblieMenuColor(){

    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);

    if (width <= 850){
        moblieMenu.addEventListener("pointermove", ()=>{
            cursor.style.boxShadow = "0 0 0 1px var(--background)";
        });
        
        moblieMenu.addEventListener("pointerout", ()=>{
            cursor.style.boxShadow = "0 0 0 1px var(--text)";
        });
    };

};

document.onload = moblieMenuColor();
window.onresize = () => moblieMenuColor();