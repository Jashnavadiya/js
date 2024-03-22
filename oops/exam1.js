class num1 {

    constructor(a, b,result = 0) {
        this.a = a;
        this.b = b;
        this.result = result;
    };
    setClearResult(){
        console.clear();
    }
    getResult() {
    this.setClearResult();
        console.log(this.result);
        
        this.result=0;
    }
    add() {
        this.result = this.a + this.b;
        this.getResult();
    }
    sub() {
        this.result = this.a - this.b;
        this.getResult();
        }
    mult() {
        this.result=1;
        this.result = this.a * this.b;
        this.getResult();
    }
    div() {
        this.result=1;
        this.result = this.a / this.b;
        this.getResult();
    }
};
class num2 extends num1{
    constructor(a,b,c, result) {
        super(a,b,result)
        this.c = c;
    };
    add() {
        this.result = this.a + this.b+this.c;
        this.getResult();
        this.result;
    }
    sub() {
        this.result = this.a - this.b-this.c;
        this.getResult();
        }
    mult() {
        this.result=1;
        this.result = this.a * this.b*this.c;
        this.getResult();
    }
    div() {
        this.result=1;
        this.result = this.a / this.b/this.c;
        this.getResult();
    }
};
class num3 extends num2 {
    constructor(a, result = 0) {
        super(a[0],a[1],a[2],result)
        this.a=a;
    };
    add() {
      for(let i=0;i<this.a.length;i++){
        this.result+=this.a[i];
      }
      this.getResult();
    }
    mult() {
        this.result=1;
        for(let i=0;i<this.a.length;i++){
            this.result=this.result*this.a[i];
          }
          this.getResult();
    }
};
let hi = new num1(2, 3);
let hi1=new num2(1,2);
let hi2=new num3([1,2,3,4,5,1]);

hi2.mult();

