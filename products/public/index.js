
let products=[];
document.getElementById('main-data').innerHTML="Product Data"
document.getElementById('a_modee').classList.add("add_mode")
const gridUI=()=>{
    document.getElementById('result').classList.add("grid")
    document.getElementById('result').innerHTML=""
    products.map((ele,i)=>{
        let conta=document.createElement('div');
    conta.setAttribute('id',"s_product");
    let p_img=document.createElement('img');
    p_img.src=ele.Img
    p_img.setAttribute('id',"s_img")

    let p_title=document.createElement('p');
    p_title.innerHTML="Name : &nbsp; " + ele.Title
    p_title.setAttribute('id',"s_title")

    let p_price=document.createElement('p');
    p_price.innerHTML="Price  &nbsp;: &nbsp;" + "$" + ele.Price
    p_price.setAttribute('id',"s_price")

    let btn_g=document.createElement('div');
    btn_g.setAttribute('id',"btn_g")
    let del_btn=document.createElement('button');
    del_btn.setAttribute("id","del_btn");
    del_btn.innerHTML="Delete Product"
    let add_btn=document.createElement("button");
    add_btn.setAttribute('id',"add_btn");
    add_btn.innerHTML="Edit Product"
    let edit_btn=document.createElement("button");
    edit_btn.setAttribute('id','edit_btn')
    edit_btn.innerHTML="Edit"
    btn_g.append(add_btn,del_btn)
    conta.append(p_img,p_title,p_price,btn_g);
    

    del_btn.addEventListener("click", () => {
        products.splice(i,1)
        gridUI()
        summ()
    })

    add_btn.addEventListener("click",()=>{
        document.getElementById('name').value=ele.Title;
        document.getElementById('price').value=ele.Price;
        document.getElementById('img').value=ele.Img;
        document.getElementById('sub').classList.remove("shown")
        document.getElementById('sub').classList.add("hidden")
        document.getElementById('main-body').append(edit_btn)

        document.getElementById('a_modee').classList.remove("add_mode")
        document.getElementById('a_modee').classList.add("edit_mode")
        document.getElementById('a_modee').innerHTML="Edit"
    })
    edit_btn.addEventListener('click',(e)=>{
        document.getElementById('sub').classList.add("shown")
        document.getElementById('sub').classList.remove("hidden")
        let Title=document.getElementById('name').value;
        let Img=document.getElementById('img').value;
        let Price=parseFloat(document.getElementById('price').value);
        if(Title.length<2){
            alert('Enter Appropraite Name For Product')
        }
        if(Price<0){
            alert("Enter Vaild Price For Product")
        }
        else if(Price==0){
            Price="FREE"
        }
        let product={
            Title:Title,
            Img:Img,
            Price:Price
        }
        products.splice(i,1,product);
        gridUI()
        document.getElementById('a_modee').classList.remove("edit_mode")
        document.getElementById('a_modee').classList.add("add_mode")
        document.getElementById('a_modee').innerHTML="Add"
        
        e.target.remove();
    })


    document.getElementById('result').append(conta);
    })
}
const summ=()=>{
    let n=products.length;

document.getElementById("a_total").innerHTML="Total Products : " + n
}
const check=()=> {
    
      
      
    
}
const calproduct=(e)=>{
    e.preventDefault()
    const form = document.querySelector('form');
    const fd = new FormData(form);

  // Convert to URL-encoded string:
  const urlEncoded = new URLSearchParams(fd).toString();
  
  fetch('http://localhost:5000/products', {
    method: "POST",
    body: urlEncoded, // just 'fd' for multipart/form-data
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
      // Content-type header should only be set if data is url-encoded! A FormData object will set the header as multipart/form-data automatically (and setting it manually may lead to an error)
    }
  })

    console.log(products);
    let Title=document.getElementById('name').value;
    let Img=document.getElementById('img').value;
    let Price=parseFloat(document.getElementById('price').value);
    if(Title.length<2){
        alert('Enter Appropraite Name For Product')
        return
    }
    if(Price<0){
        alert("Enter Vaild Price For Product")
        return
    }
    else if(Price==0){
        Price="FREE"
    }
    

    
    document.getElementById('a_modee').classList.remove("edit_mode")
    document.getElementById('a_modee').classList.add("add_mode")
    document.getElementById('a_modee').innerHTML="Add"
    let product={
        Title:Title,
        Img:Img,
        Price:Price
    }
    products.push(product)
    var valueArr = products.map(function(item) {
        return item.Title;
      });
      
      var isDuplicate = valueArr.some(function(item, i) {
        return valueArr.indexOf(item) !== i;
      });
      if(isDuplicate){
        alert('This Product Name Already Exist')
        products.pop()
        return
      }
      
    summ()
    gridUI();
    
    
}
document.getElementById('card-info').addEventListener('submit',calproduct)