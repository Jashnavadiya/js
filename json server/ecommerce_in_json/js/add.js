




const calca = (e) => {
    e.preventDefault();
    let imgs_drop = document.querySelector('.imgs-drop');



    let fileInput = document.getElementById("img");

    imgs_drop.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
    imgs_drop.addEventListener("drop", function (e) {
        fileInput.files = e.dataTransfer.files;
    })
    const selectedFiles = fileInput;
    console.log(selectedFiles);
    if (selectedFiles.length === 0) {
        alert("Please select at least one file to upload.");
        return;
    }
    const reader = new FileReader();
    if (document.getElementById('cata').value == 0) {
        alert("Please Select Catgory.");
        return;
    }
    reader.addEventListener("load", () => {
        console.log(reader.result);
        let product = {
            title: document.getElementById('title').value,
            price: parseFloat(document.getElementById('price').value),
            desc: document.getElementById('desc').value,
            cata: document.getElementById('cata').value,
            img: reader.result
        }
        console.log(product);
        products.push(product);
        postproduct(products)
    })
    reader.readAsDataURL(selectedFiles.files[0])
    window.open("../pages/products.html")
}

const postproduct = async (data) => {
    let res = await fetch('http://localhost:3000/products', {
        method: "POST",
        headers: {
            "content-Type": "Application/json"
        },
        body: JSON.stringify(data)
    });
    let datas = await res.json();
}
document.querySelector('.add-card').addEventListener('submit', calca)
// document.addEventListener('DOMContentLoaded',()=>{
//     const recentimg=localStorage.getItem("Img");
//     if(recentimg){
//         document.querySelector("#hi11").src=recentimg
//     }
// })