document.getElementById('time').classList.add('digital_color')
document.getElementById('extra_info').classList.toggle('digital_color')
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
        if(document.querySelector('.shadow').classList.contains('hidden')){
            return
        }
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
        
        if(hrs>12){
            hrs=hrs-12;
            document.querySelector("#am-pm").innerHTML="PM";
        }
        else{
            document.querySelector("#am-pm").innerHTML="AM"
        }

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
    
    setInterval(dateSet,100);
    
document.querySelector('.main-body').addEventListener('click',d_hide);
function hide(){
    
    if(document.querySelector('.shadow').classList.contains('hidden')){
    document.querySelector('.shadow').style.transition="all 0.1s";
    document.getElementById('b1-s').classList.add('b1-s-trans');
    document.getElementById('b1-s').style.transition = "all 2s";
    document.getElementById('b2-s').style.transition = "all 2s";
    document.getElementById('b2-s').classList.add('b2-s-trans');
    }
    else{
        document.getElementById('b1-s').classList.remove('off');
        document.getElementById('b1-s').classList.remove('b1-s-trans');
        document.getElementById('b1-s').style.transition = "all 0.1s";
        document.getElementById('b2-s').classList.remove('off');
        document.getElementById('b2-s').style.transition = "all 0.1s";
        document.getElementById('b2-s').classList.remove('b2-s-trans'); 
    }
    document.querySelector('.shadow').classList.toggle('hidden')
    document.getElementById('b1').classList.toggle('off');
    document.getElementById('b1').classList.toggle('b1-trans');
    document.getElementById('b1').style.transition = "all 2s";
    document.getElementById('b2').classList.toggle('off');
    document.getElementById('b2').style.transition = "all 2s";
    document.getElementById('b2').classList.toggle('b2-trans');
    document.getElementById('time').classList.toggle('digital_color')
    document.getElementById('extra_info').classList.toggle('digital_color')
    document.getElementById('alarm-clock').classList.toggle('alarm-trans')
    

    
 }
function d_hide(){
    hide()
    n_hide()
}
function n_hide(){
    hours.innerHTML="88";
    second.innerHTML="88";
    minut.innerHTML="88"
}