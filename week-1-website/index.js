// let fname="Josh";
// var age=100;
// age=20;

// console.log(fname);
// console.log(age);

// if(age==20)
// {
//     console.log(true);
// }

// let l=["1","2","3","4","5"];

// console.log(l[2]);

/* function add(a,b)
{
    return (parseInt(a)+parseInt(b));
}

console.log(add("2","3")); */

/* function canVote(age)
{
    if(age>=18 && age<=80)
    {
        console.log("he can vote");
    }
    else
        console.log("Can't Vote");
}

canVote(100); */

/* let user1={
    names:"Josh",
    age:20,
    gender:"male"
}

console.log(user1.names);

 */
/* function Vote(agee){

if(agee>=18 && agee<=80)
{
    console.log("he can vote");
}}
let user={
    name:"Shubham",
    age:23,
    gender:"Male"
}



console.log("hi "+user.name+"your age is "+user.age);
Vote(23); */

/* const u=[
    {
        name:"Shubham",
        age:23,
        gender:"Male"},
    {
        name:"josh",
        age:24,
        gender:"Male",
    },
    {
        name:"Priya",
        age:22,
        gender:"Female"
    }
];

const NS=u.filter((user=> user.age>=18 && user.gender=="Male"));
console.log(NS);
 */

// function Sum(n)
// {
//     console.log(n*(n-1));
// }

// function divide(a,b){
//     return a/b;
// }

// function doOperation(a,b,op){
//     let val=op(a,b);
//     return val;
// }

// let ans=doOperation(10,2,divide)
// console.log(ans);


//fs is file sytsem

// const fs=require("fs");

// const data =fs.readFile('a.txt','utf16le'); //asynchronous read
// console.log(data)

// const data2=fs.readFileSync('b.txt','utf-8');
// console.log(data2)

// const fs=require('fs');

// function print(err,data){
//     console.log(data);
// }

// fs.readFile('a.txt','utf-8',print);

// fs.readFile('b.txt','utf-8',print);

// console.log("im first")

// function timeout(){
//     console.log("Click the button")
// }

// console.log("HI");

// setTimeout(timeout,1000);

// console.log("Welcome to loupe.")

// let c=0;
// for(let i=0;i<1;i++){
//     c=c+1;
// }

// console.log("Operation done!")
// console.log("Operation done2!")


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", function (n) {
//     n = parseInt(n);

//     function isPalindrome(num) {
//         let rev = 0;
//         let temp = num;

//         while (temp > 0) {
//             let digit = temp % 10;
//             rev = rev * 10 + digit;
//             temp = Math.floor(temp / 10);
//         }

//         if (rev === num) {
//             console.log("Palindrome");
//         } else {
//             console.log("Not a Palindrome");
//         }
//     }

//     isPalindrome(n);
//     rl.close();
// });

// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     paint(){
//         console.log("Painting the rectangle with color:"+ this.color);
//     }

// }

// const rect = new Rectangle(10, 5,'blue')
// const area = rect.area();
// rect.paint();
// console.log(area);


// const date =new Date();
// console.log(date.getFullYear())


// const map=new Map();

// map.set('name','Shubham')
// map.set('age','23')
// console.log(map.get('name'));





// function waitfor3S(resolve){
//     setTimeout(resolve,3000);
// }

// function setTimeoutPromisified(ms) {
//     return new Promise(waitfor3S);
// }


// function main(){
//     console.log("Main is called");
// }

// setTimeoutPromisified().then(main);

// function random(resolve){
//     setTimeout(resolve,3000);
// }

// let p=new Promise(random);
// console.log(p);

// function callback(){
//     console.log("promise succeded");

// }

// p.then(callback);


