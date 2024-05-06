import GetData from "../components/get.js";
import PostData from "../components/post.js";

const reader = new FileReader();
const display = (hello) => {

    document.querySelector('.result').innerHTML = "";
    hello.map((ele, i) => {
        let img = document.createElement('img');
        img.src = ele.img[0];

        if (ele.img.length > 1) {
            img.addEventListener('mouseenter', () => {
                img.src = ele.img[1];
                img.classList.toggle('img_card_hover')
            })
            img.addEventListener('mouseleave', () => {
                img.src = ele.img[0];
                img.classList.toggle('img_card_hover')
            })
        }
        img.setAttribute('id', 's-img');

        let title = document.createElement('p');
        title.innerHTML = ele.title;
        title.setAttribute('id', 's-title');

        let deca = document.createElement('p');
        if (ele.desc.length > 20) {
            deca.innerHTML = ele.desc.substr(0, 20) + '...';
        }
        else {
            deca.innerHTML = ele.desc
        }
        deca.setAttribute('id', 's-deca');

        let price = document.createElement('p');
        price.innerHTML = "₹" + ele.price + `<s><span id="s_discount">${ele.price}</span></s>`;
        price.setAttribute('id', 's-price');

        // let btn_group = document.createElement('div');
        // btn_group.setAttribute('id', "btns_grp");
        // let btn1 = document.createElement('button');
        // btn1.setAttribute('id', 'add_cart');
        // btn1.innerHTML = "Add to Cart"
        // btn1.addEventListener('click', () => {
        //     isCarted(ele)
        // })

        // let btn2 = document.createElement('button');
        // btn2.setAttribute('id', 'buy_now');
        // btn2.innerHTML = "Buy Now"

        // btn_group.append(btn1, btn2)
        let card = document.createElement('div');
        card.setAttribute('id', 's-card');
        card.append(img, title, deca, price)
        card.addEventListener('click', () => {
            window.location.href = `../pages/products_s.html?id=${ele.id}`
        })
        document.querySelector('.result').append(card)
    })
}
document.querySelector('.icon_Filter').addEventListener('click', () => {
    document.querySelector('.main-card-body').classList.toggle('main_card_show');
    document.querySelector('.sidebar_main').classList.toggle('sidebar_hide');
})
const sortingprice = async (hii) => {

    console.log(hii);
    let res = await GetData(`http://localhost:3000/products`)
    let products = await res;
    let hi ;
    if (hii == "lth") {
        hi=products.sort((a,b)=>a.price-b.price)
    }
    else{
        hi=products.sort((a,b)=>b.price-a.price)
    }
    display(hi);
}
document.querySelector('.sorting-header').addEventListener('change', () => {
    let hii = document.querySelector('.sorting-header').value;
    sortingprice(hii)
})

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
const sorting = async (hiii) => {
    console.log(hiii);
    let res = await GetData(`http://localhost:3000/products/?cata=${hiii}`)
    let dataas = await res
    console.log(dataas);
    display(dataas)
}
const get = async () => {
    let res = await GetData("http://localhost:3000/products")
    document.getElementById('Sorting_tech').addEventListener('click', () => sorting("tech"))
    document.getElementById('Sorting_fashion').addEventListener('click', () => sorting("Fashion"))
    document.getElementById('Sorting_home_appliance').addEventListener('click', () => sorting("Home_appliance"))
    document.getElementById('htl').addEventListener('change',()=>{
        document.getElementById('lth').checked=false
        sortingprice('htl')}
)
    document.getElementById('lth').addEventListener('change',()=>{
        document.getElementById('htl').checked=false
        sortingprice('lth')})
    let data = JSON.parse(sessionStorage.getItem('Search')) || res;
    console.log(data);
    display(data)
}

get()
