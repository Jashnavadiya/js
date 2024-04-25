import PostData from "../components/post.js";
let imgs=[]
const isExisted=async(data)=>{
    console.log(data);
    let res =await fetch(`http://localhost:3000/products?title=${data.title}`)
    let dataa = await res.json();

    if(dataa.length==0){
        PostData('http://localhost:3000/products',data)
    }
    else{
        alert('This Named Product Already Exists')
    }
    
}
const calca = (e) => {
    e.preventDefault();

    if (document.getElementById('img').files.length === 0) {
        alert("Please select at least one file to upload.");
        return;
    }
    // const reader = new FileReader();
    if (document.getElementById('cata').value == 0) {
        alert("Please Select Catgory.");
        return;
    }
    
        let product = {
            title: document.getElementById('title').value,
            price: parseFloat(document.getElementById('price').value),
            desc: document.getElementById('desc').value,
            cata: document.getElementById('cata').value,
            img: imgs
        }
        console.log(product);
        isExisted(product)
}
document.querySelector('.add-card').addEventListener('submit', calca)

document.getElementById('img').addEventListener('change',()=>{
    imgs=[]
    function hi(){
    let files=document.getElementById('img').files;
    function readAndPreview(file) {
        if (/\.(jpe?g|png|gif|webp)$/i.test(file.name)) {
          const reader = new FileReader();
    
          reader.addEventListener(
            "load",
            () => {
              let imgk = reader.result;
              imgs.push(imgk)
              console.log(imgs);
            },
            false,
          );
          reader.readAsDataURL(file);
        }
      }
      if (files) {
        Array.prototype.forEach.call(files, readAndPreview);
      }
    }
hi()
})