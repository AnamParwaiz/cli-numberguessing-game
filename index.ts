import inquirer from "inquirer"

// 1) computer will generate a random number

// 2) user input for guessimg number

// 3) compare user input with computer generated number and shoe result

const randomnumber = Math.floor(Math.random ()*7 +1);  

const answer= await inquirer.prompt([
    {
        name:"userguessnumber",
        type:"number",
        message:"please guess a number between 1-7",
    },
])

console.log(answer);

   if(answer.userguessnumber===randomnumber){
   console.log("Congratulations ! you guessed a right number");
}
   else {console.log(" Oops ! you guessed a wrong number");
}
