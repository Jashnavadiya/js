const post=(data)=>{
    
    fetch('http://localhost:3000/questions',{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    }).then((res) => res.json()).
    then((data) => {
        
    })
}
const calc=(e)=>{
    e.preventDefault();
    let data={
        question:document.getElementById('qus').value,
        options:{
            A:document.getElementById('a').value,
            B:document.getElementById('b').value,
            C:document.getElementById('c').value,
            D:document.getElementById('d').value,

        },
        correct:document.getElementById('ans').value
    }
    console.log(data);
    post(data)
}
document.getElementById('form').addEventListener('submit',calc)