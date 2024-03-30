

let users=JSON.parse(localStorage.getItem('users'))||[];

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
        else{
            form.classList.add('was-validated')
            event.stopPropagation()
        }
      }, false)
    })
  })()
const setUser=(e)=>{
    e.preventDefault();
    let userindata={
        un:document.getElementById('validationCustomUsername').value,
        email:document.getElementById('validationCustom01').value,
        country:document.getElementById('validationCustom04').value,
        pi:document.getElementById('validationCustom02').value,
        pass:document.getElementById('validationCustom03').value,
    }
    users.push(userindata)
    localStorage.setItem('users',JSON.stringify(users))
    console.log(users);
    
}
let validate=document.getElementById('signup').classList.contains('was-validated');
if(!validate){
    document.querySelector('#signup').addEventListener("submit",setUser)
}


