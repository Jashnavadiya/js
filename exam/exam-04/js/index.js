document.getElementById('cata_head').addEventListener('click',()=>{
        document.querySelector('.cata_main').classList.toggle('hidden');
        document.getElementById('cata_arrow').classList.toggle('bi-chevron-up')
        document.getElementById('cata_arrow').classList.toggle('bi-chevron-down')
    
})



const uimaker=(data)=>{
    data.map((ele,i)=>{
    let div=document.createElement('div');
    let img=document.createElement('img');
    let title=document.createElement('p');
    let rating=document.createElement('p');
    let rating_sp=document.createElement('span');
    let rating_d=document.createElement('div');
   
    let price=document.createElement('p');

    img.src=ele.image;
    title.innerHTML=ele.title;
    price.innerHTML="$"+ele.price+" "+`<s>${(ele.price)*1.5}</s>` ;
    rating_sp.innerHTML=ele.rating.rate
    // -----------------------------------------------------------------
    let ratings=ele.rating.rate*2
    let counts=1;
    while(ratings>2){
        
        ratings=ratings-2
        let imag=document.createElement('img');
        imag.setAttribute('id','icon-star')
        imag.src="../imgs_hi/star-full-icon.svg"
        rating.append(imag)
        counts++;
    }
    while(ratings>1){
        ratings=ratings-1
        let imag=document.createElement('img');
        imag.setAttribute('id','icon-star')
        imag.src="../imgs_hi/star-half-icon.svg" 
        rating.append(imag)
        counts++;
    }
    
    counts=5-counts;
    console.log(counts);
    while(counts>=0){
        counts--;
        let imag=document.createElement('img');
        imag.setAttribute('id','icon-star')
        imag.src="../imgs_hi/star-empty-icon.svg"
        rating.append(imag)
    }

     
    // ===================================================================

    div.setAttribute('id','card-body')
    img.setAttribute('id','img')
    title.setAttribute('id','title')
    rating.setAttribute('id','rating')
    price.setAttribute('id','price')
    rating_d.setAttribute('id','rating_d')
    rating_sp.setAttribute('id','rating_sp')

     rating_d.append(rating,rating_sp)
    div.append(img,title,rating,price)
    document.querySelector('.main_contents_card').append(div)
    })
     
}
const getdata=async()=>{
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();

    uimaker(data)
}
getdata()