

let users = JSON.parse(localStorage.getItem("Bro")) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];


document.querySelector('.header_name').innerHTML = `Hello, ${users.fn}`;


