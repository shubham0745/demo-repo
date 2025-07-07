// const express = require('express');
// const app = express();

// // Middleware to parse JSON body
// app.use(express.json());

// // Dummy data
// var users = [{
//     name: 'Shubham',
//     kidneys: [{
//         healthy: false
//     }]
// }];

// // GET route - get kidney stats
// app.get("/", function(req, res) {
//     const johnKidneys = users[0].kidneys;
//     const numberOfKidneys = johnKidneys.length;

//     let numberOfHealthyKidneys = 0;

//     for (let i = 0; i < numberOfKidneys; i++) {
//         if (johnKidneys[i].healthy) {
//             numberOfHealthyKidneys++;
//         }
//     }

//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys
//     });
// });

// // POST route - add new kidney data
// app.post("/", function(req, res) {
//     const isHealthy = req.body.isHealthy;

//     users[0].kidneys.push({
//         healthy: isHealthy
//     });

//     res.json({
//         msg: "Kidney added successfully"
//     });
// });



// app.listen(3001, () => {
//     console.log("Server running on http://localhost:3001");
// });

const express= require('express');
const app=express();

// function isOldEnough(age){
//     if(age>=18){
//         return true;
//     }
//     else
//         return false;
// }

function isOldEnoughmiddleware(req,res,next){
    const age=req.query.age;
    if(age>=18){
        next();
    }
    else{
        res.json({
            msg:"Fuck off",
        })
    }
}

app.use(isOldEnoughmiddleware);


app.get("/ride1",function(req,res){
        res.json({
            msg:"You are old enough to ride the ride!"
        })
})

app.get("/ride2",function(req,res){
        res.json({
            msg:"You are old enough to ride2!"
        })
})

app.listen(3001);