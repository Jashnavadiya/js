import PostData from "../components/post.js"

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
const isExisted=async(data)=>{
    let res=await fetch(`http://localhost:3000/user?un=${data.un}`)
    let res1=await fetch(`http://localhost:3000/user?email=${data.email}`)
    let temp_check=await res.json()
    let temp_check1=await res1.json();
    if(temp_check.length>0|| temp_check1.length>0){
        alert("This profile already exist")
        return;
    }
    PostData("http://localhost:3000/user",data);
}
const calca = (e) => {
    e.preventDefault();
    let userr = {
        fn: document.getElementById('validationCustom01').value,
        ln: document.getElementById('validationCustom02').value,
        un: document.getElementById('validationCustomUsername').value,
        email: document.getElementById('validationCustom03').value,
        pass: document.getElementById('validationCustom04').value
    }
    console.log(userr);
    isExisted(userr)

}

document.querySelector("#Main-form").addEventListener("submit", calca)
