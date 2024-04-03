

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
const ui = (data) => {
    document.querySelector('.sec-2').innerHTML = ""
    data.map((ele, i) => {
        let main_div=document.createElement('div');
        main_div.setAttribute('id','main-div');
        
        let left_div=document.createElement('div')
        left_div.setAttribute('id','left_div');
        
        let img=document.createElement('img');
        img.setAttribute('id','img');
        img.src=ele.img;

        let title_div=document.createElement("div");
        title_div.setAttribute('id','data_title');
        
        let title=document.createElement('p')
        title.setAttribute('id','title');
        title.innerHTML=ele.title;
        
        let desc=document.createElement('p');;
        desc.setAttribute('id','desc');
        desc.innerHTML=ele.desc;

        title_div.append(title,desc);

        let right_div=document.createElement('div');
        right_div.setAttribute('id','right_div');

        main_div.append(left_div,right_div);
        document.querySelector('.sec-2').append(main_div)
    })
}


