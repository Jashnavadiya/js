let cart=JSON.parse(localStorage.getItem('cart'))||[];

let uimaker=()=>{
    let total =0;
    document.querySelector('.main-body').innerHTML=`<div id="card-body">
    <span>Images</span><span id="title">title</span><span id="rating">rating</span
    ><span id="price">price</span>
    <div id="btn_gp">
      qty
    </div>
  </div>`
    cart.map((ele,i)=>{
    let div=document.createElement('div');
    let img=document.createElement('img');
    let title=document.createElement('span');
    let rating=document.createElement('span');
    let price=document.createElement('span');

    let btn_grp=document.createElement('div');
    let p_btn=document.createElement('span');
    let m_btn=document.createElement('span');
    let d_btn=document.createElement('span');

    p_btn.innerHTML=`<i class="bi bi-plus-lg"></i>`;
    m_btn.innerHTML=`<i class="bi bi-dash"></i>`
    d_btn.innerHTML=ele.qty



    img.src=ele.img;
    title.innerHTML=ele.title;
    price.innerHTML=ele.price;
    rating.innerHTML=ele.rating
    


    div.setAttribute('id','card-body')
    img.setAttribute('id','img')
    title.setAttribute('id','title')
    rating.setAttribute('id','rating')
    price.setAttribute('id','price')
    btn_grp.setAttribute('id','btn_grp')
    p_btn.setAttribute('id','p_btn')
    m_btn.setAttribute('id','m_btn')
    d_btn.setAttribute('id','d_btn')

    p_btn.addEventListener('click',()=>{
        ele.qty++;
        cart.splice(i,1,ele)
        uimaker()
    localStorage.setItem('cart', JSON.stringify(cart));
    })
    m_btn.addEventListener('click',()=>{
        ele.qty--;
        cart.splice(i,1,ele)
        uimaker()
    localStorage.setItem('cart', JSON.stringify(cart));
    })

    btn_grp.append(m_btn,d_btn,p_btn)
    div.append(img,title,rating,price,btn_grp)
    document.querySelector('.main-body').append(div)
    total+=(ele.price*ele.qty)
    })
    document.querySelector('.main-total span').innerHTML=`Total IS : ${total}`;
document.querySelector('#checkout').addEventListener('click',()=>{
    alert('you checkedout all Of your Carted books')
    cart=[];
    localStorage.setItem('cart', JSON.stringify(cart));
    uimaker()
})
}
uimaker()
