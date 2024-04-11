document.querySelector('.cata-main_price li').addEventListener('click',()=>{
        document.querySelector('.cata-main_price>ul').classList.toggle('hidden');
        document.getElementById('cata_arrow').classList.toggle('bi-chevron-up')
        document.getElementById('cata_arrow').classList.toggle('bi-chevron-down')
        setTimeout(()=>{document.querySelector('.cata-main_price>ul').classList.toggle('d-none');},400)
})
document.querySelector('.cata-main_cata li').addEventListener('click',()=>{
    document.querySelector('.cata-main_cata>ul').classList.toggle('hidden');
    document.getElementById('cata_arrow1').classList.toggle('bi-chevron-up')
    document.getElementById('cata_arrow1').classList.toggle('bi-chevron-down')
})



let datas=[]
let catas=[];
const uimaker=(data)=>{
    document.querySelector('.main_contents_card').innerHTML=""
    data.map((ele,i)=>{
    let div=document.createElement('div');
    let like_d=document.createElement('p');
    let img=document.createElement('img');
    let title=document.createElement('p');
    let rating=document.createElement('p');
    let rating_sp=document.createElement('span');
    let rating_d=document.createElement('div');
    
    let li_cata=document.createElement('li');
    let price=document.createElement('p');

    like_d.innerHTML=`<i class="bi bi-heart" id="Heart_btn"></i>`
    img.src=ele.image;
    title.innerHTML=ele.title;
    price.innerHTML="$"+ele.price+" "+`<s>${(ele.price)*1.5}</s>` ;
    rating_sp.innerHTML=ele.rating.rate
    li_cata.innerHTML=ele.category
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
    while(counts>=0){
        counts--;
        let imag=document.createElement('img');
        imag.setAttribute('id','icon-star')
        imag.src="../imgs_hi/star-empty-icon.svg"
        rating.append(imag)
    }
    
    let isDuplicata=catas.filter((elea)=>elea==ele.category)
    if(isDuplicata.length==0)
    {document.getElementById('cata_main_cata').append(li_cata)
    catas.push(ele.category)
}
     console.log(document.getElementById('cata_main_cata'));
    // ===================================================================

    div.setAttribute('id','card-body')
    like_d.setAttribute('id','like_d')
    img.setAttribute('id','img')
    title.setAttribute('id','title')
    rating.setAttribute('class','rating')
    price.setAttribute('id','price')
    rating_d.setAttribute('class','rating_d')
    rating_sp.setAttribute('class','rating_sp')
    li_cata.setAttribute('id','cata_member')
    li_cata.setAttribute('class',`abcd${ele.category.substr(0, 3)}`)


    like_d.addEventListener('click',()=>{
        if(like_d.innerHTML!=`<i class="bi bi-heart-fill" id="Heart_btn"></i>`){
            like_d.innerHTML=`<i class="bi bi-heart-fill" id="Heart_btn"></i>`
        }else{
            like_d.innerHTML=`<i class="bi bi-heart" id="Heart_btn"></i>`
        }
        })

        document.querySelector(`.abcd${ele.category.substr(0, 3)}`).addEventListener('click',()=>{
            let temp=datas.filter((elea)=>elea.category==ele.category)
            uimaker(temp)
        })
     rating_d.append(rating,rating_sp)
    div.append(like_d,img,title,rating_d,price)
    document.querySelector('.main_contents_card').append(div)


    })
     
}

const getdata=async()=>{
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    datas= data
    document.getElementById('Searched').addEventListener('submit',handleSearch)
    document.querySelector('.htl').addEventListener('click',()=>{handleSortingprice("htl")})
    document.querySelector('.lth').addEventListener('click',()=>{handleSortingprice("lth")})
    uimaker(datas)
   

}
const Search=(val)=>{
    let temp= datas.filter((ele)=>ele.title.toLowerCase().includes(val.toLowerCase()))
    console.log(temp);
    uimaker(temp)
}
const handleSearch=(e)=>{
    e.preventDefault();

    let val=document.querySelector('.form-control').value;
    Search(val)
}
const handleSortingprice=(val)=>{
    let temp=[]
    if(val=="htl") temp=datas.sort((a,b)=>a.price-b.price)
        
    
    else temp=datas.sort((a,b)=>b.price-a.price)
        
    uimaker(temp)
}
getdata()