let news=JSON.parse(localStorage.getItem('news'))||[];
let users=JSON.parse(localStorage.getItem('users'))||[];
console.log(news);
const viewnews=(data)=>{
    console.log(data);
    document.querySelector('.main-content-result').innerHTML=""
data.map((ele,i)=>{
    console.log(i);
    let div=document.createElement('div');
    div.setAttribute('id','main-div-card')
    let titile=document.createElement('h3');
    titile.innerHTML=ele.titile;
    let img=document.createElement('img');
    img.src=ele.img;
    img.setAttribute('id',"img-card")
    let desc=document.createElement('p');
    desc.innerHTML=ele.dec;
    let btn_grp=document.createElement('div');
    let like=document.createElement('button');
    like.setAttribute('id',"like_btn")
    like.innerHTML="Like"
    let dislike=document.createElement('button');
    dislike.setAttribute('id','dislike_btn')
    
    dislike.innerHTML="diLike"
    
    btn_grp.append(like,dislike)
    div.append(titile,img,desc,btn_grp)
    document.querySelector('.main-content-result').append(div)
    dislike.addEventListener('click',()=>{
        data.splice(i,1);
        viewnews(data)
    })

})
}
viewnews(news)
const handlesort=(val)=>{
    let temp=news.filter((ele)=>ele.coun==val)
    viewnews(temp)
}
document.getElementById('us').addEventListener('click',()=>{handlesort("us")})
document.getElementById('india').addEventListener('click',()=>{handlesort("india")})
document.getElementById('canada').addEventListener('click',()=>{handlesort("canada")})
const handlelike=(val)=>{
    
}