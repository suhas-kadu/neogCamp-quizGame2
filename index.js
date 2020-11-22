const readlineSync = require("readline-sync");
const chalk = require("chalk");
let score = 0;

console.log(chalk.bgYellow("Welcome"));
var userName = readlineSync.question("Please enter your name ");

var highestScorer = {
  bestScore: 4
};

var questions = [
  {
    question: "Which team has won the World Cup for most of number times?\nIndia\nAustrailia\nWest Indies\nEngland\nYour answwer: ",
    answwer: "Austrailia"
  },
  {
    question: "Which of the following is the highest rated Indian Web series?\n1992 Scam\nMirzapur\nSacred games\nHostages\nYour answwer: ",
    answwer: "1992 Scam"
  },
  {
    question: "Who was elected as the President of U.S.A. in 2020 elections?\nDonald Trump\nJeo Biden\nBarack Obama\nHilery Quinton\nYour answwer: ",
    answwer: "Jeo Biden"
  },
  {
    question: "Which city in India is known as 'Pink City'?\nMumbai\nJaipur\nJaiselmer\nPune\nYour answwer: ",
    answwer: "Jaipur"
  },
  {
    question: "Which team has reached the final of IPL 2020 for the first time?\nMumbai Indians\nSunrisers Hydrabad\nDelhi Capitals\nRajasthan Royals\nYour answwer: ",
    answwer: "Delhi Capitals"
  },
  {
    question: "Which Mobile company does allow villians to use its phones in movies?\nOne Plus\nApple\nOppo\nRedmi]nYour answwer: ",
    answwer: "Apple"
  },  
];

const playQuiz = (questions) => {
  for(let i = 0; i < questions.length; i++) {
    var currentItem = questions[i];
    var userAnswer = readlineSync.question(chalk.cyan(currentItem.question));
    if(currentItem.answwer.toLowerCase() == userAnswer.toLowerCase()) {
      console.log(chalk.green.bold("\nRight"));
      score++;
    } else {
      console.log(chalk.red.bold("\nWrong"));
      score--;
    }
    console.log(chalk.bgBlue(`Score: ${score}\n`));
  } 
  console.log(chalk.greenBright(`\nYour Score: ${score}`));
  console.log(chalk.greenBright(`Highest Score: ${highestScorer.bestScore}`));


  if(score > highestScorer.bestScore){
    console.log(chalk.bgMagentaBright("\nCongrajulations! You have beaten the High score\nPlease send us screeshot"));
  } else if(score < highestScorer.bestScore) {
    console.log(chalk.bgMagentaBright("\nWell Done! Thankyou"));
  } else {
    console.log(chalk.bgMagentaBright("\nWell Done! you have matched the High score"));
  }


}

playQuiz(questions)