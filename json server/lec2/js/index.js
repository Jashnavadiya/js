const ui=(data)=>{
    document.querySelector('.main-result').innerHTML=""
    data.map((ele)=>{
        let div=document.createElement('div');

        let title=document.createElement('p');
        title.innerHTML=ele.title;
        title.setAttribute('id','s_title')

        let img=document.createElement('img');
        img.src=ele.img;
        img.setAttribute('id','s_img')

        let price=document.createElement('p');
        price.innerHTML=ele.price;
        price.setAttribute('id','s_price')

        let btn_grp=document.createElement('div');
        let del_btn=document.createElement('button');
        let edit_btn=document.createElement('button');

        del_btn.addEventListener('click',()=>
            DelData(ele.id)
        )
        del_btn.innerHTML="DELETE"
        edit_btn.addEventListener('click',()=>edtiui(ele.id))
        edit_btn.innerHTML="EDIT"
        btn_grp.append(del_btn,edit_btn)
        div.setAttribute('id','card-body');
        div.append(img,title,price);

document.querySelector('.main-result').append(div,btn_grp)

    })
}
const edtiui=(b)=>{
    document.getElementById('sub').style.display="none";
    let update_btn=document.createElement('button');
    update_btn.innerHTML='Update';
    
    if(!document.getElementById('form_main').classList.contains("updating")){
    document.getElementById('form_main').classList.add("updating")
    document.getElementById('form_main').append(update_btn)
    }
    console.log(b);
    update_btn.addEventListener('click',()=>{
        let dats={
            title:document.getElementById('title').value,
            img:document.getElementById('img').value,
            price:document.getElementById('price').value
        }
        UpdateData(dats,b)
        document.getElementById('form_main').classList.remove("updating")   
})
    
}
const cal=(e)=>{
    e.preventDefault();
    let dat={
        title:document.getElementById('title').value,
        img:document.getElementById('img').value,
        price:document.getElementById('price').value
    }
    postData(dat)
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
        console.log(data);
        ui(data)
    })
    document.querySelector('.main-result').innerHTML=""
document.getElementById('sub').addEventListener('click',cal)
}
const postData=(data)=>{
    fetch(`http://localhost:3000/data`,{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        ui(data)
    })
}
const DelData=(id)=>{
    fetch(`http://localhost:3000/data/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        ui(data)
    })
   
}
window.addEventListener('load',
get)