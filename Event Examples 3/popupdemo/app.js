function init() {
    let btn = document.querySelector("input");
    let popup = document.querySelector(".popup-wrapper");
    let close = document.querySelector(".popup-close");

    btn.addEventListener("click", () => {
        popup.style.display = "block";
    });
    close.addEventListener("click", () => {
        popup.style.display = "none";
    });

}
window.onload = init;