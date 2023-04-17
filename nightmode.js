const lightModeButton = document.querySelector(".settings-button");
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

// set default theme and change theme
const getTheme = function() {
    const activeTheme = localStorage.getItem("CurrentTheme");

    if (localStorage.getItem("CurrentTheme") == null) {
        light.classList.add("hide");
    }

    themes.forEach((themeOption) => {
        if (themeOption.id === activeTheme){
            themeOption.classList.add("hide");
        }
    });

    if (dark.classList.contains("hide")){
        document.documentElement.style.setProperty('--background', 'rgb(102, 119, 125)');
        document.documentElement.style.setProperty('--background-trans', 'rgba(102, 119, 125, 0.75)');
        document.documentElement.style.setProperty('--text', 'rgb(189, 209, 197)');
        document.documentElement.style.setProperty('--text-trans', 'rgba(189, 209, 197, 0.75)');
        document.documentElement.style.setProperty('--dark-text', ' rgb(55, 71, 76)');
        document.documentElement.style.setProperty('--dark-text-trans', 'rgba(55, 71, 76, 0.75)');
    } else if (light.classList.contains("hide")) {
        document.documentElement.style.setProperty('--background', 'rgb(189, 209, 197)');
        document.documentElement.style.setProperty('--background-trans', 'rgba(189, 209, 197, 0.75)');
        document.documentElement.style.setProperty('--text', 'rgb(102, 119, 125)');
        document.documentElement.style.setProperty('--text-trans', 'rgba(102, 119, 125, 0.75)');
        document.documentElement.style.setProperty('--dark-text', ' rgb(55, 71, 76)');
        document.documentElement.style.setProperty('--dark-text-trans', 'rgba(55, 71, 76, 0.75)');
    }

};

// store theme
themes.forEach((themeOption) => {
    themeOption.addEventListener("click", ()=> {
        storeTheme(themeOption.id);
    });
});

document.onload = getTheme();

// set theme
lightModeButton.addEventListener('click', () =>{

    lightModeButton.animate(SpinningSmall, 500);

    setTimeout(() => {

        lightModeButton.animate(SpinningBig, 500);

        if (dark.classList.contains("hide")){
            console.log('light');
            dark.classList.remove("hide");
            light.classList.add("hide");

            document.documentElement.style.setProperty('--background', 'rgb(189, 209, 197)');
            document.documentElement.style.setProperty('--background-trans', 'rgba(189, 209, 197, 0.75)');
            document.documentElement.style.setProperty('--text', 'rgb(102, 119, 125)');
            document.documentElement.style.setProperty('--text-trans', 'rgba(102, 119, 125, 0.75)');
            document.documentElement.style.setProperty('--dark-text', ' rgb(55, 71, 76)');
            document.documentElement.style.setProperty('--dark-text-trans', 'rgba(55, 71, 76, 0.75)');
        } else if (light.classList.contains("hide")) {
            console.log('dark');
            light.classList.remove("hide");
            dark.classList.add("hide");

            document.documentElement.style.setProperty('--background', 'rgb(102, 119, 125)');
            document.documentElement.style.setProperty('--background-trans', 'rgba(102, 119, 125, 0.75)');
            document.documentElement.style.setProperty('--text', 'rgb(189, 209, 197)');
            document.documentElement.style.setProperty('--text-trans', 'rgba(189, 209, 197, 0.75)');
            document.documentElement.style.setProperty('--dark-text', ' rgb(55, 71, 76)');
            document.documentElement.style.setProperty('--dark-text-trans', 'rgba(55, 71, 76, 0.75)');
        }

    }, 500);

});

