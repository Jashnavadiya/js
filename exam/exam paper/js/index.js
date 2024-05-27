let ind= document.querySelector('.main_div h2').innerHTML
ind=ind.split('.')
ind=ind[0]-1;

const ui = (data) => {
    data.map((ele,i) => {
        let div=document.createElement('div');
        div.setAttribute('id','side_qus');
        div.innerHTML=`${i+1}. `+ele.question;
        div.addEventListener('click',()=>{
            sasta_ui(data,i)
        }) 
        document.querySelector('.main-sidebar').append(div)
        
    })


}


console.log(ind);
let the_selcted;
const get =  () => {
     fetch('http://localhost:3000/questions').then((res)=>res.json()).then((data)=>{


         console.log(data);
         ui(data)
         sasta_ui(data,0)
         
            
         document.querySelector('#Previous').addEventListener('click',()=>sasta_ui(data,ind-1))
         
         document.querySelector('#Next').addEventListener('click',()=>sasta_ui(data,ind+1))
         document.querySelector('#Save').addEventListener('click',()=>calc(data,ind))
     })
    
}
const validate=(e)=>{
    e.preventDefault();
    let Selected=document.querySelector('input[name="ans"]:checked').value;
    if(Selected=="A"||Selected=="B"||Selected=="C"||Selected=="D"){
        console.log(Selected);
    }
}
const calc=(dataa,index)=>{
    let Selected=document.querySelector('input[name="ans"]:checked').value;
    if(Selected=="A"||Selected=="B"||Selected=="C"||Selected=="D"){
        console.log(Selected);
        let data={...dataa[index],Select:Selected}
        
        console.log(data);
    }
}
const updatedata=()=>{
    
}
const sasta_ui=(alData,index)=>{
    document.querySelector('.main_div h2').innerHTML=`${index+1}.`+ alData[index].question
    document.querySelector('#a_option_content').innerHTML=alData[index].options.A
    document.querySelector('#b_option_content').innerHTML=alData[index].options.B
    document.querySelector('#c_option_content').innerHTML=alData[index].options.C
    document.querySelector('#d_option_content').innerHTML=alData[index].options.D
   ind=index;
}

document.querySelector('#Save').addEventListener('click',calc)

get()