// let id=-1
const getById=(id)=>{
    fetch(`http://localhost:3000/data/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementById('sub_form').value="Edit"
   document.getElementById('name').value=data.name
    document.getElementById('roll').value=data.roll
    document.getElementById('maths').value=data.maths
    document.getElementById('phy').value=data.phy
   document.getElementById('che').value=data.che
    document.getElementById('com').value=data.com
    document.getElementById('eng').value=data.eng
    })
}
let url=window.location.href
let id=url.substring(url.lastIndexOf('?') + 4)
if(id.length==4){
    getById(id)
}
const cal=(e)=>{
    e.preventDefault();
    let dat={
        name:document.getElementById('name').value,
        roll:document.getElementById('roll').value,
        maths:parseFloat(document.getElementById('maths').value),
        phy:parseFloat(document.getElementById('phy').value),
        che:parseFloat(document.getElementById('che').value),
        com:parseFloat(document.getElementById('com').value),
        eng:parseFloat(document.getElementById('eng').value)
    }
    if(id.length!=4){ 
    postData(dat)
    window.location.href="../pages/show.html"
alert('Data Added...')
}
    else{
        UpdateData(dat,id)
        window.location.href="../pages/show.html"
        alert('Data Updated...')
    }
}
const UpdateData=(data,id)=>{
    fetch(`http://localhost:3000/data/${id}`,{
        method:"PATCH",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
}
const get=()=>{
    fetch('http://localhost:3000/data')
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementById('main_form').addEventListener('submit',cal)
       
    })
}
const postData=(data)=>{
    fetch(`http://localhost:3000/data`,{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{
    })
}
const DelData=(id)=>{
    fetch(`http://localhost:3000/data/${id}`,{
        method:"DELETE"
    })
   
}
get()


