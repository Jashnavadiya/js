let cord = navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let log = pos.coords.longitude
    getdata1(lat, log)
})
const getdata1 = async (lat, log) => {



    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=f8f5aa93eb6807cc0c09def55e90855d&units=metric&lat=${lat}&lon=${log}`)
    let datas = await res.json();

    console.log(datas);
    document.querySelector('.weather__temperature').innerHTML = `${Math.round(datas.main.temp)} &#176c`

    document.querySelector('.weather__wind').innerHTML = `  ${datas.wind.speed}`;
    document.querySelector('.weather__pressure').innerHTML = `${datas.visibility}`;
    document.querySelector('.weather__humidity').innerHTML = `${datas.main.humidity}`;
    document.querySelector('.weather__realfeel').innerHTML = `${datas.main.feels_like}`;
    document.querySelector('#hi1').innerHTML = `Min: ${datas.main.temp_min} &#176c`;
    document.querySelector('#hi2').innerHTML = `Max: ${datas.main.temp_max} &#176c`;
    document.querySelector('.weather__city').innerHTML = `${datas.name}`;


}



const getdata2 = async (city_name) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=f8f5aa93eb6807cc0c09def55e90855d&units=metric&q=${city_name}`)

    let datas = await res.json();
    console.log(datas);
    document.querySelector('.weather__temperature').innerHTML = `${Math.round(datas.main.temp)} &#176c`

    document.querySelector('.weather__wind').innerHTML = `  ${datas.wind.speed}`;
    document.querySelector('.weather__pressure').innerHTML = `${datas.visibility}`;
    document.querySelector('.weather__humidity').innerHTML = `${datas.main.humidity}`;
    document.querySelector('.weather__realfeel').innerHTML = `${datas.main.feels_like}`;
    document.querySelector('#hi1').innerHTML = `Min: ${datas.main.temp_min} &#176c`;
    document.querySelector('#hi2').innerHTML = `Max: ${datas.main.temp_max} &#176c`;
    document.querySelector('.weather__city').innerHTML = `${datas.name}`;


}
document.querySelector('.weather__search').addEventListener('submit', (e) => {
    e.preventDefault();
    let city_name = document.querySelector('.weather__searchform').value;
    console.log(city_name);
    getdata2(city_name)
})