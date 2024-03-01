
    let date=document.getElementById('date');
    let hours=document.getElementById('hours');
    let minut=document.getElementById('minut');
    let second=document.getElementById('second');
    let day=document.getElementById('day');

    let s_date=document.getElementById('date-s');
    let s_hours=document.getElementById('hours-s');
    let s_minut=document.getElementById('minut-s');
    let s_second=document.getElementById('second-s');
    let s_day=document.getElementById('day-s');
    const dateSet=()=>{
        const now =new Date();

        let mm=now.getMonth();
        let dd=now.getDate();
        let yy=now.getFullYear();
        let dayss=now.getDay();

        let months=['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOMBER','NOVEMBER','DECEMBER']

        date.innerHTML=dd+", "+months[mm]+", "+yy;
        s_date.innerHTML=dd+", "+months[mm]+", "+yy;

        let days=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']

        day.innerHTML=days[dayss]

        let sec=now.getSeconds();
        let min=now.getMinutes();
        let hrs=now.getHours();
        
        if(hrs<10){
            hours.innerHTML="0"+hrs;
            s_hours.innerHTML="0"+hrs;
        }
        else{
            hours.innerHTML=hrs;
            s_hours.innerHTML=hrs;
        }
        if(sec<10){
            second.innerHTML="0"+sec;
            s_second.innerHTML="0"+sec;
        }
        else{
            second.innerHTML=sec;
            s_second.innerHTML=sec;
        }
        if(min<10){
            minut.innerHTML="0"+min;
            s_minut.innerHTML="0"+min;
        }
        else{
            minut.innerHTML=min;
            s_minut.innerHTML=min;
        }

    }
    setInterval(dateSet,1000);
document.querySelector('.main-body').addEventListener('click',d_hide);
function hide(){
    document.querySelector('.shadow').classList.toggle('hidden')
    document.getElementById('b1').classList.toggle('off');
    document.getElementById('b1').style.transition = "all 2s";
    document.getElementById('b2').classList.toggle('off');
 }
function d_hide(){
    hide()
}