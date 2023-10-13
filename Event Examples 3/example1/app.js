const div = document.querySelector("div");
div.addEventListener('click', () => {
    div.style.color = "red";
});
div.addEventListener('click', () => {
    div.style.fontStyle = "oblique";
});
// div.onclick = () => {
//     div.style.color = "red";
// };
// div.onclick = () => {
//     div.style.fontStyle = "oblique";
// };