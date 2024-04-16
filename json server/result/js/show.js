const ui=(data)=>{
    console.log(data);
    data.map((ele,i)=>{
        let div=document.createElement('div');
        div.setAttribute('id','cards')

    let srNo=document.createElement('p');
    srNo.innerHTML=i+1
    let name=document.createElement('div')
    name.innerHTML=ele.name
    let rollNo=document.createElement('p')
    rollNo.innerHTML=ele.roll
    let maths=document.createElement('div')
    maths.innerHTML=ele.maths
    let phy=document.createElement('div')
    phy.innerHTML=ele.phy
    let che=document.createElement('div')
    che.innerHTML=ele.che
    let com=document.createElement('div')
    com.innerHTML=ele.com
    let eng=document.createElement('div')
    eng.innerHTML=ele.eng
    let tscore=document.createElement('div')
    let total=ele.maths+ele.phy+ele.che+ele.com+ele.eng
    tscore.innerHTML=total
    let result=document.createElement('div')
    if(total<=100){
        result.innerHTML="Fail"
        result.style.backgroundColor="RED"
    }
    else{
        result.innerHTML="Pass"
        result.style.backgroundColor="GREEN"
    }
    let btn_grp=document.createElement('div')
    btn_grp.setAttribute('id','btn_grp')
    let up_btn=document.createElement('p')
        up_btn.innerHTML=`<i class="bi bi-pencil-square"></i>`
        up_btn.setAttribute('id','up_btn')
    up_btn.addEventListener('click',()=>{
        window.location.href=`../pages/add.html?id=${ele.id}`
        
    })
    let del_btn=document.createElement('p');
    del_btn.innerHTML=`<i class="bi bi-trash"></i>`
    del_btn.setAttribute('id','del_btn')
    del_btn.addEventListener('click',()=>DelData(ele.id))
    btn_grp.append(up_btn,del_btn)
    div.append(srNo,name,rollNo,maths,phy,che,com,eng,tscore,result,btn_grp)
    document.querySelector('.main-body').append(div)
    })
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
        ui(data)
    })
}
const DelData=(id)=>{
    fetch(`http://localhost:3000/data/${id}`,{
        method:"DELETE"
    })
   
}
get()