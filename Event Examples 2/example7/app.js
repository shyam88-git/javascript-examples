var x = document.getElementById("mytext");
x.onkeypress = (e) => {

    alert("you pressed the key " + e.charCode);
}