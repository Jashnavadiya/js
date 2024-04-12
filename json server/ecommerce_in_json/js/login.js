

let users = JSON.parse(localStorage.getItem("Bro")) || [];
const calca = (e) => {
    e.preventDefault();
    let user = {
        email: document.getElementById('validationCustomUsername').value,
        pass: document.getElementById('validationCustom04').value
    }

    let isLogin = false
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const myObj = JSON.parse(this.responseText);
        let n = myObj.admin.length;
        let m = myObj.user.length


        let adminlogin = myObj.admin.filter((ele) => (ele.email == user.email || ele.un == user.email) && ele.pass == user.pass)
        console.log(adminlogin);
        if (adminlogin.length > 0) {
            sessionStorage.setItem("isAdmin", true);
            sessionStorage.setItem("isLogin", true);
        }
        let userlogin = users.filter((ele) => (ele.email == user.email || ele.un == user.un) && ele.pass == user.pass)
        console.log(userlogin);
        if (userlogin.length > 0) {
            sessionStorage.setItem("isAdmin", false);
            sessionStorage.setItem("isLogin", true);
        }
        isLogin = sessionStorage.getItem("isLogin");
        if (!isLogin) {
            alert('Enter appropriate email and password.')
        }
        else {
            window.location.href = "../pages/products.html";
        }
    }
    xmlhttp.open("GET", "../js/data.txt");
    xmlhttp.send();

}
document.getElementById('Main-form').addEventListener('submit', calca)

