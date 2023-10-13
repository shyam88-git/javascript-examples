var x = document.getElementById("mytext1");
x.onkeypress = (e) => {
    alert("char code is :" + e.charCode);
    alert("key code is :" + e.keyCode);
}
var y = document.getElementById("mytext2");
y.onkeydown = (e) => {

    alert("char code is :" + e.charCode);
    alert("key code is :" + e.keyCode);
}