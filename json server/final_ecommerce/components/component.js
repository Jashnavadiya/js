const ce = (Name, type, input, input_d) => {
    if (input == "img") {
       
        Name = document.createElement(type);
        Name.src = input_d
        Name.setAttribute(`class`,Name)
        Name.setAttribute(`id`,Name)
        console.log(Name);
        return Name
    }
    else {
        let Name1="hi"
        console.log(Name);
        Name1 = document.createElement(type);
        Name1.innerHTML = input_d
        Name1.setAttribute(`class`,`${Name}`)
        Name1.setAttribute(`id`,`${Name}`)
        return Name
    }
}
export default ce