import GetData from "../components/get.js";

document.querySelector('.main-logout').innerHTML=`
<h1 class="logout-cancel"><i class="bi bi-x cancel_btn_logout"></i></h1>
        <div class="logout-card">
            <div class="logout_imgs">
                <img src="../imges/logout.svg" alt="">
            </div>
            <h1>Are You sure Want to Logout?</h1>
            <div class="logout_btns">
                <button class="logout_button_reject">Naah, I was Joking...</button><br>
                <button class="logout_button_accept">Yeah, I Want To..</button>
            </div>
        </div>
`
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


const Search=async(hi)=>{
   let res=await GetData('http://localhost:3000/products')
    let s_data=await res
    console.log(s_data);
    let hii= s_data.filter((ele) => ele.title.includes(hi));
    console.log(hii);
    sessionStorage.setItem('Search',JSON.stringify(hii));
    
    window.location.href="../pages/products.html"
 }
 const handleSearch=(e)=>{
     e.preventDefault();
     let hi=document.getElementById('main-Search').value;
     Search(hi);
     console.log(hi);
 }
 
 document.getElementById('search_inputs').addEventListener("submit",handleSearch)

temp()