
////////////////////////////////////////////////////////////////////////////////
// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'Teacher';
// console.log(job);
////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////
// var firstName = 'John';
// var age = 28;
//
// console.log(firstName + ' ' + age);
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried);
//
// // Variable mutation
// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried);
//
// var lastName = prompt('what is his last Name?')
// console.log(firstName + ' ' + lastName);
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// //         Basic operators "+ - /"
//
// var year, yearJohn, yearMark;
// year = 2020;
// ageJohn = 28;
// ageMark = 30;
//
// //          Math operators
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;
// console.log(yearJohn);
// console.log(year + 2);
//
// //         Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
//
// //         Typeof operators
// console.log(typeof johnOlder);
// console.log(typeof year);
// console.log(typeof 'Mark is older');
// var x;
// console.log(typeof x);
////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////////////////
// var now = 2020;
// var yearJohn = 1989;
// var fullAge = 18;
//
//
// //         Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);
//
// //         Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 37;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// //         Multiple Assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);
//
//
// //         More operators
// // x = x * 2;
// x *= 2;
// console.log(x);
//
// // ***********  NOTE ----- (x *= 2) IS THE SAME AS (x = x * 2)  *************
//
// x -= 2;
// console.log(x);
//
// //         Incrament
// x = x + 1;
// x += 1;
// x++;
// console.log(x);
////////////////////////////////////////////////////////////////////////////////






/*******************************************************************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula: BMI = mass / height^2 =        mass / (height * height).
(mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a
higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's? true").
GOOD LUCK 😀
*******************************************************************************/




////////////////////////////////////////////////////////////////////////////////
// var massMark = 76;
// var massJohn = 85;
//
// var heightMark = 1.80;
// var heightJohn = 1.73;
//
// var bmiMark = massMark / (heightMark * heightMark);
// var bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiMark);
// console.log(bmiJohn);
//
// var higherBmi = bmiMark > bmiJohn;
// // is Mark's BMI higher than John's
// console.log(higherBmi);
//
// console.log("is Mark's BMI higher than John's?" + ' ' + higherBmi);
////////////////////////////////////////////////////////////////////////////////








////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// //            IF / ELSE STATEMENTS
//
// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married');
// } else {
//   console.log(firstName + ' will hopefully marry soon ');
// }
//
//
//
// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married');
// } else {
//   console.log(firstName + ' will hopefully marry soon ');
// }
//
////////////////////////////////////////////////////////////////////////////////
//
//
// //          COPIED CODING CHALLENGE 1 AND APPLIED TO IF/ELSE
//
// var massMark = 76;
// var massJohn = 85;
//
// var heightMark = 1.80;
// var heightJohn = 1.73;
//
// var bmiMark = massMark / (heightMark * heightMark);
// var bmiJohn = massJohn / (heightJohn * heightJohn);
// var higherBmi = bmiMark > bmiJohn;
//
// if (bmiMark > bmiJohn) {
//   console.log("Mark's BMI is higher than John's");
// } else {
//   console.log("John's BMI is higher than Mark's");
// }
//
//
// // // is Mark's BMI higher than John's
// // console.log(higherBmi);
// //
// // console.log("is Mark's BMI higher than John's?" + ' ' + higherBmi);
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//            BOOLEAN LOGIC

// var firstName = 'John';
// var age = 16;
//
// if (age < 13) {
//   console.log(firstName + ' is a boy ');
// } else if (age>=13 && age<20) { //Between 13 and 20 ---- age >= 13 AND age < 20
//   console.log(firstName + ' is a teenager ');
// } else if (age>=20 && age<30) { //Between 20 and 30 ---- age > 20 AND age < 30
//   console.log(firstName + ' is a young man ');
// } else {
//   console.log(firstName + ' is a man ');
// }
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// //             TERNARY OPERATORS    AND    SWITCH STATEMENTS
// //    >  (IF AND ELSE STATEMENT IN ONEL LINE)
//
// var firstName = 'John';
// var age = 16;
//
// age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');
//
// var drink = age >= 18 ? 'John drinks beer' : 'John drinks juice';
// console.log(drink);
//
//
//
// //          SAME AS ABOVE
// if (age >=18) {
//   var drink = 'beer';
//   console.log( 'John drinks beer' );
// } else {
//   var drink = 'juice';
//   console.log( 'John drinks juice' );
// }
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////

