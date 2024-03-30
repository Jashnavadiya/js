let users=JSON.parse(localStorage.getItem('users'))||[];

const collect=(e)=>{
    e.preventDefault();
    let userdata={
        email:document.getElementById('exampleInputEmail1').value,
        pass:document.getElementById('exampleInputPassword1').value
    }
    console.log(userdata);
}
document.querySelector('.login-form').addEventListener('submit',collect)