import NavBar from "../components/navbar.js";

document.querySelector('.main-nav').innerHTML=NavBar()

const get=async()=>{
    let res=await fetch('http://localhost:3000/Cate')
    let data = await res.json()
    ui(data)
}
const ui=(data)=>{

    document.getElementById('category').innerHTML=`<option value="" hidden selected>Select Category</option>`
    data.map((ele)=>{
        let opt=document.createElement('option');
        opt.innerHTML=ele
        opt.setAttribute()
        document.getElementById('category').append(opt)
    })

}

get()
const cal=(e)=>{
    e.preventDefault();
    let data={
        title:document.getElementById('title').value,
        img:document.getElementById('img').value,
        price:document.getElementById('price').value,
        category:document.getElementById('category').value,
    }
    
    console.log(data);
}
document.getElementById('mainform').addEventListener('submit',cal)

