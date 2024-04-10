let datas=JSON.parse(localStorage.getItem('books'))||[]
let cart=JSON.parse(localStorage.getItem('cart'))||[]

let uimaker=(hi)=>{
    document.querySelector('.main-body').innerHTML=""
    hi.map((ele,i)=>{
    let div=document.createElement('div');
    let img=document.createElement('img');
    let title=document.createElement('p');
    let rating=document.createElement('p');
    let price=document.createElement('p');

    let btn_grp=document.createElement('div');
    let del_btn=document.createElement('button');
    let add_btn=document.createElement('button');

    

    img.src=ele.img;
    title.innerHTML=ele.title;
    price.innerHTML=ele.price;
    rating.innerHTML=ele.rating
    
    del_btn.innerHTML="DELETE"
    add_btn.innerHTML="Add To Cart";

    del_btn.addEventListener('click',()=>{
        hi.splice(i,1);
        uimaker()
    localStorage.setItem('books', JSON.stringify(hi));
    })

    add_btn.addEventListener('click',()=>{

        let isdupilcate=cart.filter((cr)=>cr.title==ele.title)
        if(isdupilcate==0){
            let temp={...ele,qty:1}
        cart.push(temp)
        localStorage.setItem('cart',JSON.stringify(cart))}
        else{
            window.location.href="../pages/cart.html"
        }
    })

    div.setAttribute('id','card-body')
    img.setAttribute('id','img')
    title.setAttribute('id','title')
    rating.setAttribute('id','rating')
    price.setAttribute('id','price')
    btn_grp.setAttribute('id','btn_grp')
    del_btn.setAttribute('id','del_btn')
    add_btn.setAttribute('id','add_btn')

    btn_grp.append(add_btn,del_btn);

    div.append(img,title,rating,price,btn_grp)
    document.querySelector('.main-body').append(div)
    })
     

}
uimaker(datas)

document.querySelector('.cata-head p').addEventListener('click', () => {
    document.querySelector('.cata-head p i').classList.toggle('bi-chevron-down')
    document.querySelector('.cata-head p i').classList.toggle('bi-chevron-up')
    document.querySelector('.cata-memberr').classList.toggle('cata_memeber_hide');
})
document.querySelector('.cata-head1 p').addEventListener('click', () => {
    document.querySelector('.cata-head1 p i').classList.toggle('bi-chevron-down')
    document.querySelector('.cata-head1 p i').classList.toggle('bi-chevron-up')
    document.querySelector('.cata-memberr1').classList.toggle('cata_memeber_hide');
})
document.getElementById('lth').addEventListener('click',()=>handlPrice("lth"))
document.getElementById('htl').addEventListener('click',()=>handlPrice("htl"))
const handlPrice=(val)=>{
    console.log("hi");
    if(val=="lth"){
       let temp= datas.sort((a,b)=>a.price-b.price)
     
       uimaker(temp)
    }
    else{
        let temp= datas.sort((a,b)=>b.price-a.price)
        
        uimaker(temp)
    }
}
const handleRating=()=>{
    let temp;
   
    let tempa=datas.filter((ele)=>{
        for(let i=1;i<=5;i++){
           
               console.log(`r_${i}`);
                ele.rating==i
           
            
        }
       
    })
    
    console.log(tempa);
    uimaker(temp)
}
for(let i=1;i<=5;i++){
    
document.getElementById(`r_${i}`).addEventListener('click',()=>handleRating())
}
