import ce from "../components/component.js";
import DelData from "../components/del.js";
import GetData from "../components/get.js";
import NavBar from "../components/navbar.js";
import PostData from "../components/post.js";

document.querySelector('.main-nav').innerHTML=NavBar()

const isExisted=async(Data)=>{
    let res=await fetch(`http://localhost:3000/Cate/?cate=${Data.cate}`)
    let hi=await res.json()
    console.log(hi);
    if(hi.length==0){
        PostData(`http://localhost:3000/Cate`,Data);
        get()
    }
    else{
        alert('This Category Already Existed.')
    }
}
const addcate=(e)=>{
    e.preventDefault();
    let category={cate:document.getElementById('Category').value};
    console.log(category);
    isExisted(category)
}

const ui=(data)=>{
    data.map((ele,i)=>{
         let Cate=document.createElement('p');
        Cate.innerHTML=`<span>${i+1}</span>`+`<span>${ele.cate}</span>`;
        Cate.setAttribute('id',"Categoryy")
        let del_btn= document.createElement('button');
        del_btn.innerHTML="DELETE"
        del_btn.addEventListener('click',async()=>{
             DelData(`http://localhost:3000/Cate/${ele.id}`)
             get()
        })
        
        document.querySelector('.main-result').append(Cate,del_btn)
    })
}
const get=async()=>{
    let res=await GetData('http://localhost:3000/Cate')
    let data=await res
    ui(data)
}
get()
document.getElementById('cateform').addEventListener('submit',addcate)