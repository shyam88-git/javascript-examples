const addForm = document.addfrm;
const addItem = (task) => {

    const html = `
    <li class="list-group-item d-flex justify-content-between      align-items-center">
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    ul.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = addForm.add.value.trim();
    if (task.length > 0) {
        addItem(task);
        addForm.add.value = "";
    }
});


const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");
ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "I") {
        e.target.parentElement.remove();
    }

});
const refreshTodos = (task) => {

    const li = ul.children;

    for (let item of li) {
        const text = item.innerText.toLowerCase();
        if (text.indexOf(task) === -1) {
            item.classList.add("filtered");
        } else {

            item.classList.remove("filtered");
        }
    }

};
search.addEventListener('keyup', () => {

    refreshTodos(search.value.trim().toLowerCase());
});