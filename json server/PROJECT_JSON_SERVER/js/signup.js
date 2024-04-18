// Example starter JavaScript for disabling form submissions if there are invalid fields

const regex_valid=(data)=>{
    
    let run=/^(?=\s*$)/g.test(document.getElementById('username').value)

    let remail=
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
    .test(document.getElementById('email').value);

    let rpass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g.test(document.getElementById('password').value);

    regex_email(remail)
    regex_un(run)
    regex_pass(rpass)
    if((document.getElementById('password').value==document.getElementById('c_pass').value)&&(!run&&remail&&rpass)){
        console.log(data);
        document.getElementById('main_form').addEventListener('submit',()=>postUser(data))
                    }
}
function regex_email(remail){
    if(remail){
        document.getElementById('email').classList.remove('is-invalid')
        document.getElementById('email').classList.add('is-valid')
    }
    else{
        document.getElementById('email').classList.remove('is-valid')
        document.getElementById('email').classList.add('is-invalid')
    }
}
function regex_un(run){
    if(run){
        document.getElementById('username').classList.add('is-invalid')
    }
    else{
        document.getElementById('username').classList.remove('is-invalid')
        document.getElementById('username').classList.add('is-valid')
    }
}

function regex_pass(rpass){
    if(rpass){
        document.getElementById('password').classList.remove('is-invalid')
        document.getElementById('password').classList.add('is-valid')
        if(document.getElementById('password').value==document.getElementById('c_pass').value){
            
            
            document.getElementById('c_pass').classList.remove('is-invalid')
            document.getElementById('c_pass').classList.add('is-valid')
        }
        else{
            document.getElementById('c_pass').classList.remove('is-valid')
            document.getElementById('c_pass').classList.add('is-invalid')
        }
    }
    else{
        document.getElementById('password').classList.remove('is-valid')
        document.getElementById('password').classList.add('is-invalid')
    }

    
   
}
const hi=()=>{
    
document.getElementById('username').addEventListener('input',calc)
document.getElementById('password').addEventListener('input',calc)
document.getElementById('email').addEventListener('input',calc)
document.getElementById('c_pass').addEventListener('input',calc)
}
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()
import NavBar from "../components/navbar.js";
document.querySelector('.main-nav').innerHTML=NavBar()
const calc=(e)=>{
    e.preventDefault();
    let user={
        un:document.getElementById('username').value,
        email:document.getElementById('email').value,
        pass:document.getElementById('password').value
    }
        isexisted(user)
    }
const isexisted=async (data)=>{
    let res2=await fetch(`http://localhost:3000/Users?un=${document.getElementById('username').value}`)
    let isUn=await res2.json()
    let res1=await fetch(`http://localhost:3000/Users?email=${document.getElementById('email').value}`)
    let isEmail=await res1.json();
    if(isUn.length>0){
        regex_un(true)
        hi()
    }
    else if(isEmail.length>0){
        regex_email(false)
        regex_un(false)
        hi()
    }
    
    else{
        regex_valid(data)
    }
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
