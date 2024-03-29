
const reader = new FileReader();
const display = (hello) => {

    document.querySelector('.result').innerHTML = "";
    hello.map((ele) => {
        let img = document.createElement('img');
        img.src = ele.img;
        img.setAttribute('id', 's-img');

        let title = document.createElement('p');
        title.innerHTML = ele.title;
        title.setAttribute('id', 's-title');

        let deca = document.createElement('p');
        deca.innerHTML = ele.desc;
        deca.setAttribute('id', 's-deca');

        let price = document.createElement('p');
        price.innerHTML = ele.price;
        price.setAttribute('id', 's-price');

        let btn_group=document.createElement('div');
        btn_group.setAttribute('id',"btns_grp");
        let btn1= document.createElement('button');
        btn1.setAttribute('id','add_cart');

        let btn2=document.createElement('button');
        btn2.setAttribute('id','buy_now')


        let card = document.createElement('div');
        card.setAttribute('id', 's-card');
        card.append(img, title, deca, price)

        document.querySelector('.result').append(card)
    })
}
document.querySelector('.icon_Filter').addEventListener('click', () => {
    document.querySelector('.main-card-body').classList.toggle('main_card_show');
    document.querySelector('.sidebar_main').classList.toggle('sidebar_hide');
})
const sortingprice = (hii) => {
    let hi = products.filter((ele) => ele.cata == hii)
    if (hii == "All") hi = products;
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

let isSearched = JSON.parse(sessionStorage.getItem('Search'));
if (isSearched != null) {
    console.log(isSearched);
    display(isSearched);


}
else {

    display(products)
}
