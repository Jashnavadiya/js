const PostData=(url,data)=>{
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{})
}
export default PostData;