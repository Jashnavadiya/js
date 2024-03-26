

const calca=(e)=>{
    e.preventDefault();
    let user={
        email: document.getElementById('validationCustomUsername').value,
        pass: document.getElementById('validationCustom04').value
    }
    let isLogin=false
    const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let n=myObj.admin.length;
  let m=myObj.user.length
 for(let i=0;i<n;i++){
    if(user.email==myObj.admin[i].email){
        if(user.pass==myObj.admin[i].pass){
            sessionStorage.setItem("isAdmin",true);
            sessionStorage.setItem("isLogin",true);
        }
    }
}

for(let i=0;i< m;i++){
    if(user.email==myObj.user[i].email){
        if(user.pass==myObj.user[i].pass){
            
            sessionStorage.setItem("isAdmin",false);
            sessionStorage.setItem("isLogin",true);
        }
    }
 }
 isLogin=sessionStorage.getItem("isLogin");
 if(!isLogin){
    alert('Enter appropriate email and password.')
 }
 else{
    window.location.href="../pages/products.html";
 }
}
xmlhttp.open("GET", "../js/data.txt");
xmlhttp.send();
    
}
document.getElementById('Main-form').addEventListener('submit',calca)

