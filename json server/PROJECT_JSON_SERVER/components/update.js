const UpdateData=(url,data)=>{
    fetch(url,{
        method:"PATCH",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
}
export default UpdateData