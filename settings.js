const settingsButton = document.querySelector(".settings");
const settingsContainer = document.querySelector("#settingsContainer");

let isOpen = false;

settingsButton.addEventListener("click", () => {

    isOpen = !isOpen

    if (isOpen) {
        settingsContainer.classList.remove("settingsContainer");
        settingsContainer.classList.add("settingsContainerOpen");
        settingsButton.style.color = "#000";
    } else {
        settingsContainer.classList.add("settingsContainer");
        settingsContainer.classList.remove("settingsContainerOpen");
        setTimeout(() => {
            settingsButton.style.color = "";
        }, 200);

    }
})

