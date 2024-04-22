import NavBar from "../components/navbar.js";
document.querySelector('.main-nav').innerHTML=NavBar()

const isLogged=async (datalogin)=>{
    let res1= await fetch(`http://localhost:3000/Users?email=${datalogin.email}`);
    let isEmail=await res1.json()
    console.log(isEmail);

    
    let res2= await fetch(`http://localhost:3000/Users?pass=${datalogin.pass}`);
    let isPass=await res2.json()
    console.log(isPass);
    if(isEmail.length==0){
        let res3=await fetch(`http://localhost:3000/Users?un=${datalogin.email}`);
        let isUn=await res3.json()
        console.log(isUn);
        if(isUn.length==0){
            alert('Username not found')
        }
        else if(isPass.length==0){
            alert('Username Exist password is wrong')
        }
        else{
            window.location.href="../pages/product.html"
            alert('You Logged in')
        }
    }
    else{
        if(isEmail.length==0){
            alert('Email id not found')
        }
        
        else if(isPass.length==0){
            alert('email Id exist but pass Is Wrong')
        }
        else{
            window.location.href="../pages/product.html"
            alert('You Logged in')
        }
    }
}

const Calc=(e)=>{
    e.preventDefault()
    let datalogin={
        email:document.getElementById('email').value,
        pass:document.getElementById('password').value
    }
    isLogged(datalogin)
}
document.getElementById('main_form').addEventListener('submit',Calc)