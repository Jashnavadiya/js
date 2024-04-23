import GetData from "../components/get.js";
import NavBar from "../components/navbar.js";

document.querySelector('.main-nav').innerHTML=NavBar()


const ui=(data)=>{

    document.getElementById('category').innerHTML=`<option value="" hidden selected>Select Category</option>`
    data.map((ele)=>{
        console.log(ele);
        let opt=document.createElement('option');
        opt.innerHTML=ele.cate;
        opt.setAttribute("id","Cate")
        document.getElementById('category').append(opt)
    })

}

const get=async()=>{
    let res=await GetData('http://localhost:3000/Cate')
    let data=await res
    if(data.length==0){
        window.location.href="../admin/addcate.html"
    }
    ui(data)
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
    
}
document.getElementById('mainform').addEventListener('submit',cal)

