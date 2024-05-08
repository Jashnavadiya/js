import GetData from "../components/get.js";

const uimaker=(data)=>{
    data.map((ele,i)=>{
        let div=document.createElement('div');
        div.setAttribute('id','Card-body');

        let index=document.createElement('p');
        index.setAttribute('id','s-index');
        index.innerHTML=i

        let photo=document.createElement('img');
        photo.setAttribute('id','s-img');
        photo.src=ele.img[0]

        let title=document.createElement('div');
        title.setAttribute('id','s-title');

        let desc=document.createElement('div');
        desc.setAttribute('id','s-desc');

        let btn_grp=document.createElement('div');
        btn_grp.setAttribute('id','btn_grp');
        
        div.append(index,photo,title,desc,btn_grp)
        document.querySelector('.main-body').append(div)
    })
}
const get=async()=>{
    let data = await GetData('http://localhost:3000/products')
    uimaker(data)

}
get()