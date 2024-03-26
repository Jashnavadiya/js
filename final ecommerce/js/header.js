document.querySelector('.bi-search').addEventListener('click', () => {
    document.querySelector('.outer6 div').classList.toggle('shown-sbh');
})
let isAdmin=JSON.parse(sessionStorage.getItem("isAdmin")) || false;
let isLogin=JSON.parse(sessionStorage.getItem("isLogin")) || false;
if(!isAdmin){
    document.querySelector('.addproduct_nav').classList.add('hidden');
}
else{
    document.querySelector('.addproduct_nav').classList.remove('hidden');
}
if(isLogin){
    document.querySelector('.logins').classList.add('hidden');
    document.querySelector('.loginss').classList.add('hidden');
}
else{
    document.querySelector('.logins').classList.remove('hidden');
    document.querySelector('.loginss').classList.remove('hidden');
}