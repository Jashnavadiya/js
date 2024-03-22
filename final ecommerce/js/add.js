

let products= JSON.parse(localStorage.getItem("Store"))||[];
const calca=(e)=>{
    e.preventDefault();
    
    
   
    let fileInput = document.getElementById("img");
    
    const selectedFiles = fileInput;
    console.log(selectedFiles);
    if (selectedFiles.length === 0) {
        alert("Please select at least one file to upload.");
        return;
    }
    const reader=new FileReader();
    if(document.getElementById('cata').value==0){
        alert("Please Select Catgory.");
        return;
    }
    reader.addEventListener("load",()=>{
            console.log(reader.result);
            let product={
                title:document.getElementById('title').value,
                price:parseFloat(document.getElementById('price').value),
                desc:document.getElementById('desc').value,
                cata:document.getElementById('cata').value,
                img:reader.result
            }
            console.log(product);
            products.push(product);
            localStorage.setItem("Store",JSON.stringify(products))
        })
    reader.readAsDataURL(selectedFiles.files[0])
     window.open("../pages/products.html")
}

document.querySelector('.add-card').addEventListener('submit',calca)
// document.addEventListener('DOMContentLoaded',()=>{
//     const recentimg=localStorage.getItem("Img");
//     if(recentimg){
//         document.querySelector("#hi11").src=recentimg
//     }
// })