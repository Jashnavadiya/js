
const handle_search=(e)=>{
    e.preventDeafault();
    let city_name=document.querySelector('.weather__searchform').value;


}
let cord=navigator.geolocation.getCurrentPosition((pos)=>{
    let lat=pos.coords.latitude;
    let log=pos.coords.longitude
    getdata(lat,log)
        })
const getdata=async(lat,log)=>{

    

    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=f8f5aa93eb6807cc0c09def55e90855d&units=metric&lat=${lat}&lon=${log}`)
    let datas= await res.json();

    console.log(datas);
    document.querySelector('.weather__forecast').innerHTML=`${Math.round(datas.main.temp)} &#176c`
}
document.querySelector('.weather__search').addEventListener('submit',handle_search)