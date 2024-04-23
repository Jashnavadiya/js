
import NavBar from "../components/navbar.js";
document.querySelector('.main-nav').innerHTML=NavBar();


const ui=(data)=>{
    data.map((ele,i)=>{
        let tr=document.createElement('tr');

        let td1=document.createElement("td");
        td1.innerHTML=i
        let td2=document.createElement("td");
        let img=document.createElement('img');
        img.src=ele.img;

        let title=document.createElement('p');
        title.innerHTML=ele.title

        td2.append(img,title)
        let td3=document.createElement("td");


        let td4=document.createElement("td");

    })
}


const get=async()=>{
    let res=await GetData('http://localhost:3000/products')
    let data=await res
    ui(data)
}
get()