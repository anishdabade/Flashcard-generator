
var basic = require("./basic.json");
var inquirer = require("inquirer")

var count=0;
var correctAnswer=0;
var wrongAnswer=0;

function question() {


   if (count < basic.length) {
        inquirer.prompt([
            {
                type:"input",
                name:"question",
                message:(basic[count].front)
            }
        ]).then(function(response) {    
           console.log("Answer:");
            if(response.question === basic[count].back) {
                console.log("Correct!");
                count++;
                correctAnswer++;
                
           }
            else{
                console.log("Wrong!");
                wrongAnswer++;
                count++;
            }
            
           question();
        });
            
   }
    else{  
       console.log("\nCorrect Answers: " + correctAnswer);
       console.log("Wrong Answers: " + wrongAnswer);  
    }
  
}

question();

	


