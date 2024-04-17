// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
import NavBar from "../components/navbar.js";
document.querySelector('.main-nav').innerHTML=NavBar()

const ui=()=>{
    
}
let isvalidpass=true
const calc=(e)=>{
    e.preventDefault();
    let user={
        un:document.getElementById('username').value,
        email:document.getElementById('email').value,
        pass:document.getElementById('password').value
    }
    let c_pass=document.getElementById('c_pass').value
        console.log(c_pass);
        if(user.pass==c_pass){
            
        isexisted(user)
        }
        else{
            isvalidpass=false
            alert('password not matching..')
        }
        
        
    }
   
const isexisted=async (data)=>{

    let res1=await fetch(`http://localhost:3000/Users?email=${data.email}`)
    let isEmail=await res1.json();
    console.log(isEmail);
    let res2=await fetch(`http://localhost:3000/Users?un=${data.un}`)
    let isUn=await res2.json()

    if(isEmail.length>0){
        alert('This Email Already Existed')
    }
    else if(isUn.length>0){
        ui()
        alert('This Username Already Existed')
    }
    else{
        document.getElementById('c_pass').classList.add('is-invalid')
        
    }
}
if(isvalidpass){
    document.getElementById('c_pass').classList.add('is-valid')
}
else{
    document.getElementById('c_pass').classList.add('is-invalid')
}
const postUser=(data)=>{
    fetch('http://localhost:3000/Users',{
        method:"POST",
        headers:{"Content-Type":"Applicatin/json"},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{

    })
}
const getUser=()=>{
    fetch('http://localhost:3000/Users')
    .then((res)=>res.json())
    .then((data)=>{

    })
}
document.getElementById('main_form').addEventListener('submit',calc)
getUser()
