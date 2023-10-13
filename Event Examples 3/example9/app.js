const ul = document.querySelector("ul");
ul.addEventListener('click', (e) => {
    e.target.style.color = "crimson";
    //e.target.remove();
});
const btn = document.querySelector("#additem");
btn.addEventListener('click', () => {
    let task = prompt("What you wan to do next ?");
    ul.innerHTML += "<li>" + task + "</li>";

});