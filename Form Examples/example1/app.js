const myform = document.frmlogin;
const btn = myform.btnlogin;
const username = myform.txtuser;
const password = myform.txtpwd;
btn.addEventListener("click", () => {
    let user = username.value;
    let pwd = password.value;
    alert(`You typed\nusername:${user}\npassword:${pwd}`);

});