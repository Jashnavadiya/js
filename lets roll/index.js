document.getElementById('roll_btn').classList.add('HELLO');

let Name = prompt("Enter Your Name", "");

let balance = 10000;
document.getElementById('balance').innerHTML = `Balance : ${balance}`;

document.getElementById('username').innerHTML = `Player Name: ${Name}`;


const roll = () => {
    let bet_value = parseInt(document.getElementById('Bett').value);
    console.log(bet_value);

    document.getElementById('heading_Info').innerHTML = ""
    let guesss = Math.ceil(Math.random() * 6);
    console.log(guesss);
    if (guesss == bet_value) {
        guesss = Math.ceil(Math.random() * 6);
        if (guesss == bet_value) {
            guesss = Math.ceil(Math.random() * 6);
        }
    }

    if (guesss == 1) {
        document.getElementById('main-img').src = "img/inverted-dice-1.svg"
    }
    else if (guesss == 2) {
        document.getElementById('main-img').src = "img/inverted-dice-2.svg"
    }
    else if (guesss == 3) {
        document.getElementById('main-img').src = "img/inverted-dice-3.svg"
    }
    else if (guesss == 4) {
        document.getElementById('main-img').src = "img/inverted-dice-4.svg"
    }
    else if (guesss == 5) {
        document.getElementById('main-img').src = "img/inverted-dice-5.svg"
    }
    else if (guesss == 6) {
        document.getElementById('main-img').src = "img/inverted-dice-6.svg"
    }
    if (bet_value == 0) {
        document.getElementById('result').innerHTML = `You Could Win If You Bet On ${guesss} Number.`
        return
    }
    if (guesss == bet_value) {
        document.getElementById('result').innerHTML = "Result : You Won"
        balance = balance + 100000
    }
    else if (guesss != bet_value) {
        document.getElementById('result').innerHTML = "Result : You Lose"
        balance = balance - 500
    }

    document.getElementById('balance').innerHTML = `Balance : ${balance}`;
}

document.querySelector('.HELLO').addEventListener('click', d_roll);


function l_roll() {
    if (balance > 0) { }
    else if (balance <= 0) {
        document.getElementById('roll_btn').classList.remove('HELLO');
        alert('Your Balance is 0 Refresh The Game.')
        return
    }
    document.getElementById('result').innerHTML = ""
    const dice_roteate = setInterval(function () {
        document.getElementById('heading_Info').innerHTML = ""
        let guess = Math.ceil(Math.random() * 6);
        if (guess == 1) {
            document.getElementById('main-img').src = "img/inverted-dice-1.svg"
        }
        else if (guess == 2) {
            document.getElementById('main-img').src = "img/inverted-dice-2.svg"
        }
        else if (guess == 3) {
            document.getElementById('main-img').src = "img/inverted-dice-3.svg"
        }
        else if (guess == 4) {
            document.getElementById('main-img').src = "img/inverted-dice-4.svg"
        }
        else if (guess == 5) {
            document.getElementById('main-img').src = "img/inverted-dice-5.svg"
        }
        else if (guess == 6) {
            document.getElementById('main-img').src = "img/inverted-dice-6.svg"
        }
    }, 100);
    setTimeout(Stop_dice, 1500)


    function Stop_dice() {
        clearInterval(dice_roteate)
        roll()
    }

}
function d_roll() {
    l_roll();

}