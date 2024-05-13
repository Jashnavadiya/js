let arr =[0,10,2,3,4,5]
let k=3
let minsum=Infinity
let currentsum=0

for(let i=0;i<k;i++){
    currentsum+=arr[i]
}
minsum=currentsum;

for(let i=k;i<arr.length;i++){
    currentsum=currentsum-arr[i-k]+arr[i]
    if(currentsum<minsum){
        minsum=currentsum
    }
}
console.log(minsum);