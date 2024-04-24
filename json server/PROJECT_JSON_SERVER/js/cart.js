
import NavBar from "../components/navbar.js";
import GetData from '../components/get.js';
import UpdateData from "../components/update.js";
import DelData from "../components/del.js";
document.querySelector('.main-nav').innerHTML=NavBar();


const handleqty=(hi,data)=>{

    if(hi=="-"){
        alert("hi")
        if(data.qty>=2){
            data.qty-=1;
            UpdateData(`http://localhost:3000/cart/${data.id}`,data)
        }
        else if(data.qty==1){
            
            DelData(`http://localhost:3000/cart/${data.id}`)
        }
    }
    else{
        
            data.qty+=1;
            UpdateData(`http://localhost:3000/cart/${data.id}`,data)
        
    }

}

const ui=(data)=>{
    document.querySelector('.main-body').innerHTML=""
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

        let div_qty =document.createElement('div');
        let m_btn=document.createElement('button');
        
        m_btn.setAttribute('id','m_btn')
        if(ele.qty==1){
            m_btn.innerHTML=`<i class="bi bi-trash"></i>`
        }else{
            m_btn.innerHTML="-";    
        }
        m_btn.addEventListener('click',()=>handleqty("-",ele))
        let p_btn=document.createElement('button');
        p_btn.innerHTML="+";
        p_btn.addEventListener('click',()=>handleqty("+",ele))
        let qty=document.createElement('span');
        qty.innerHTML=ele.qty;

        div_qty.append(m_btn,qty,p_btn)
        td3.append(div_qty)

        let td4=document.createElement("td");
        let del_btn=document.createElement('button');
        del_btn.innerHTML=`<i class="bi bi-trash"></i>`

        del_btn.addEventListener('click',()=>{
            DelData(`http://localhost:3000/cart/${ele.id}`)
        })

        let edit_btn=document.createElement('button');
        edit_btn.innerHTML=`<i class="bi bi-pencil-square"></i>`
        td4.append(del_btn,edit_btn)
        tr.append(td1,td2,td3,td4)
        document.querySelector('.main-body').append(tr)
    })
}


const get=async()=>{
    let res=await GetData('http://localhost:3000/cart')
    let data=await res
    
    ui(data)
}
get()