import UpdateData from "../components/update.js";
import GetData from "../components/get.js";
import PostData from "../components/post.js";

const isCarted=async(carts)=>{
    try {
        let res= await fetch(`http://localhost:3000/cart/${carts.id}`);
        let dataa=await res.json();
        window.location.href="../pages/cart.html"
    } catch (error) {
        alert('hi')
        PostData('http://localhost:3000/cart',carts)
    }
}

const ui = (dataa) => {
    console.log(dataa);
    dataa.disc = 15
    document.querySelector('.whishlist_div').addEventListener('click',()=>{
    if(document.querySelector('.heart_hi').classList.contains('bi-heart')){
        document.querySelector('.heart_hi').classList.remove('bi-heart')
        document.querySelector('.heart_hi').classList.add('bi-heart-fill')
        document.querySelector('.popup_msg').innerHTML=`You Added This To Your Whishlist...`
    }
    else{
        document.querySelector('.heart_hi').classList.remove('bi-heart-fill')
        document.querySelector('.heart_hi').classList.add('bi-heart')
        document.querySelector('.popup_msg').innerHTML=`You Remove This To Your Whishlist...`
    }
    document.querySelector('.main_popup_msg').classList.add('trans-popup')
    setTimeout(()=>{
        document.querySelector('.main_popup_msg').classList.remove('trans-popup')
    },1500)

})
    document.querySelector('.main_cate_product').innerHTML = dataa.cata;
    document.querySelector('#main-heading_product').innerHTML = dataa.title;
    if (dataa.desc.length > 300) {
        document.querySelector('#main_desc_product').innerHTML = dataa.desc.substr(0, 300) + '...';
    }
    else {
        document.querySelector('#main_desc_product').innerHTML = dataa.desc
    }
    document.querySelector('.main-price span').innerHTML = "₹ " + (dataa.price) * ((100 - dataa.disc) / 100)
    document.querySelector('.main-price s').innerHTML = "₹ " + dataa.price
    document.querySelector('.main_cate_product').innerHTML = "";

    let qty = document.createElement('div');
    qty.setAttribute('id', 'qty')
    qty.setAttribute('class', 'qty')

    let m_btn = document.createElement('button');
    m_btn.innerHTML = `<i class="bi bi-dash"></i>`
    m_btn.setAttribute('class', 'qty_m');
    m_btn.setAttribute('id', 'qty_m');
    m_btn.addEventListener('click', () => {
        if(dataa.qtyy>1){
        dataa.qtyy--;
        UpdateData(`http://localhost:3000/products/${dataa.id}`, dataa)
        }
        else{
            m_btn.setAttribute('disabled',"true")
            
        }
    })

    let s_div = document.createElement('div');
    s_div.innerHTML = dataa.qtyy;
    s_div.setAttribute('class', 'qty_s')
    s_div.setAttribute('id', 'qty_s')

    let p_btn = document.createElement('button');
    p_btn.innerHTML = `<i class="bi bi-plus-lg"></i>`
    p_btn.setAttribute('class', 'qty_a');
    p_btn.addEventListener('click', () => {
        dataa.qtyy++;
        console.log(dataa.qtyy);
        UpdateData(`http://localhost:3000/products/${dataa.id}`, dataa)

    })

    let checkout_btn = document.createElement('button');
    checkout_btn.innerHTML = `Add To Cart`
    checkout_btn.setAttribute('id', 'checkout_btn');
    checkout_btn.addEventListener('click',()=>{

        isCarted(dataa)
    })

    qty.append(m_btn, s_div, p_btn);
    document.querySelector('.main-qty').append(qty)
    document.querySelector('.main_chek_btn').append(checkout_btn)
}
const mainui = (datas) => {
    datas.map((ele) => {
        let swiper_slide=document.createElement('div');
        swiper_slide.setAttribute('class','swiper-slide');
        let s_img=document.createElement('img');
        s_img.src=ele;
        swiper_slide.append(s_img);
        document.querySelector('.mySwiper2 .swiper-wrapper').append(swiper_slide)
    })
    datas.map((ele) => {
        let swiper_slide=document.createElement('div');
        swiper_slide.setAttribute('class','swiper-slide');
        let s_img=document.createElement('img');
        s_img.src=ele;
        swiper_slide.append(s_img);
        document.querySelector('.mySwiper .swiper-wrapper').append(swiper_slide)
    })

    
}

let hir = location.search.replace('?id=', '')
console.log(hir);
const get = async () => {
    let res = await GetData(`http://localhost:3000/products/${hir}`)
    let data = await res
    console.log(data);
    ui(data);
    console.log();
    mainui(data.img)
}
get();