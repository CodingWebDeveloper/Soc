const searchVideo = document.getElementById("search-video");
const errorVideo = document.getElementById("error-video");

const searchVideoButton = document.getElementById("btn-search-video");

const searchUser = document.getElementById("search-user");
const errorUser = document.getElementById("error-user");
const searchUserButton = document.getElementById("btn-search-user");

searchVideoButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!searchVideo.value) {
        errorVideo.style.display = "inline-block",
            errorVideo.textContent = "Search value required";
        return;
    }

    searchVideo.value = "";
    errorVideo.style.display = "none";
});

searchUserButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!searchUser.value) {
        errorUser.style.display = "inline-block";
        errorUser.textContent = "Search value required";
        return;
    }

    searchUser.value = "";
    errorUser.style.display = "none";

});