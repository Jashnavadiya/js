let arr=[0,1,1,1,1,2,2,2]
function duplicate(arr){
    let ans=[];
    
for(let i=0;i<arr.length;i++){
    let temp=0;
    let tempa=[];
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
                temp++;
                tempa=[arr[i],temp]
                
                
            
            
        }
    }
    if(ans.filter((ele)=>tempa[0]==ele[0]).length==0){
    ans.push(tempa)
    }
    
}
console.log(ans);
}
duplicate(arr)