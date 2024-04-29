


// document.querySelector('.header_name').innerHTML = `Hello, ${users.fn}`;

import DelData from "../components/del.js";
import GetData from "../components/get.js";
import UpdateData from "../components/update.js";

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
                                <input type="text" class="form-control" id="discount_value"
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
                            <div class="count-1 count-bold"><span>Estimated Total</span><span id="count4">1</span>
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


}
let total = 0;
const ui = (data) => {
    console.log(data);
    let g_total = 0;
    data.map((ele, i) => {
        //     let temp = document.createElement('div');
        //     temp.innerHTML = `
        // <div class="card-body">
        //         <div class="main-img-info">
        //             <img src="${ele.img[0]}" alt="" id="img_s_produt">
        //             <div id="info">
        //                 <h3>${ele.title}</h3>
        //                 <h5 class="extra-1">${ele.desc}</h5>
        //                 <h5>In Stock</h5>
        //             </div>
        //         </div>
        //         <div class="price">
        //             <h3>Each</h3>
        //             <h5>Rs. ${ele.price}</h5>
        //         </div>
        //         <div class="main-qty">
        //             <p class="header-qty">Quantity</p>
        //             <div class="qty " id="qty${i}">

        //             </div>
        //         </div>
        //         <div class="price-total">
        //             <h3>Total</h3>
        //             <h5>Rs. 890</h5>
        //         </div>
        // </div>`

        let main_div = document.createElement('div');
        main_div.setAttribute('class', 'card-body');

        let main_img_info = document.createElement('div');
        main_img_info.setAttribute('class', 'main-img-info');

        let img_s_produt = document.createElement('img');
        img_s_produt.setAttribute('id', 'img_s_produt');
        img_s_produt.src = ele.img[0];

        let info = document.createElement('div');
        info.setAttribute('id', 'info')

        let info_h3 = document.createElement('h3');
        info_h3.innerHTML = ele.title

        let info_h5_1 = document.createElement('h5');
        if (ele.desc.length > 10) {
            info_h5_1.innerHTML = ele.desc.substr(0, 10) + '...';
        }
        else {
            info_h5_1.innerHTML = ele.desc
        }

        let info_h5_2 = document.createElement('h5');
        info_h5_2.innerHTML = "In Stock";



        let price_div = document.createElement('div');
        price_div.setAttribute('class', 'price');

        let price_h3 = document.createElement('h3');
        price_h3.innerHTML = "Each";

        let price_h5 = document.createElement('h5');
        price_h5.innerHTML = "₹ " + ele.price



        let main_qty = document.createElement('div');
        main_qty.setAttribute('class', 'main-qty');


        let main_qty_p = document.createElement('p');
        main_qty_p.setAttribute('class', 'header-qty')


        let qty = document.createElement('div');
        qty.setAttribute('id', 'qty')
        qty.setAttribute('class', 'qty')

        let m_btn = document.createElement('button');
        if (ele.qtyy == 1) {
            m_btn.innerHTML = `<i class="bi bi-trash"></i>`
        } else {
            m_btn.innerHTML = `<i class="bi bi-dash"></i>`
        }
        m_btn.setAttribute('class', 'qty_m');
        m_btn.setAttribute('id', 'qty_m');
        m_btn.addEventListener('click', () => {
            if (ele.qtyy == 1) {
                DelData(`http://localhost:3000/cart/${ele.id}`)
            }
            ele.qtyy--;
            console.log(ele.qtyy);
            UpdateData(`http://localhost:3000/cart/${ele.id}`, ele)
        })

        let s_div = document.createElement('div');
        s_div.innerHTML = ele.qtyy;
        s_div.setAttribute('class', 'qty_s')
        s_div.setAttribute('id', 'qty_s')

        let p_btn = document.createElement('button');
        p_btn.innerHTML = `<i class="bi bi-plus-lg"></i>`
        p_btn.setAttribute('class', 'qty_a')
        p_btn.setAttribute('id', 'qty_a')



        p_btn.addEventListener('click', () => {
            ele.qtyy++;
            UpdateData(`http://localhost:3000/cart/${ele.id}`, ele)
        })

        let price_total = document.createElement('div');
        price_total.setAttribute('class', 'price-total');

        let price_total_h3 = document.createElement('h3');
        price_total_h3.innerHTML = "Total";

        let price_total_h5 = document.createElement('h5');
        price_total_h5.innerHTML = `Rs. ${ele.qtyy * ele.price}`


        info.append(info_h3, info_h5_1, info_h5_2)
        main_img_info.append(img_s_produt, info)
        price_div.append(price_h3, price_h5)
        qty.append(m_btn, s_div, p_btn)
        main_qty.append(main_qty_p, qty)
        price_total.append(price_total_h3, price_total_h5)
        main_div.append(main_img_info, price_div, main_qty, price_total)
        document.querySelector('.main-datas').append(main_div)
        total = total + (ele.qtyy * ele.price)

    })


    discount(data)
}

const discount = (data) => {

    document.querySelector('.t_item').innerHTML = ` Rs. ${total} `
    document.querySelector('.n_item').innerHTML = `${data.length} item`
    let Shipping_c = 0;
    if (total >= 700) {
        document.getElementById('count1').innerHTML = "Free";
        document.getElementById('away-fromfree').innerHTML = `<span style="color:orange">Hurray!</span> You Got Free Delivery`
    }
    else {
        Shipping_c = (700 - total) / 7;
        document.getElementById('count1').innerHTML = "₹ " + Shipping_c.toFixed(2)
        document.getElementById('away-fromfree').innerHTML = `You're <span style="color:red">Rs.${700 - total}</span> Away From Free Shipping`
    }
    document.getElementById('count2').innerHTML = "0%"
    document.getElementById('count3').innerHTML = `${(total * 18) / 100}`
    document.getElementById('count4').innerHTML = `${(total + Shipping_c + (total * 18) / 100).toFixed(1)}`


    document.getElementById('promo').addEventListener('submit', (e) => {
        e.preventDefault();

        let discount_value = document.getElementById('discount_value').value;
        if (discount_value == "OFF20") {
            total = total * 80 / 100
            alert('hi')
            document.querySelector('.t_item').innerHTML = ` Rs. ${total} `
            document.querySelector('.n_item').innerHTML = `${data.length} item`
            let Shipping_c = 0;
            if (total >= 700) {
                document.getElementById('count1').innerHTML = "Free";
                document.getElementById('away-fromfree').innerHTML = `<span style="color:orange">Hurray!</span> You Got Free Delivery`
            }
            else {
                Shipping_c = (700 - total) / 7;
                document.getElementById('count1').innerHTML = "₹ " + Shipping_c.toFixed(2)
                document.getElementById('away-fromfree').innerHTML = `You're <span style="color:red">Rs.${700 - total}</span> Away From Free Shipping`
            }
            document.getElementById('count2').innerHTML = "20%"
            document.getElementById('count3').innerHTML = `${(total * 18) / 100}`
            document.getElementById('count4').innerHTML = `${(total + Shipping_c + (total * 18) / 100).toFixed(1)}`

        }
    })


}


const get = async () => {
    let res = await GetData('http://localhost:3000/cart')
    let data = await res


    if (data.length == 0) {

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
        mainui()
        ui(data);
        document.getElementById('checkout_btn').addEventListener('click',  () => {
            console.log(data);
            alert(`You Checked Out All Items`)
            data.map((ele)=>{
                DelData(`http://localhost:3000/cart/${ele.id}`)
            })
        })
    }
}
get();
