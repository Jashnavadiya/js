

let users = JSON.parse(localStorage.getItem("Bro")) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];


// document.querySelector('.header_name').innerHTML = `Hello, ${users.fn}`;

if (cart.length == 0) {

    let banner_div = document.createElement('div');
    banner_div.setAttribute('id', 'banner-div');

    let main_img = document.createElement('img')
    main_img.setAttribute('id', 'banner-img');
    main_img.src = "../imges/banner_cart.png";


    let banner_btn = document.createElement('button');
    banner_btn.setAttribute('id', 'banner_btn');
    banner_btn.innerHTML = "Add Products To Cart";
    banner_btn.addEventListener('click', () => {
        window.location.href = "../pages/products.html"
    })


    banner_div.append(main_img, banner_btn)
    document.querySelector('.main-content_body').append(banner_div)
}
else {


}
const mainui = () => {
    document.querySelector('.main-content_body').innerHTML = `<div class="main-body-cart">
                <div class="main-cart-header">
                    <h1><i class="bi bi-bag"></i>My Cart</h1>
                </div>
                <div class="main-content-cart-body">
                    <div class="sec-1 col-8">

                        <div class="main-datas">
                            
                          
                        </div>
                        <div class="result-total">
                            <div class="main-result-total">
                                <span class="n_item">1 item</span>
                                <span class="t_item">Rs. 200</span>
                            </div>
                        </div>
                    </div>
                    <div class="sec-2 col-4 ms-auto ps-5 pe-3">
                        <form action="" id="promo">
                            <label for="floatingInput">ENTER PROMO CODE</label>
                            <p class="form-floating promo-div mb-3">
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="name@example.com">
                                <label for="floatingInput">Promo Code</label>
                                <input type="submit" id="promo-sub" value="APPLY">
                            </p>
                        </form>
                        <div class="discount-show"></div>
                        <div class="count">
                            <div class="count-1"><span>Shipping cost</span><span id="count1">1</span>
                            </div>
                            <div class="count-1"><span>Discount</span><span id="count2">1</span>
                            </div>
                            <div class="count-1"><span>Tax</span><span id="count3">1</span>
                            </div>
                            <div class="count-1 count-bold"><span>Estimated Total</span><span id="count1">1</span>
                            </div>
                            <div class="count-2">
                                <br><br><br>
                                <p id="away-fromfree"></p><br><br>
                                <button id="checkout_btn">CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    ui(cart)

}
const ui = (data) => {
    let total=0;
    let g_total=0;
    data.map((ele, i) => {
        document.querySelector('.main-datas').innerHTML += `<div class="card-body">
        <div class="main-img-info"><img src="${ele.img}" alt="" id="img_s_produt">
            <div id="info">
                <h3>${ele.title}</h3>
                <h5 class="extra-1">${ele.desc}</h5>
                <h5>In Stock</h5>
            </div>
        </div>
        <div class="price">
            <h3>Each</h3>
            <h5>Rs. ${ele.price}</h5>
        </div>
        <div class="main-qty">
            <p class="header-qty">Quantity</p>
            <div class="qty " id="qty${i}">
                
            </div>
        </div>
        <div class="price-total">
            <h3>Total</h3>
            <h5>Rs. 890</h5>
        </div>
    </div>`

    let m_btn=document.createElement('button');
    m_btn.innerHTML=`<i class="bi bi-dash"></i>`
    m_btn.setAttribute('class','qty_m');
    m_btn.setAttribute('id','qty_m');
    m_btn.addEventListener('click',()=>{
            
        alert(i)
        console.log(ele.qty);
    })

    let s_div=document.createElement('div');
    s_div.innerHTML=ele.qty;
    s_div.setAttribute('class','qty_s')
    s_div.setAttribute('id','qty_s')

    let p_btn=document.createElement('button');
    p_btn.innerHTML=`<i class="bi bi-plus-lg"></i>`
    p_btn.setAttribute('class','qty_a')
    p_btn.setAttribute('id','qty_a')

    document.getElementById(`qty${i}`).append(m_btn,s_div,p_btn)

    if(ele.qty==1){
        document.getElementsByClassName('qty_m')[i].innerHTML=`<i class="bi bi-trash"></i>`
    }
      
        p_btn.addEventListener('click',()=>{
            ele.qty++;
          
        })
    function truncateText( maxLength) {
            truncated = ele.desc;

        if (truncated.length > maxLength) {
            truncated = truncated.substr(0, maxLength) + '...';
        }
        return truncated;
    }
    console.log(i);
    document.getElementsByClassName('extra-1')[i].innerText=truncateText(17)
    })
}
mainui()