//        MY EXAMPLE
// WHAT DO WE WANT TO DO?
// if John is less than 21 (he drinks milk)
// if John is more or equal than 21 and less than 50 (he drinks wine)
// if John is more or equal than 50 (he drinks whiskey)


// var name = 'John';
// var age = 16;
//
// if (age < 21){
//   console.log(name + ' drinks milk');
// } else if (age>=21 && age<50){
//   console.log(name + ' drinks wine');
// } else {
//   console.log(name + ' drinks whishey');
// }
//
//
// // OTHER
// var name = 'John';
// var age = 60;
//
// if (age < 21){
//   var dr = 'milk';
//   console.log(name + ' drinks ' + dr);
// } else if (age>=21 && age<50){
//   var dr = 'wine';
//   console.log(name + ' drinks ' + dr);
// } else {
//   var dr = 'whiskey';
//   console.log(name + ' drinks ' + dr);
// }
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// //                SWITCH STATEMENT
//
//
//
// var firstName = 'John';
// var job = 'instructor';
//
//
// switch (job) {
//
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' is a teacher ');
//     break;
//
//   case 'driver':
//     console.log(firstName + ' is a driver ');
//     break;
//
//   case 'designer':
//     console.log(firstName + ' is a designer ');
//     break;
//
//   default:
//     console.log(firstName + ' does something elde ');
// }
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
// var firstName = 'John';
// var age = 16;
//
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy ');
//     break;
//
//   case age>=13 && age<20:
//     console.log(firstName + ' is a teenager ');
//     break;
//
//   case age>=20 && age<30:
//     console.log(firstName + ' is a young man ');
//     break;
//
//   default:
//     console.log(firstName + ' is a man ');
// }
////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//        TRUTHY AND FALSY VALUES

// FALTY VALUES: UNDEFINED, NULL, 0, '', NaN
// TRUTHY VALUES: NOT FALSY VALUES

//  !!    0 CAN BE DEFINED IF USED     || height === 0

// var height;
// height = 0;
//
// if (height || height === 0){
//   console.log('Variable is defined');
// } else {
//   console.log('Variable is undefined');
// }
////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// EQUALITY OPERATORS

// === STRICT QUALITY COMPARISONS
// ==  TYPE COERCION (BOTH VARIABLES DO NOT NEED TO MATCH)


// var height = 23;
//
// if (height == '23') {
//   console.log('The == operator does type coercion!');
// }
////////////////////////////////////////////////////////////////////////////////






/*******************************************************************************
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
*******************************************************************************/



////////////////////////////////////////////////////////////////////////////////
// VAR 1 WITH 2 PEOPLE
// var averageJohnScore = (89 + 120 + 103) / 3;
// var averageMikeScore = (116 + 94 + 123) / 3;
//
// console.log(averageJohnScore, averageMikeScore);
//
// if (averageJohnScore > averageMikeScore){
//   console.log('John is a winner ' + averageJohnScore);
// } else if (averageJohnScore === averageMikeScore) {
//   console.log('draw');
// } else {
//   console.log('Mike is a winner ' + averageMikeScore);
// }
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// // VAR 2 WITH 3 PEOPLE 89 + 120 + 103
// var johnScore = (89 + 120 + 103) / 3;
// var mikeScore = (116 + 94 + 123) / 3;
// var maryScore = (97 + 134 + 105) / 3;
//
//
// if (johnScore === mikeScore && mikeScore === maryScore){
//   console.log('tripple draw ' + johnScore);
//
// } else if (johnScore === mikeScore && johnScore > maryScore){
//   console.log('John and Mike score draw ' + johnScore);
// } else if (johnScore === maryScore && johnScore > mikeScore){
//   console.log('John and Mary score draw ' + johnScore);
// } else if (mikeScore === maryScore && mikeScore > johnScore){
//   console.log('Mike and Mary score draw ' + mikeScore);
//
// } else if (johnScore>mikeScore && johnScore>maryScore){
//   console.log('John is a winner ' + johnScore);
// } else if (mikeScore>johnScore && mikeScore>maryScore){
//   console.log('Mike is a winner ' + mikeScore);
// } else if (maryScore>johnScore && maryScore>mikeScore){
//   console.log('Mary is a winner ' + maryScore);
// }
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//
// var day = 'monday'
//
// if (day === 'monday'){
//   console.log("Let's start the week");
// } else {
//   console.log('I hate monday');
// }
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//              FUNCTIONS
//  {RETURN STOPS THE FUNCTION}. ANYTHING AFTER RETURN IS NOT BEING DONE.

