let ind = window.location.search
console.log(ind);
ind = ind.split('?qus=')
console.log(ind);
if (ind == '') {
    ind = 0
}
else {
    ind = JSON.parse(ind[1])
}
let count = 0;
let submitted = false;
const ui = (data) => {

    document.querySelector('.main-sidebar').innerHTML=''
    data.map((ele, i) => {
        let div = document.createElement('div');
        div.setAttribute('id', 'side_qus');
        div.setAttribute('class', 'side_qus')
        div.innerHTML = `${i + 1}. ` + ele.question;
        if (submitted==false){

            div.classList.remove('addded')
        } 
        div.addEventListener('click', () => {
            ind = i
            ui(data)
            window.location.href = `./index.html?qus=${i}`
            sasta_ui(data, i)
            secui(data)
        })
        if (ind == i && submitted==false) {
            div.classList.add('addded')
        }
        console.log(ind);
        


        

        document.querySelector('.main-sidebar').append(div)

    })
    
}

const secui = (data) => {
    
    document.querySelector('.Submit_btn').addEventListener('click', function hi() {
        submitted = true;
        document.querySelector('.Submit_btn').classList.add('hid')
        sasta_ui(data, 0)
        
        document.querySelector('.main-sidebar').innerHTML=""
        
        data.map((ele, i) => {
            let div = document.createElement('div');
            div.setAttribute('id', 'side_qus1');
            div.setAttribute('class', 'side_qus1')
            div.innerHTML = `${i + 1}. ` + ele.question;
            if (submitted==false){
    
                div.classList.remove('addded')
            } 
            div.addEventListener('click', () => {
                ind = i
                sasta_ui(data, i)
                secui(data)
            })
            console.log(ind);
            document.querySelector('.main-sidebar').append(div)
    
        })
        data.map((ele, i) => {
            if (ele.Select == ele.correct) {
                count++;
                document.getElementsByClassName('side_qus1')[i].classList.add('trues')
            }
            else {
                document.getElementsByClassName('side_qus1')[i].classList.add('false')
            }
        })
        console.log(count);
    })
}

console.log(ind);
let the_selcted;
const get = () => {

    fetch('http://localhost:3000/questions').then((res) => res.json()).then((data) => {

        console.log(data);
        ui(data)
        secui(data)
        
        sasta_ui(data, ind)


        document.querySelector('#Previous').addEventListener('click', () => sasta_ui(data, ind - 1))

        document.querySelector('#Next').addEventListener('click', () => sasta_ui(data, ind + 1))
        document.querySelector('#Save').addEventListener('click', () => calc(data, ind))
    })

}
const validate = (e) => {
    e.preventDefault();
    let Selected = document.querySelector('input[name="ans"]:checked').value;
    if (Selected == "A" || Selected == "B" || Selected == "C" || Selected == "D") {
        console.log(Selected);
    }
}
const calc = (dataa, index) => {
    let Selected = document.querySelector('input[name="ans"]:checked').value;
    if (Selected == "A" || Selected == "B" || Selected == "C" || Selected == "D") {
        console.log(Selected);
        let data = { ...dataa[index], Select: Selected }
        updatedata(data)

        window.location.href = `./index.html?qus=${index + 1}`
        console.log(data);

    }
}
const updatedata = async (data) => {
    fetch(`http://localhost:3000/questions/${data.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(data)
    })

}
const sasta_ui = (alData, index) => {
    

    document.querySelector('.main_div h2').innerHTML = `${index + 1}.` + alData[index].question
    


    
    if (submitted == true) {

        document.querySelector('.sub_div').innerHTML = ""
        let chosen = document.createElement('div');
        if(alData[index].Select==undefined){

            chosen.innerHTML = `You Selected none Of The Option.`;
        }
        else{

            chosen.innerHTML = `You Selected ${alData[index].Select}. Answer`;
        }
        let corewct = document.createElement('div');
        corewct.innerHTML = `Correct Answer IS  ${alData[index].correct}. `
        document.querySelector('.btns_main_div').classList.add('hid')
        

        let SUB_DIV = document.createElement('div');
        SUB_DIV.append(chosen, corewct)

        document.querySelector('.sub_div').append(SUB_DIV)
    }
    else{
        
    document.querySelector('#a_option_content').innerHTML = alData[index].options.A
    document.querySelector('#b_option_content').innerHTML = alData[index].options.B
    document.querySelector('#c_option_content').innerHTML = alData[index].options.C
    document.querySelector('#d_option_content').innerHTML = alData[index].options.D
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;
    let the_selcted_option=alData[index].Select.toLowerCase()
    document.getElementById(`${the_selcted_option}`).checked = true;
    // document.getElementById(`${the_selcted_option}_option_content`).classList.add('gray');
    console.log(the_selcted_option);
    }

    ind = index;
    
}

document.querySelector('#Save').addEventListener('click', calc)

get()