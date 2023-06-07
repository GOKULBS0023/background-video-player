const video = document.querySelector(".video-container");
const button = document.querySelector(".switch-btn");

button.addEventListener("click", ()=>{
    if (!button.classList.contains("slide")) {
        button.classList.add("slide");
        video.pause();
    }else{
        button.classList.remove("slide");
        video.play();
    }
})


// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
