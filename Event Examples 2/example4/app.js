var x = document.getElementById("mypic");
x.onmouseover = (e) => {
    x.setAttribute("src", "../joe_blink.jpg");
    console.log(e);
}

x.onmouseout = () => {
    x.setAttribute("src", "../joe_open.jpg");
}