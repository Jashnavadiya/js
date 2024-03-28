


document.querySelector('.main-logout').classList.add('hidden')
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
            document.querySelector('.main-logout').classList.remove('hidden')
            document.querySelector('.profile_icon_dropdown').classList.remove('hidden')
        })

    }
    else {
        document.querySelector('.logins').classList.remove('hidden');
        document.querySelector('.loginss').classList.remove('hidden');
        document.getElementById('logout_btn').innerHTML = "Login/SignUp"
        document.getElementById('logout_btn').addEventListener('click', () => {
            window.location.href = "../pages/login.html"
        })
    }
    document.querySelector('.bi-person-fill').addEventListener('click', () => {
        document.querySelector('.profile_icon_dropdown').classList.toggle('hidden')
    })

    if (isLogin == false) {
        isAdmin = false
    }
}



document.querySelector('.cancel_btn_logout').addEventListener('click', () => {
    document.querySelector('.main-logout').classList.add('hidden')
    temp();
})
document.querySelector('.logout_button_reject').addEventListener('click', () => {
    document.querySelector('.main-logout').classList.add('hidden')
    document.querySelector('.profile_icon_dropdown').classList.toggle('hidden')
    temp();
})
document.querySelector('.logout_button_accept').addEventListener('click', () => {
    sessionStorage.setItem('isLogin', false);
    sessionStorage.setItem('isAdmin', false);
    document.querySelector('.main-logout').classList.add('hidden')
    document.querySelector('.profile_icon_dropdown').classList.toggle('hidden');
    window.location.href = "../pages/index.html"
    temp();
})
document.getElementById('logout_btn').addEventListener('click', () => { temp() })
temp()