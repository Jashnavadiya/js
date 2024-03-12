const checkpal = (e) => {
    e.preventDefault();
    document.getElementById('ans1').innerHTML = "";
    document.getElementById('ans').innerHTML = ""
    let str = document.getElementById('str').value;
    let re = "";
    let last = '';
    let first = '';
    let middle = '';
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        }
        else {
            map.set(str[i], 1)
        }
    }
    let odd = 0;
    for (let [key, val] of map) {
        if (val % 2 != 0) {
            odd++;
        }
    }
    if (odd == 0 || odd == 1) {
        map.forEach((value, key) => {
            if (value % 2 != 0) {
                middle += (key);
            }
            for (let i = 0; i < (Math.floor(value / 2)); i++) {
                re += (key);
                first += (key);
            }
        });
        last = re.split('').reverse().join('');
        let dis = first + middle + last;
        document.getElementById('ans1').innerHTML = `Word is Pallindrome with word ${dis}`
        console.log(`*Word is Pallindrome with ${dis}`);
    }
    else {
        document.getElementById('ans').innerHTML = "Word is Not Pallindrome."
        console.log('Word is Not Pallindrome.');
    }

}
document.querySelector('form').addEventListener('submit', checkpal)