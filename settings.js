const settingsButton = document.querySelector(".settings");
const settingsContainer = document.querySelector("#settingsContainer");

let isOpen = false;


function changeSettingsStyle() {
    if (theme) {
        settingsButton.style.color = "#E1E1E1";
    } else {
        settingsButton.style.color = "#494949";
    }
};

settingsButton.addEventListener("click", () => {

    isOpen = !isOpen

    if (isOpen) {
        settingsContainer.classList.remove("settingsContainer");
        settingsContainer.classList.add("settingsContainerOpen");

    } else {
        settingsContainer.classList.add("settingsContainer");
        settingsContainer.classList.remove("settingsContainerOpen");
        setTimeout(() => {
            settingsButton.style.color = "";
        }, 200);
    }

    if (theme) {
        settingsButton.style.color = "#E1E1E1";
    } else {
        settingsButton.style.color = "#494949";
    }

    light.addEventListener("click", () => {

        changeSettingsStyle();
    })
    dark.addEventListener("click", () => {

        changeSettingsStyle();
    })

})

