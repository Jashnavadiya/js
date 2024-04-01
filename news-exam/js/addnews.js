let news=JSON.parse(localStorage.getItem('news'))||[];

const show=(e)=>{
    e.preventDefault();
    let data={
        titile:document.getElementById('validationServer01').value,
        img:document.getElementById('validationServer02').value,
        dec:document.getElementById('validationServer03').value,
        coun:document.getElementById('validationServer04').value,
    }
    news.push(data)
    localStorage.setItem('news',JSON.stringify(news))
    console.log(news);
}
document.getElementById('news-form').addEventListener("submit",show)