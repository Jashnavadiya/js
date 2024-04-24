

const calca = (e) => {
    e.preventDefault();
    let user = {
        email: document.getElementById('validationCustomUsername').value,
        pass: document.getElementById('validationCustom04').value
    }
    isExisted(user)


}
const isExisted=async(data)=>{
    let res=await fetch(`http://localhost:3000/user?un=${data.email}&pass=${data.pass}`)
    let res1=await fetch(`http://localhost:3000/user?email=${data.email}&pass=${data.pass}`)
    let temp_check=await res.json()
    let temp_check1=await res1.json();
    if(temp_check.length>0|| temp_check1.length>0){
        window.location.href="../pages/products.html"
        alert('You Logged In')
    }
    else{
        let res2=await fetch(`http://localhost:3000/user?un=${data.email}`)
        let res3=await fetch(`http://localhost:3000/user?email=${data.email}`)
        let d1=await res2.json()
        let d2=await res3.json()
        if(d1.length>0){
            alert('user Found But password Is Wrong')
        }
        else if(d2.length>0){
            alert('Email Found But password Is Wrong')
        }
        else{
            alert('User Not Found')
        }
    }
}
document.getElementById('Main-form').addEventListener('submit', calca)

