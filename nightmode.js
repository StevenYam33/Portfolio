const themeButton = document.querySelector(".theme-button");
const themes = document.querySelectorAll(".themes");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

// animations
const SpinningSmall = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
];
  
const SpinningBig = [
    { transform: "rotate(0) scale(0)" },
    { transform: "rotate(-360deg) scale(1)" },
];


// set themes into local storage
const storeTheme = function(theme) {
    localStorage.setItem("CurrentTheme", theme)
};

// set default theme and change theme on load
const getTheme = function() {
    const storedTheme = localStorage.getItem("CurrentTheme");

    // set default theme if user prfer dark or not
    if (storedTheme == null) {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches === true) {
            document.documentElement.setAttribute("current-theme", "dark");
            dark.classList.add("hide");
            console.log("system dark")
        } else {
            document.documentElement.setAttribute("current-theme", "light");
            light.classList.add("hide");
            console.log("system light")
        }
    };

    //  Check and set if local storage matches
    themes.forEach((themeOption) => {
        if (themeOption.id === storedTheme){
            themeOption.classList.add("hide");
            document.documentElement.setAttribute("current-theme", storedTheme);
        };
    });
};

// store theme into locoal storage
themes.forEach((themeOption) => {
    themeOption.addEventListener("click", ()=> {
        storeTheme(themeOption.id);
    });
});

document.onload = getTheme();

// set theme with animations & delay on button clicked
themeButton.addEventListener("click", () =>{

    themeButton.animate(SpinningSmall, 500);

    setTimeout(() => {

        themeButton.animate(SpinningBig, 500);

        if (dark.classList.contains("hide")){

            console.log("Enter light");

            dark.classList.remove("hide");
            light.classList.add("hide");

            document.documentElement.setAttribute("current-theme", "light");

        } else if (light.classList.contains("hide")) {

            console.log("Enter dark");

            light.classList.remove("hide");
            dark.classList.add("hide");

            document.documentElement.setAttribute("current-theme", "dark");
        }

    }, 500);

});