// FUNCTION - NAME
// calculateAge - name of function
// (birthYear) - argument (var)


////////////////////////////////////////////////////////////////////////////////
//
// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }
//
//
// var johnAge = calculateAge(1990);
// var mikeAge = calculateAge(1948);
// var anaAge = calculateAge(1969);
//
// console.log(johnAge, mikeAge, anaAge);
//
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }
//
// function yearsUntilRetire(birthYear, firstName) {
//   var age = calculateAge(birthYear);
//   var retirement = 65 - age;
//
//   if (retirement>0){
//     console.log(firstName + ' retires in ' + retirement + ' years. ');
//   }else {
//     console.log(firstName + ' is already retired');
//   }
// }
//   yearsUntilRetire(1990, 'John');
//   yearsUntilRetire(1948, 'Mike');
//   yearsUntilRetire(1969, 'Ana');
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// var backpack = 5;
//
// function packMyBackpack(item){
//   backpack = backpack - 1
//   if(backpack<=0){
//     console.log('Backack is full');
//
//   }
// }
//
// packMyBackpack('pen')
// packMyBackpack('pen')
// packMyBackpack('pen')
// packMyBackpack('pen')
// packMyBackpack('pen')
// packMyBackpack('blanket')
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
//       EXTRA EXCERCIZES


// var y = 0
//
// function rudy(){
//   y = y+1;
//   if( y>3 ){
//     console.log(y);
//   }
// }
//
// rudy(); 1
// rudy(); 2
// rudy(); 3
// rudy(); 4
// rudy(); 5
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//
// var wallet = 100;
//
// function shopping(item, price){
//   if(price<=wallet){
//     wallet = wallet - price;
//     console.log('you purchuased ' + item + ' and you are left with ' + wallet);
//   } else {
//     console.log('you do not have enough money');
//   }
// }
//
//
// shopping('pen', 2.99);
// shopping('backpack', 65.99);
// shopping('car', 1000);
//
////////////////////////////////////////////////////////////////////////////////
//
//
// function greeting(name){
//   console.log('Hi ' + name + ' nice to meet you!');
// }
//
// greeting('Anna');
// greeting('John');
//
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//             FUNCTION EXPRESSIONS  ANF  FUNCTION STATEMENTS

// THIS ----->
// function whatDoYouDo(job, firstName){} <----- SAME AS BELLOW



// var whatDoYouDo = function(job, firstName){
//   switch(job){
//     case 'teacher':
//       return firstName + ' is a teacher';
//     case 'driver':
//       return firstName + ' is a driver';
//     case 'designer':
//       return firstName + ' is a designer';
//     default:
//       return firstName + ' does something else';
//
//   }
// }
//
//
// console.log(whatDoYouDo('teacher', 'Jane'));
// console.log(whatDoYouDo('driver', 'John'));
// console.log(whatDoYouDo('baker', 'Mark'));
// console.log(whatDoYouDo('designer', 'Bob'));
// console.log(whatDoYouDo('retired', 'Steph'));

////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//                     ARRAYS
//                     POSITION IN THE ARRAY IS NAMED INDEX
//                     0, 1, 2...
//                     .push('') ADDS TO THE END OF ARRAY
//                     .unshift('') ADDS TO THE BEGINNING OF THE ARRAY
//                     .pop('') DELETES LAST THING
//                     .shift('') DELETES FIRST THING
//                     .indexOf TELLS THE POSITION OF THE ARRAY (INDEX)

// // CREATE NEW ARRAY
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[0]);
// console.log(names.length);
//
//
// // MYTATE ARRAY DATA
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);
//
//
// //DIFFERENT DATA TYPES
// var john = ['John', 'Smith', 1990, 'teacher', false];
//
// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.pop();
// john.shift();
// console.log(john);
//
// console.log(john.indexOf(1990));
//
// var isDesigner = john.indexOf('designer') === -1? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);
////////////////////////////////////////////////////////////////////////////////





/*******************************************************************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*******************************************************************************/

// $48   20% less than $50
// $124  15% when between $50 and $200
// $268  10% more than $200.



