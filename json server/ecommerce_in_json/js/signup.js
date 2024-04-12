
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

let users = JSON.parse(localStorage.getItem("Bro")) || [];
const calca = (e) => {
    e.preventDefault();

    let userr = {
        fn: document.getElementById('validationCustom01').value,
        ln: document.getElementById('validationCustom02').value,
        un: document.getElementById('validationCustomUsername').value,
        email: document.getElementById('validationCustom03').value,
        pass: document.getElementById('validationCustom04').value
    }
    let temp_check=users.filter((ele)=>ele.un==userr.un&&ele.email==userr.email)
    
    if(temp_check.length>0){
        alert("This profile already exist")
        return;
    }

    users.push(userr);

    localStorage.setItem('Bro', JSON.stringify(users))


}

document.querySelector("#Main-form").addEventListener("submit", calca)
