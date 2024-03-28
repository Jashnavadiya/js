
let products= JSON.parse(localStorage.getItem("Store"))||[];
console.log(products);
const reader=new FileReader();
const display=()=>{
    products.map((ele)=>{
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
display()
document.get