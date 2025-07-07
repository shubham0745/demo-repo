// function sum(a,b){
//     return a+b;
// }

// z=sum(3,4);

// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red('this  is an error message'));
// console.log(chalk.bgGreen("hello"));
 
// cli

// const fs = require("fs");

// function main(filename) {
//     fs.readFile(filename, "utf-8", function (err, data) {
//         let total = 0;
//         let n = data.length;
//         for (let i = 0; i < n; i++) {
//             if (data[i] === " ") {
//                 total++;
//             }
//         }
//         console.log(total + 1); // Number of words (space count + 1)
//     });
// }

// main(process.argv[2]);

const fs = require('fs');
const { Command } = require('commander');
const programm = new Command();


programm.command('count_sentences')
  .description('Count the number of sentences in a file')
  .argument('<file>', 'File to process')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err.message);
      } else {
        const sentences = data.split(/[.!?]\s/).length;
        console.log(`There are ${sentences} sentences in ${file}`);
      }
    });
  });
programm.parse();

