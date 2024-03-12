
let checki;

let Data=[{Name:"Jash",Role:"admin",email:"hi",num:12,sal:12,leave:1,view:0},{Name:"mitu",Role:"manager",email:"hi",num:12,sal:12,leave:1,view:0},
    {Name:"kartik",Role:"bot",email:"hi",num:12,sal:12,leave:1,view:0},
    {Name:"dev",Role:"pro",email:"hi",num:12,sal:12,leave:1,view:0},
    {Name:"hi",Role:"noole",email:"hi",num:12,sal:12,leave:1,view:0}]

class emp {
    constructor(Name, Role, Email,Number) {
        this.Name = Name;
        this.Role = Role;
        this.Email = Email;
        this.Number = Number;
    }   
};
class manag extends emp {
    constructor(Name, Role, Email, Number, Salary, Leave) {
        super(Name, Role, Email, Number)
        this.Salary = Salary;
        this.Leave = Leave;
    }
}
class admin extends manag{
    constructor(Name, Role, Email, Number, Salary, Leave){
        super(Name, Role, Email, Number, Salary, Leave)
    }

}
const check=(e)=>{
    e.preventDefault()

    let p_name=document.getElementById('p_name').value;

    let i,j;
    
    let count_p_name=0;
for(i=0;i<Data.length;i++){
    if(Data[i].Name==p_name){
        if(Data[i].Role=="admin"){
            viewadmin();
            return
        }
        else if(Data[i].Role=="manager"){
            viewMang();
            return
        }
        else if(Data[i].Role!="admin" && Data[i].Role!="manager"){
            viewEmp();
        }
    }
    else{
        
        count_p_name++;
    }
   
};
if(count_p_name==Data.length){
    alert('You are not Registered.');
    return
}
}
document.querySelector('form').addEventListener('submit',check)
const viewadmin=(e)=>{
    for(i=0;i<Data.length;i++){
        let manager = new manag(Data[i].Name,Data[i].Role,Data[i].email,Data[i].num,Data[i].sal,Data[i].leave);
    console.log(manager);
    
    };
   adminui() ;  
}
const adminui=()=>{
    document.querySelector('.main-card').innerHTML=`<h1 id="login-h">All Data</h1>
    <form id="main-form" action="">
        <input type="text" id="c_name" placeholder="name" required>
        <input type="text" id="c_Role" placeholder="role" required>
        <input type="text" id="c_email" placeholder="email" required>
        <input type="text" id="c_number" placeholder="number" required>
        <input type="text" id="c_salary" placeholder="salary" required>
        <input type="text" id="c_leave" placeholder="leave" required>
        <input type="submit" id="Submit" value="Add ">
    </form>`
}
const viewMang=(e)=>{
    let i;
    for(i=0;i<Data.length;i++){
        let manager = new manag(Data[i].Name,Data[i].Role,Data[i].email,Data[i].num,Data[i].sal,Data[i].leave);
    console.log(manager);
    };

}
const viewEmp=(e)=>{
    let i;
    for(i=0;i<Data.length;i++){
        let employee = new emp(Data[i].Name,Data[i].Role,Data[i].email,Data[i].num,Data[i].sal,Data[i].leave);
    console.log(employee);
    };

}