var x = document.getElementById("mytext");
var s = document.getElementById("sp1");
x.onkeypress = (e) => {
    if (e.charCode >= 48 && e.charCode <= 57) {
        s.innerHTML = "Correct!";
        x.style.outline = "none";
        s.style.color = "limegreen";
        x.style.border = "solid 1px limegreen";
    } else {
        s.innerHTML = "Only digits allowed!";
        x.style.outline = "none";
        s.style.color = "crimson";
        x.style.border = "solid 1px crimson";
        return false;
    }


}