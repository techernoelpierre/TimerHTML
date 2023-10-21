const link = document.querySelector('link[rel="stylesheet"]')
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const getTheme = JSON.parse(localStorage.getItem("myTheme"));

let theme;



if (getTheme) {
    theme = getTheme;
} else {
    theme = false;
}

if (theme === true) {
    link.href = "./styleDark.css";
} else {
    link.href = "./styleLight.css";
}



console.log(theme);

function changeTheme() {
    if (theme === true) {
        console.log("darkTheme");
        link.href = "./styleDark.css";
    } else if (theme === false) {
        console.log("lightTheme");
        link.href = "./styleLight.css";
    }
};

light.addEventListener("click", () => {
    theme = false;
    localStorage.setItem("myTheme", theme);
    changeTheme()
});

dark.addEventListener("click", () => {
    theme = true;
    localStorage.setItem("myTheme", theme);
    changeTheme()
});