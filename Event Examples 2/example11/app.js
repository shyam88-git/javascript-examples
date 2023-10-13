var x = document.getElementById("mytext");
x.onkeypress = (e) => {
    alert("you pressed the key " + String.fromCharCode(e.charCode));
}