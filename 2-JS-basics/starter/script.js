/**************************************
 * 
 * Variable and types
 * 
 *
var firstName = "John"; // string
console.log(firstName);

var lastName = "Smith"; // string
var age = 28;           // Number

var fullAge = true;     // Boolean
console.log(fullAge);

var job;                // undefined
console.log(job);
job = "teacher";        // string
console.log(job);

// var if = "live"      // illegal (reserved keyword)
var _if = "live";
console.log(_if);
*/

/**************************************
 * 
 *  Variable mutation and type coercion 
 * 
 *
var firstName = "John";
var age = 28;

console.log(firstName + ' ' + age); // type coercion

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); // type coercion

age = "twenty eight";
job = "driver";
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt("What is his last name? ");
console.log(firstName + ' ' + lastName);
*/

/************************************
* 
* Basic operators
* 

var now, ageJohn, ageMark, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now - 2);
console.log(now * 2);
console.log(now / 2);

var isJohnOlder = ageJohn > ageMark;
console.log(isJohnOlder);

console.log(typeof isJohnOlder);
console.log(typeof ageJohn);
console.log(typeof "is John Older?");
var x;
console.log(typeof x);
*/

/**********************************
* 
* Operator precedence
*  
*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple variables
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


// Multiple assignments
var x, y;
x = y = ( 3 + 5) * 4 - 6; 
console.log(x, y);

// More operators
x *= 2;  // x = x * 2
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x);
*/

/**********************************************
 * 
 * Coding Challenge 1
 * 
 * Mark and John are tying to compare their BMI
 * (Mody Mass Index), which is calculated using
 * the formula: BMI = mass (kg) / height (meter)^2
 * 
 * 1. Store Mark's and John's mass and height in 
 * variables
 * 2. Calculate their BMI
 * 3. Create a boolean variable containing
 * information about whether Mark has a higher
 * BMI than John.
 * 4. Print a string t othe console containing 
 * the variable from step 3.
 * 
 *
 
var massJohn, 
    massMark, 
    heightJohn, 
    heightMark,
    bmiJohn,
    bmiMark,
    isBMIMarkHigher;

massJohn = 60;
massMark = 55;
heightJohn = 1.63;
heightMark = 1.61;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);
isBMIMarkHigher = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log("Is Mark's BMI higher than John's? " + isBMIMarkHigher);

var firstName = "John";
var age = 22;

/**********************************
 * 
 * Ternary operator

age >= 18 ? console.log(firstName + " drinks beer.")
    : console.log(firstName + " drinks juice.");

/**********************************
 * 
 * Switch statement
 * * *
 var job = "nothing";
 
 switch(job) {
    
    case "teacher":
        console.log(firstName + " is a teacher.");
        break;
    case "instructor":
        console.log(firstName + " is a instructor.");
        break;
    
    default:
        console.log(firstName + " is a man.");
        break;
 }
 
 /*****************************************
  * 
  * Truthy and Falsy
  * 
  *
  * **********************************
  
//  falsy values: undefined, null, 0, '', NaN
//  truthy values: NOT falsy values

var height;

height = 0;

if (height || height === 0) {
    console.log("Variable is defined");
}else {
    console.log("Variable has NOT been defined");
}

if (height == '23') {
    console.log("Type coercion");
}
*/
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


var johnsTeamScored = [89, 120, 103];
var mikesTeamScored = [116, 94, 123];
var marysTeamScored = [97, 134, 105];

var getAverageScore = function(scores) {
    return scores.reduce(function(combine, init, i, arr) {
        return combine + init / arr.length;
    }, 0);
};

var avgScores = {
    "john": getAverageScore(johnsTeamScored),
    "mike": getAverageScore(mikesTeamScored),
    "mary": getAverageScore(marysTeamScored)
};

var highestAverageScore = Math.max(...Object.values(avgScores));

Object.keys(avgScores).filter(function(name, i, arr) {
    var avgScore = avgScores[name];
   if (avgScore === highestAverageScore) {
       console.log(name + "'s team won and the average score is " + avgScore);
   } 
});

*/