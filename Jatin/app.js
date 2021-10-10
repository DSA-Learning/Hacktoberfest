const express=require("express");
const app= express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

const https= require("https");

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
        });


app.post("/",function(req,res){
    const city=req.body.cityname;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8731ee435dade5110fd2f68e9c0aa62a&units=metric";

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
        const weatherdata=JSON.parse(data);
        const temp= weatherdata.main.temp;
        const description = weatherdata.weather[0].description;
        const icon=weatherdata.weather[0].icon;
        const imageurl= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.write("<h1>The temperature in "+city+" is "+temp+"<h1>");
        res.write("The weather description is "+description);
        res.write("<img src="+imageurl+">");
        console.log(weatherdata);
        res.send();
})
    });
});

app.listen(3000,function(){
    console.log("server is running on 3000")
});