////////////////////////////////////////////////////////////////////////////////
//
// var tips = []
// var finalBill = []
//
// function calculateTip(bill){
//   if(bill<50){
//     var tip = (bill*0.2);
//     var fBill = (bill+tip);
//     tips.push(tip);
//     finalBill.push(fBill);
//
//   } else if (bill>50 && bill<200) {
//     var tip = (bill*0.15);
//     var fBill = (bill+tip);
//     finalBill.push(fBill);
//     tips.push(tip);
//
//   } else if (bill>200) {
//     var tip = (bill*0.1);
//     var fBill = (bill+tip);
//     tips.push(tip);
//     finalBill.push(fBill);
//   }
// }
//
// calculateTip(48)
// calculateTip(124)
// calculateTip(268)
//
// console.log(tips);
// console.log(finalBill);
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
//
// //             SAME AS ABOVE:
//
//
// function tipCalculator(bill) {
//   var percentage;
//   if (bill<50) {
//     percentage = 0.2;
//   } else if (bill>=50 && bill<200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }
//
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];
//
// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];
//
// console.log(tips, finalValues);
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
//
// var fruits = []
// fruits.push('apple');
// fruits.unshift('orange');
// fruits.push('kiwi');
//
// console.log(fruits[0]);
//
//
//
// console.log(fruits.indexOf('apple'));
// console.log(fruits);
//
//
// function food(fru){
//   if (fruits.indexOf(fru) === -1){
//     console.log(fru + ' is not in the array');
//   } else {
//     console.log(fru + ' is in the array');
//   }
// }
//
// food('avocado');
//
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
//
// var washing = [];
//
// washing.push('socks');
// washing.push('pants');
// washing.push('towel');
// washing.push('shorts');
// washing.shift();
// washing.push('socks');
//
// washing[3] = 'dress';
// console.log(washing);
// console.log(washing.length);
//
//
//
// function rudy(array){
//   if(washing.length<2){
//     washing.pop();
//   } else if (washing.length === 2){
//     washing.unshift('tshirt');
//   } else {
//     console.log('I am finished');
//   }
// }
//
// rudy();
// rudy();
// rudy();
// rudy();
// rudy();
// rudy();
// rudy();
// rudy();
// rudy();
//
////////////////////////////////////////////////////////////////////////////////






//             EXTRA

////////////////////////////////////////////////////////////////////////////////
// var salad = []
//
//
// var fridge = ['cucumber', 'lettuce', 'tomatoes', 'lard', 'olives'];
// var cupBoard = ['olive oil', 'salt'];
// var room = ['forks'];
// var underSink = ['plates'];
//
//
// function makeSalad() {
//   fridge[0] = 'sliced cucumber';
//   salad.push(fridge[0]);
//   fridge.shift()
//
//   fridge[0] = 'sliced lettuce';
//   salad.push(fridge[0]);
//   fridge.shift()
//
//   fridge[0] = 'sliced tomatoes';
//   salad.push(fridge[0]);
//   fridge.shift();
//
//   salad.push(fridge[1]);
//   salad.push(cupBoard[0]);
//   salad.push(cupBoard[1]);
// }
//
//
//
// var hungry = true
//
// function checkIfHungry(name) {
//   if(hungry){
//     makeSalad()
//   } else {
//     console.log(name + ' is not hungry');
//   }
// }
//
// checkIfHungry('Peter')
//
//
// console.log(fridge);
// console.log(salad);
//
////////////////////////////////////////////////////////////////////////////////










////////////////////////////////////////////////////////////////////////////////
// var fridge = ['cucumber', 'apple', 'banana']
// var bowl = []
//
//
// function chop(item){
//   var slicedItem = 'sliced ' + item;
//   fridge.shift();
//   bowl.push(slicedItem);
// }
//
// chop(fridge[0]);
// chop(fridge[0]);
// chop(fridge[0]);
//
// // TAKES FROM FRIDGE, SLICES IT, PUT IN THE BOWL, DELETES FROM FRIDGE
//
// console.log(fridge);
// console.log(bowl);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//
// var park = [];
//
//
// function goToPark (name) {
//   park.push(name);
// }
//
// function outOfPark (name) {
//   park.shift();
// }
//
// goToPark('Peter');
// goToPark('John');
// goToPark('Roger');
// goToPark('Bob');
//
// outOfPark();
// outOfPark();
// outOfPark();
// outOfPark();
//
// console.log(park);
//
////////////////////////////////////////////////////////////////////////////////






// EVERY NUMBER TIMES 2
// PUSH AT THE END OF Array

