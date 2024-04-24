import GetData from "../components/get.js";
import NavBar from "../components/navbar.js";
import PostData from "../components/post.js";
document.querySelector('.main-nav').innerHTML=NavBar();


const IsCartExist=async(url,data)=>{
try {
    let res=await fetch(`http://localhost:3000/cart/${data.id}`)
    let dataa=await res.json();
    window.location.href="../pages/cart.html"
} catch (error) {
    PostData(url,{...data,qty:1})
}


}

const ui=(data)=>{
    data.map((ele)=>{
        let div=document.createElement('div');
        div.setAttribute('id','card-body');

        let img=document.createElement('img');
        img.setAttribute('id','s_img');
        img.src=ele.img
        let title=document.createElement('p');
        title.setAttribute('id','s_title');
        title.innerHTML=ele.title

        let like_btn=document.createElement('p');
        like_btn.setAttribute('id','like_btn');
        like_btn.innerHTML=`<i class="bi bi-heart"></i>`

        like_btn.addEventListener('click',()=>{
            if(like_btn.innerHTML==`<i class="bi bi-heart"></i>`){
                like_btn.innerHTML=`<i class="bi bi-heart-fill"></i>`
            }
            else{
                like_btn.innerHTML=`<i class="bi bi-heart"></i>`
            }
        })

        let price=document.createElement('p');
        price.setAttribute('id','s_price');
        price.innerHTML="₹"+`${ele.price}`
        let category=document.createElement('p');
        category.setAttribute('id','s_category');
        category.innerHTML=ele.category;

        let grp_btn=document.createElement('div');
        grp_btn.setAttribute('id','btn_grp')
        let add_cart_btn=document.createElement('button');
        add_cart_btn.setAttribute('id','add_cart_btn')
        add_cart_btn.innerHTML="Add To Cart"
        add_cart_btn.addEventListener('click',()=>{
            console.log(ele);
            IsCartExist('http://localhost:3000/cart',ele)
        })
        let buy_now_btn=document.createElement('button');
        buy_now_btn.setAttribute('id','buy_now_btn')
        buy_now_btn.innerHTML="Buy Now"
        grp_btn.append(add_cart_btn,buy_now_btn)
        div.append(like_btn,img,title,price,category,grp_btn)
        document.querySelector('.main_content').append(div)
    })
}
const get=async()=>{
    let res=await GetData('http://localhost:3000/products')
    let data=await res
    ui(data)
}
get()