
let datas =JSON.parse(localStorage.getItem('consumer'))||[]


const getData=(e)=>{
    e.preventDefault()
    let name=document.getElementById('name').value;
    let img=document.getElementById('img').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('passwod').value;
    let num=document.getElementById('number_m').value;
    let Age=document.getElementById('Age').value;


    let data={
        name:name,
        img:img,
        email:email,
        password:password,
        Age:Age,
        num:num
    }
    console.log(data);

    datas.push(data)
    localStorage.setItem('consumer',JSON.stringify(datas))
    uimaker(datas)
}

const uimaker=(consumer)=>{
    document.querySelector('.main-show').innerHTML=""
    consumer.map((ele,i)=>{
        let div=document.createElement('tr');
        let name=document.createElement('td');
        let img=document.createElement('td');
        let Img_m=document.createElement('img')
        let email=document.createElement('td');
        let num=document.createElement('td');
        let Age=document.createElement('td')
        let del=document.createElement('td');
        let del_btn=document.createElement('button');

        name.innerHTML=ele.name;
        Img_m.src=ele.img;
        email.innerHTML=ele.email;
        Age.innerHTML=ele.Age;;
        num.innerHTML=ele.num;
        del_btn.innerHTML="DELETE";

        img.append(Img_m);
        del.append(del_btn);

        name.setAttribute('id','tds')
        img.setAttribute('id','tds');
        Img_m.setAttribute('id','img');
        email.setAttribute('id','tds')
        Age.setAttribute('id','tds')
        num.setAttribute('id','tds')
        del.setAttribute('id','tds')
        
        del.setAttribute('id','del')
        del_btn.addEventListener('click', ()=>{
            consumer.splice(i,1);
            localStorage.setItem('consumer',JSON.stringify(datas))
            uimaker(consumer);
        })
        
        div.append(name,img,email,num,Age,del);
        document.querySelector('.main-show').append(div);
    })
}
uimaker(datas)
document.getElementById('form-data').addEventListener('submit', getData);
document.querySelector('#del_all').addEventListener('click',()=>{
    datas=[];
    localStorage.setItem('consumer',JSON.stringify(datas))
    uimaker(datas);

})