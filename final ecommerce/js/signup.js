
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
    
    users.push(userr);
    if(12){
        var valueArr = users.map(function(item) {
            return item.un;
          });
          console.log(valueArr);
          
          var isDuplicate = valueArr.some(function(item, i) {
            console.log(valueArr.indexOf(item));
              console.log(i);
              if(i!=0){
                  return valueArr.indexOf(item)!==i;
              }
             
          });
          if(isDuplicate){
            alert('This Product Name Already Exist')
            return
          }
    }
    localStorage.setItem('Bro', JSON.stringify(users))


}

document.querySelector("#Main-form").addEventListener("submit", calca)
