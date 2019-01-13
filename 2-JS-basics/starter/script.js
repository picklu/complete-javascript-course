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
*/
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
*/

