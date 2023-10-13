var ele, t;

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
    popup.addEventListener('click', () => {
        t = setInterval(function() {
            ele = document.querySelector('.popup-content');
            ele.style.visibility = (ele.style.visibility == 'hidden' ? 'visible' : 'hidden');
        }, 200);
    });
    popup.addEventListener('mouseover', () => {
        if (t) {
            clearInterval(t);
            ele.style.visibility = 'visible';
        }
    });
}
window.onload = init;