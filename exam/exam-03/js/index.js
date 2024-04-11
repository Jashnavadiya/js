
uimaker(datas)

let Searched=JSON.parse(sessionStorage.getItem('Search'))||[]
if(Searched.length>0){
    uimaker(Searched)
}


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
document.getElementById('lth').addEventListener('click',()=>handlPrice("lth"))
document.getElementById('htl').addEventListener('click',()=>handlPrice("htl"))
const handlPrice=(val)=>{
    console.log("hi");
    if(val=="lth"){
       let temp= datas.sort((a,b)=>a.price-b.price)
     
       uimaker(temp)
    }
    else{
        let temp= datas.sort((a,b)=>b.price-a.price)
        
        uimaker(temp)
    }
}
const handleRating=()=>{
    let temp;
   
    let tempa=datas.filter((ele)=>{ele.rating
        for(let i=1;i<=5;i++){
           
               console.log(`r_${i} ${ele.rating}`);
                
           
            
        }
       
    })
    
    console.log(tempa);
    uimaker(tempa)
}


    
document.getElementById(`r_1`).addEventListener('click',()=>handleRating())
document.getElementById(`r_2`).addEventListener('click',()=>handleRating())
document.getElementById(`r_3`).addEventListener('click',()=>handleRating())
document.getElementById(`r_4`).addEventListener('click',()=>handleRating())
document.getElementById(`r_5`).addEventListener('click',()=>handleRating())

