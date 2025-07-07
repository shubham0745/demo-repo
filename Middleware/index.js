const express= require('express');
const app=express();

let reqcount=0;

function requestIncreaser(req,res,next){
    reqcount=reqcount+1;
    req.name="randomshubham";
    console.log("total number of request:"+reqcount);
    next();
}


function realSumhandler(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const sum=a+b;
    console.log(req.name);
    res.json({sum:sum})
}

app.get('/sum',requestIncreaser,realSumhandler);


app.listen(3001);