////////////////////////////////////////////////////////////////////////////////
//
// var numbers = [1, 5, 7, 10];
// var newNumbers = [];
//
// function multiply(number) {
//   var newN = 2 * number;
//   numbers.pop();
//   newNumbers.push(newN);
// }
//
// multiply(numbers[3]);
// multiply(numbers[2]);
// multiply(numbers[1]);
// multiply(numbers[0]);
//
// console.log(numbers);
// console.log(newNumbers);
//
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//                OBJECTS    AND    PROPERTIES

//                OBJECT = HASH

//    KEY IS A LABEL : VALUE WHAT IS THE ACTUAL VALUE
//         key       :      value




////////////////////////////////////////////////////////////////////////////////
// // ARRAY     INDEX    :    VALUE
// //             0             12
// //
// //
// // HASH        KEY    :    VALUE
// //          'number'  :      12
// //
// // ARRAY
// var a = [12, 18]
//
//
// // HASH
// var b = {number: 12,
//          number2: 18
// }
//
// console.log( a[1] )
// console.log( b['number2'] )
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// var monica = {
//   //key:value
//   name: 'Monica',
//   height: 176,
//   weight: 61,
//   hair: 'Long dark hair',
//   clothes: 'dress'
// }
//
// console.log(monica['name']);
// console.log(monica['height']);
// console.log(monica['clothes']);
//
// monica['weight'] = monica['weight'] - 2;
// monica['hair'] = 'Long light hair';
//
// monica['pet'] = 'dog';
//
// monica['clothes'] = 'pants';
// console.log(monica);
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };
//
// console.log(john.firstName)
// console.log(john['lastName'])
// var x = 'birthYear'
// console.log(john[x])
//
// john.job = 'driver'
// john['isMarried'] = true
//
// console.log(john)
//
// console.log(john.family[2])
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//                OBJECTS    AND    METHODS
//
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calculateAge: function(){
//     this.age = 2020-this.birthYear
//   }
// };
// john.calculateAge()
// console.log(john);
//
//
//
// // THIS. <--- INSIDE OF THIS OPBEJST ---> POINTS TO ITSELF
//
//
// // console.log(john.calculateAge());
// //
// // john.age = john.calculateAge()
//
////////////////////////////////////////////////////////////////////////////////




/*******************************************************************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*******************************************************************************/

////////////////////////////////////////////////////////////////////////////////
// var mark = {
//   firstName: 'Mark',
//   mass: 70,
//   height: 1.91,
//   calculateBmi: function(){
//     return this.bmi = this.mass / (this.height * this.height)
//   }
// }
// mark.calculateBmi()
// console.log(mark);
//
//
// var john = {
//   firstName: 'John',
//   mass: 94,
//   height: 1.78,
//   calculateBmi: function(){
//     return this.bmi = this.mass / (this.height * this.height)
//   }
// }
// john.calculateBmi()
// console.log(john);
//
// if(mark.bmi > john.bmi) {
//   console.log(mark.firstName + ' ' + mark.bmi);
// } else {
//   console.log(john.firstName + ' ' + john.bmi);
// }
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//          LOOPS    AND    ITERATION
//
//          FOR LOOPS DOING QUICKLY REPETETIVE TASKS
//
//          FOR LOOPS
//
//
//          FOR = WHILE


////////////////////////////////////////////////////////////////////////////////

//               0         1          2        POSITIONS
// var fridge = ['apple', 'banana', 'avocado']
//
// for(var position in fridge) {
//   console.log('I sliced ' + fridge[position])
// }
////////////////////////////////////////////////////////////////////////////////
//
// var counter = 0
// var myNumber = 5
//
// while(counter < myNumber){
//   console.log('The counter is ' + counter);
//   counter = counter + 1
// }
//
////////////////////////////////////////////////////////////////////////////////

// !==   NOT EQUAL
// ===   EQUAL
// ==    EQUAL WITHOUT CHECHING TYPE


// var numbers = [155, 780, 999]

// for(var position in numbers){
//   console.log(numbers[position] + 20);
// }
//
//
//
// for(var x in numbers){
//   console.log(numbers[x] / 2);
// }


//
//
// for(var y in numbers){
//   numbers.push(numbers[y])
//   numbers.push(numbers[y])
//   console.log(numbers);
// }
////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////
// var fridge = ['strawberies', 'banana', 'kiwi', 'apple', 'banana'];
//
//
// for(var fruit of fridge){
//   if(fruit === 'banana' || fruit === 'apple') {
//     fruit = 'peeled ' + fruit
//   } else {
//     fruit = 'sliced ' + fruit
//   }
//   console.log(fruit);
// }
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// function checkHigher (numberOne, numberTwo){
//   if(numberOne > numberTwo){
//     console.log(numberOne);
//   } else {
//     console.log(numberTwo);
//   }
// }
//
// checkHigher(10, 20);
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//
// for(var num of numbers){
//   if(num % 2 === 0){
//     console.log('it is even ' + num);
//   } else {
//     console.log('it is odd ' + num);
//   }
// }
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//                LOOPS LECTURE

//                ++ adds additional 1     i++ = i+1

// for(var i = 0; i < 10; i++){
//   console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////

//      i = 0, 0<10 true, log i to console. i++   (same as i+1)
//      i = 1, 1<10 true, log i to console. i++
//      i = 2, 2<10 true, log i to console. i++
//      ......
//      i = 10, 10<10 FALSE, exit the loop
//      i += 2     ===     i = i+2

// for(var i = 0; i < 10; i += 2){
//   console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////

// var john = ['John', 'Smith', 1992, 'designer', false];
//
// for(var i=0; i<john.length; i++) {
//   console.log(john[i]);
// }

////////////////////////////////////////////////////////////////////////////////
//          FOR      IS THE SAME AS    WHILE
////////////////////////////////////////////////////////////////////////////////

// var john = ['John', 'Smith', 1992, 'designer', false];
//
// var i = 0
// while(i < john.length){
//   console.log(john[i]);
//   i++
// }

////////////////////////////////////////////////////////////////////////////////

//          CONTINUE AND BREAK STATEMENTS

////////////////////////////////////////////////////////////////////////////////

// var john = ['John', 'Smith', 1992, 'designer', false];

// for(var i=0; i<john.length; i++) {
//   if (typeof john[i] !== 'string') {
//     continue;
//   }
// console.log(john[i]);
// }
//
//
//
// for(var i=0; i<john.length; i++) {
//   if (typeof john[i] !== 'string') {
//     break;
//   }
//   console.log(john[i]);
// }
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//
// //            LOOPING BACKWARDS
//
// var john = ['John', 'Smith', 1992, 'designer', false];
//
// for(var i=john.length -1; i>=0; i--){
//   console.log(john[i]);
// }
//
////////////////////////////////////////////////////////////////////////////////






/*******************************************************************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*******************************************************************************/

/////            JOHN

// $124, $48, $268, $180 and $42.
// 20% less than $50,
// 15%  between $50 and $200,
// 10%  more than $200.

var johnBill = [124, 48, 268, 180, 42]
var johnTip = []
var johnFull = []

function tipCalJ(johnBill){
    if(johnBill<50){
      var tip = (johnBill * 0.2);
      johnTip.push(tip)
      johnFull.push(tip + johnBill)
    } else if (johnBill>50 && johnBill<200){
      var tip = (johnBill * 0.15);
      johnTip.push(tip)
      johnFull.push(tip + johnBill)
    } else {
      var tip = (johnBill * 0.10);
      johnTip.push(tip)
      johnFull.push(tip + johnBill)
    }
}

for(var tip of johnBill){
  tipCalJ(tip)
}




console.log(johnTip);
console.log(johnFull);




/////            MARK

// 20% less than $100,
// 10% between $100 and $300
// 25%  more than $300


var markBill = [77, 375, 110, 45]
var markTip = []
var markFull = []

function tipCalM(markBill){
    if(markBill<100){
      var tip = (markBill * 0.2);
      markTip.push(tip)
      markFull.push(tip + markBill)
    } else if (markBill>100 && markBill<300){
      var tip = (markBill * 0.10);
      markTip.push(tip)
      markFull.push(tip + markBill)
    } else {
      var tip = (markBill * 0.25);
      markTip.push(tip)
      markFull.push(tip + markBill)
    }
}

for(var tip of markBill){
  tipCalM(tip)
}

console.log(markTip);
console.log(markFull);




/////            AVERAGE TIPS OF JOHN AND MARK

function tipsAverage(tipsArray){
  var totalTip = 0
  for(var tip of tipsArray){
    totalTip = totalTip + tip
  }
  return (totalTip / tipsArray.length)
}

tipsAverage(johnTip)
tipsAverage(markTip)


if(tipsAverage(johnTip)>tipsAverage(markTip)){
  console.log('John tips more with average ' + tipsAverage(johnTip))
  } else {
    console.log('Mark tips more with average ' + tipsAverage(markTip))
  }


//          ALL FUNCTIONS NEEDS TO HAVE UNIQUE NAME  !!!!!!!

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
