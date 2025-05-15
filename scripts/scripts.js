//console.log will output a message in the developer console
//two slashes starts a single line comment
console.log("it worked"); //single line comments can go beside code

/*
 this is a multi-line comment
 starts with a / and a * and closes with a * and a /
*/

// to declare a variable, use let or const
const ourClassNum = "J207";
let numStudents = 9; //with a number, you don't need quotes

console.log(ourClassNum);

//if you declare a variable with let, you can change its value
numStudents = 21;

console.log(numStudents);

//if you declare a value with const, you can't change its value
//ourClassNum = "C128";
//(trying to change a const variable will give you an error, and stop the code)

console.log(ourClassNum);

//const and let cannot be redeclared (or recreated)
// let numStudents = 25; (this will also give you an error)

/***********************
    javascript datatypes
************************/
//storing a value of true or false is called a boolean
let doorClosed = true;
console.log(doorClosed);

//you can create an empty variable, which will return undefined
let whiteboardContent;
console.log(whiteboardContent); //should give you undefined

//you can use the keyword "null" (which means nothing)
let classKids = null;

//number - can be written without quotes (computer can recognize them)
//string - is text that must be written in quotes

//difference between == and ===
const numLights = 12; //this variable is storing a number
const numChairs = "12"; //this variable is storing a piece of text

console.log(numLights == numChairs); //gives you true
console.log(numLights === numChairs); //gives you false

// two equals == checks if they are the same value
// three equals === checks if they are the same value and same datatype



/**********************************
 a practical example using the form field
***********************************/

//get the field by its id, and check if the user clicked away
document.getElementById("answer").addEventListener("blur", function(){
    //get the value for the form field and put it into a variable
    const userAnswer = this.value;
    //the keyword "this" means the thing you currently have
    //right now, that thing is the field with the id "answer"
    
    //use an if statement to check if the value is right
    const feedbackElement = document.getElementById("feedback");
    if(userAnswer == "document"){
        //add feedback into the feedback element
        feedbackElement.textContent = "You're right!";
    }else{
        feedbackElement.textContent = "You're wrong";
    }
});