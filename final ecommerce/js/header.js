const temp = () => {


    document.querySelector('.profile_icon_dropdown').classList.add('hidden');

    document.querySelector('.bi-search').addEventListener('click', () => {
        document.querySelector('.outer6 div').classList.toggle('shown-sbh');
    })
    let isAdmin = JSON.parse(sessionStorage.getItem("isAdmin")) || false;
    let isLogin = JSON.parse(sessionStorage.getItem("isLogin")) || false;
    if (!isAdmin) {
        document.querySelector('.addproduct_nav').classList.add('hidden');

    }
    else {
        document.querySelector('.addproduct_nav').classList.remove('hidden');
    }
    if (isLogin) {
        document.querySelector('.logins').classList.add('hidden');
        document.querySelector('.loginss').classList.add('hidden');
        document.getElementById('logout_btn').addEventListener('click', () => {
            sessionStorage.setItem("isLogin", false);
            document.querySelector('.profile_icon_dropdown').classList.remove('hidden')
        })

    }
    else {
        document.querySelector('.logins').classList.remove('hidden');
        document.querySelector('.loginss').classList.remove('hidden');
        document.getElementById('logout_btn').innerHTML = "Login/SignUp"
        document.getElementById('logout_btn').addEventListener('click', () => {
            window.location.href = "./pages/login.html"
        })
    }
    document.querySelector('.bi-person-fill').addEventListener('click', () => {
        document.querySelector('.profile_icon_dropdown').classList.toggle('hidden')
    })
}
document.getElementById('logout_btn').addEventListener('click', temp)
temp()