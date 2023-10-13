function changeColor() {
    this.style.color = "red";
}

function init() {
    var x = document.querySelector("div");
    x.onclick = changeColor;
}
window.onload = init;