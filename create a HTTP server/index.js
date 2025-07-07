const express=require('express');
const app=express();

app.use('/sum',function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const c=a+b;
    res.json({
        answer:c
    })
})

app.use('/multiply/:a/:b',function(req,res){  
        const a=req.query.a;
        const b=req.query.b;
        const c=a*b;
        res.json({
            answer:c
        })
})

app.use('/divide',function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    if(b==0){
        res.status(400).json({
            error: "Division by zero is not allowed"
        });
    } else {
        const c=a/b;
        res.json({
            answer:c
        })
    }
})

app.use('/sub',function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    const c=a-b;
    res.json({
        answer:c
    })
})

app.listen(3001);