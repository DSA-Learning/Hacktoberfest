const express = require("express");
const bodyparser= require("body-parser");
 
const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;
    res.send("The result is " + result);
});

// bmi calculator
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
})

app.post("/bmicalculator",function(req,res){
    var weight=req.body.weight;
    var height=req.body.height;
    var bmi= weight/(height*height);
    res.send("Your BMI is"+ bmi);
})

// common server 
app.listen(3000,function(){
    console.log("Server started at 3000");
});


