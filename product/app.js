const express= require('express');
var Datastore = require('nedb');
let db = new Datastore('database.db');
db.loadDatabase();
const port = process.env.PORT || 5000


const app =express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

var datas=[]

app.get('/products',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');

})
app.post('/products',function(req,res){
    var name=req.body.name;
    var img=req.body.img;
    var price=req.body.price;

    var data={
        "name":name,
        "img":img,
        "price":price
    }
    datas.push(data)
    db.insert(datas)
    console.log(data);
    res.sendFile(__dirname + '/public/index.html')
    
})
app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`);
})






