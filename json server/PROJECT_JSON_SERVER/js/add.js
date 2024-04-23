import GetData from "../components/get.js";
import NavBar from "../components/navbar.js";
import PostData from "../components/post.js";

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
    console.log(data);
    if(data.length==0){
        window.location.href="../admin/addcate.html"
    }
    ui(data)
}

const cal=(e)=>{
    e.preventDefault();
    let data={
        title:document.getElementById('title').value,
        img:document.getElementById('img').value,
        price:document.getElementById('price').value,
        category:document.getElementById('category').value,
    }
    isexistes(data)
}
const isexistes=async(data)=>{
    let res=await GetData(`http://localhost:3000/products?title=${data.title}`)
    let dataa=await res
    console.log(dataa);
    if(dataa.length==0){
        PostData(`http://localhost:3000/products`,data)
    }
    else{
        alert('This Product already exist')
    }
}
const handlesubmit=(data)=>{

}
document.getElementById('mainform').addEventListener('submit',cal)

get()