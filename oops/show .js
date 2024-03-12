let check="mitu";
let checki;
const viewHello=()=>{
    let i,j;
    for(i=0;i<Data.length;i++){
        let manager = new manag(Data[i].Name,Data[i].Role,Data[i].email,Data[i].num,Data[i].sal,Data[i].leave);
    console.log(manager);
    };

}
let Data=[{Name:"mitu",Role:"manager",email:"hi",num:12,sal:12,leave:1,view:0},
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
    hi() {
        console.log("HELLO");
    }

};
class manag extends emp {
    constructor(Name, Role, Email, Number, Salary, Leave) {
        super(Name, Role, Email, Number)
        this.Salary = Salary;
        this.Leave = Leave;
    }
}

let i,j;

for(i=0;i<Data.length;i++){
    if(Data[i].Role=="manager"){
        viewHello();
    }
        
};

