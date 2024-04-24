

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
    let total = 0;
    let g_total = 0;
    data.map((ele, i) => {
        let temp = document.createElement('div');
        temp.innerHTML = `<div class="card-body">
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

        let main_div = document.createElement('div');
        main_div.setAttribute('class', 'card-body');

        let main_img_info = document.createElement('div');
        main_img_info.setAttribute('class', 'main-img-info');

        let img_s_produt = document.createElement('img');
        img_s_produt.setAttribute('id', 'img_s_produt');
        img_s_produt.src = ele.img

        let info = document.createElement('div');
        info.setAttribute('id', 'info')

        let info_h3 = document.createElement('h3');
        info_h3.innerHTML = ele.title

        let info_h5_1 = document.createElement('h5');
        info_h5_1.innerHTML = ele.desc;

        let info_h5_2 = document.createElement('h5');
        info_h5_2.innerHTML = "In Stock";

        let price_div = document.createElement('div');
        price_div.setAttribute('class', 'price');

        let price_h3 = document.createElement('h3');
        price_h3.innerHTML = "Each";

        let price_h5 = document.createElement('h5');
        price_h5.innerHTML = ele.price

        let main_qty = document.createElement('div');
        main_qty.setAttribute('class', 'main-qty');


        let main_qty_p = document.createElement('p');
        main_qty_p.setAttribute('class', 'header-qty')


        let qty = document.createElement('div');
        qty.setAttribute('id', 'qty')
        qty.setAttribute('class', 'qty')

        let m_btn = document.createElement('button');
        m_btn.innerHTML = `<i class="bi bi-dash"></i>`
        m_btn.setAttribute('class', 'qty_m');
        m_btn.setAttribute('id', 'qty_m');
        m_btn.addEventListener('click', () => {

            alert(i)
            ele.qty--;
            console.log(ele.qty);
        })

        let s_div = document.createElement('div');
        s_div.innerHTML = ele.qty;
        s_div.setAttribute('class', 'qty_s')
        s_div.setAttribute('id', 'qty_s')

        let p_btn = document.createElement('button');
        p_btn.innerHTML = `<i class="bi bi-plus-lg"></i>`
        p_btn.setAttribute('class', 'qty_a')
        p_btn.setAttribute('id', 'qty_a')



        p_btn.addEventListener('click', () => {
            ele.qty++;

        })

        function truncateText(maxLength) {
            truncated = ele.desc;

            if (truncated.length > maxLength) {
                truncated = truncated.substr(0, maxLength) + '...';
            }
            return truncated;
        }
        let price_total = document.createElement('div');
        price_total.setAttribute('class', 'price-total');

        let price_total_h3 = document.createElement('h3');
        price_total_h3.innerHTML = "Total";

        let price_total_h5 = document.createElement('h5');
        price_total_h5.innerHTML = `Rs. total`

        
        price_total.append(price_total_h3,price_total_h5)
    })
}
mainui()



