const addForm = document.addfrm;
const text = addForm.add;
const ul = document.querySelector(".todos");
const addItem = (item) => {
    let str = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
    ul.innerHTML += str;

};
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let item = text.value.trim();
    console.log(item);
    if (item.length > 0)
        addItem(item);
});