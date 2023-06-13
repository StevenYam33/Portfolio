const cursor = document.querySelector(".cursor");
const moblieMenu = document.querySelector("#header-navigation-menu");
const profilePic = document.querySelector("#profile-pic");
const expTab = document.querySelector(".experience-tab");

var isTouching = false;
var triggeringElements = [".preloader", "#profile-pic", ".experience-tab", ".contact-main", ".footer-container", "#header-navigation-menu"]


// Set cursor movement
window.addEventListener("pointermove", e =>{
    cursor.style.display = "block";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// not display when outside
window.addEventListener("pointerout", ()=>{
    if (!isTouching) {
        cursor.style.display = "none";
    }
});

// touch starts
window.addEventListener("touchstart", ()=>{
    cursor.style.display = "block";
    isTouching = true;
});

window.addEventListener("touchmove", e=>{
    var touch = e.touches[0];
    var mouseX = touch.clientX;
    var mouseY = touch.clientY;
  
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

window.addEventListener("touchend", ()=> {
    isTouching = false;
    cursor.style.display = "none";
});

// Set color when hover to the elements
[preloader, profilePic, expTab, formContianer, footer].forEach(function(elements){

    ["pointermove", "pointerdown"].forEach(pointer => 
        elements.addEventListener(pointer, cursorColorChange)
    );
    
    elements.addEventListener("pointerout", ()=>{
        cursorColorReset();
    });

});

function moblieMenuColor(){
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);

    if (width <= 850){

        window.addEventListener('touchmove', function(event) {
            var touch = event.touches[0];
            var targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
          
            if (targetElement) {
              var isTriggeringElement = triggeringElements.some(function(selector) {
                if (selector.charAt(0) === '#') {
                  return targetElement.id === selector.substr(1);
                } else {
                  return targetElement.classList.contains(selector.substr(1));
                }
              });
          
              if (isTriggeringElement) {
                cursorColorChange();
              } else {
                cursorColorReset();
              }
            }
          });
        
    };

};

function cursorColorChange() {
    cursor.style.boxShadow = "0 0 0 1px var(--background)";
}

function cursorColorReset() {
    cursor.style.boxShadow = "0 0 0 1px var(--text)";
}

document.onload = moblieMenuColor();
window.onresize = () => moblieMenuColor();