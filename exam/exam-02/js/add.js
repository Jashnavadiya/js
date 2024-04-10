
let datas=JSON.parse(localStorage.getItem('books'))||[]
let cart=JSON.parse(localStorage.getItem('carts'))||[]


const calc=(e)=>{
    e.preventDefault();

    let data={
        title:document.getElementById("title").value,
        img:document.getElementById('img').value,
        price:document.getElementById('price').value,
        rating:document.getElementById('ratings').value
    }
console.log(data.title);
let isdupilcate=datas.filter((cr)=>cr.title==data.title)
console.log(isdupilcate);
if(isdupilcate==0){
    datas.push(data);
    localStorage.setItem('books', JSON.stringify(datas));
    window.location.href="../pages/index.html"
    alert('Your book is added')
}
else{
    alert('This Named Book Already Existed')
}
    

}
document.getElementById('some-form').addEventListener('submit',calc)