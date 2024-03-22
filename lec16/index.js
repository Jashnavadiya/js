const calca = (data) => {
    data.map((ele) => {
        let card = document.createElement('div');
        card.setAttribute('id', 'main-card');


        let title = document.createElement('p');
        title.setAttribute('id', 's-title');
        title.innerHTML = ele.title;

        let img = document.createElement('img');
        img.setAttribute('id', 's-img');
        img.src = ele.thumbnail;

        let dec = document.createElement('p');
        dec.setAttribute('id', 's-dec');
        dec.innerHTML = ele.description;

        let price = document.createElement('p');
        price.setAttribute('id', 's-price');
        price.innerHTML = `Rs. ${ele.price}`;


        card.append(title, img, dec, price);

        document.querySelector('.main-cards').append(card)
    })




}
fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => calca(data.products))
