const cursor = document.querySelector(".cursor");
const moblieMenu = document.querySelector("#header-navigation-menu");
const profilePic = document.querySelector("#profile-pic");
const expTab = document.querySelector(".experience-tab");

window.addEventListener("mousemove", (e)=>{
    // console.log(e);
    cursor.style.display = "block";
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

window.addEventListener("mouseout", ()=>{
    cursor.style.display = "none";
});


[preloader, profilePic, expTab, formContianer, footer].forEach(function(e){

    e.addEventListener("mousemove", ()=>{
        cursor.style.boxShadow = "0 0 0 1px var(--background)";
    });
    
    e.addEventListener("mouseout", ()=>{
        cursor.style.boxShadow = "0 0 0 1px var(--text)";
    });

});

function moblieMenuColor(){

    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);

    if (width <= 850){
        console.log("hi");
        moblieMenu.addEventListener("mousemove", ()=>{
            cursor.style.boxShadow = "0 0 0 1px var(--background)";
        });
        
        moblieMenu.addEventListener("mouseout", ()=>{
            cursor.style.boxShadow = "0 0 0 1px var(--text)";
        });
    };

};

document.onload = moblieMenuColor();
window.onresize = () => moblieMenuColor();