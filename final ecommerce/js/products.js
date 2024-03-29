
const reader=new FileReader();
const display=(hello)=>{
    
document.querySelector('.result').innerHTML="";
    hello.map((ele)=>{
        let img= document.createElement('img');
        img.src=ele.img;
        img.setAttribute('id','s-img');

        let title=document.createElement('p');
        title.innerHTML=ele.title;
        title.setAttribute('id','s-title');

        let deca=document.createElement('p');
        deca.innerHTML=ele.desc;
        deca.setAttribute('id','s-deca');

        let price=document.createElement('p');
        price.innerHTML=ele.price;
        price.setAttribute('id','s-price');

        

        let card=document.createElement('div');
        card.setAttribute('id','s-card');
        card.append(img,title,deca,price)

        document.querySelector('.result').append(card)
    })
}
document.querySelector('.icon_Filter').addEventListener('click',()=>{
    document.querySelector('.main-card-body').classList.toggle('main_card_show');
    document.querySelector('.sidebar_main').classList.toggle('sidebar_hide');
})
const sortingprice=(hii)=>{
    let hi = products.filter((ele)=>ele.cata==hii)
    if(hii=="All")hi=products;
    display(hi);
}
document.querySelector('.sorting-header').addEventListener('change',()=>{
    let hii=document.querySelector('.sorting-header').value;
    sortingprice(hii)
})


let isSearched=JSON.parse(sessionStorage.getItem('Search'));
if(isSearched!=null){
    console.log(isSearched);
    display(isSearched);
    
    
}
else{
    
display(products)
}