// Variables/* */

// Structures/* */

// let name = "Usisipho"
// const name = "Usisipho"
// var name = "Usisipho"

// Numbers/* */

// let number1 = 10.5
// let -= 10

// Booleans/* */

// let value = true (false)

// Undefined/* */

// let name

// null/* */
// let value = null

/*let name = "Usi"
name = 5
console.log(typeof name);*/

// let name = true
// let num = 5
// console.log("My name is ${name}");
// console.log("My name is " + name +num);

// Array/* */

// let my_Array = ['anything', 2, true, 'string'] // (if it can't find it (...) it means its undefined)
// console.log(myArray[0]); //indexing

// camelcase --> myArray(always used in js)
// Pascalcase --> MyArray
// kebab-case --> my-array(only use in vue)

// object literal - declare (make) an object
// let table = {
    // material: "wood",
    // no_of_legs: 4,
    // occupied: true
// }
// bracket notation
// console.log(table["material"]);

// dot notation
// console.log(table.material);

//destructuring
// let {material, occupied} = table //wood
// console.log(material);

//functions
// () --> parentheses
// [] --> brackets
// function greeting(a,b){
    // a&b are parameters
    // console.log("This is a greeting" + (a+b))
// }
// 3&4 are arguments
// greeting(3,4)

// let num1 = 5
// num1++ post increment
// ++num1 pre increment
// -- num1 pre decrement
// num1-- post decrement
// console.log(num1--);
// console.log(6=='7');

// shows us the length of the string
// let length = myString.length
// console.log(myString.length);

// console.log(myString.toUpperCase());
// let split = myString.split('')
// console.log(split);

// let myString = 'Somethings'
// if(myString == "Something"){
//     console.log('The string is equal to Something');   
// } else if(typeof myString == 'string'){
//     console.log('The string is a string but it is not equal to something');
// } else{
//     console.log('The string is not equal to something');
// }

// let myString = 'Somethings'

// let age = 15
// if(age>=18){
//     console.log("You qualify for your Driver's License");   
// } else if(age>=16 && age<18){
//     console.log("You qualify for your Learner's not Driver's License");
// } else{
//     console.log("you are too young");
// }

// even numbers
// let num = 5
// if(num % 2 != 0){
//     console.log("The number is even");
// } else{
//     console.log("The number is odd");
// }

// Matthew wrote 3 exams and recieved, Mathematics: 56%,
// Physics:71%, English 55%,
// Calculate the average and check whether or not if he got an average of
// grade A(100%>80%), grade B(79%>70%), grade C(69%>60%), grade D(59%>50%)
// or if he does not deserve a grade()

// Matthew's exam scores
// const scores = {
//     Mathematics: 56,
//     Physics: 71,
//     English: 55
// };

// // Calculate the average score
// const totalScore = scores.Mathematics + scores.Physics + scores.English;
// const average = totalScore / Object.keys(scores).length;

// // Determine the grade based on the average
// if (average >= 80 && average <= 100) {
//     console.log("Grade A");
// } else if (average >= 70 && average < 80) {
//     console.log("Grade B");
// } else if (average >= 60 && average < 70) {
//     console.log("Grade C");
// } else if (average >= 50 && average < 60) {
//     console.log("Grade D");
// } else if (average >= 0 && average < 50) {
//     console.log("You do not deserve a grade [F]");
// } else {
//     console.log("Invalid score");
// }
// 1 = It is Sunny
// 2 = It is Cloudy
// 3 = It is Rainy

// let value = 1
// switch (value) {
//     case 1:
//         console.log('It is Sunny');
//         break;
//     case 2:
//         console.log('It is Cloudy');
//         break;
//     case 3:
//         console.log('It is Rainy');
//         break;
//     default:
//         console.log("Couldn't read value");
//         break;
// }

// }
// let num = 8
// switch (true) {
//     case num %2 == 0:
//         console.log('Number is even');
//         break;
//     default:
//         console.log('Number is odd');
//         break;
// }

// let num = 11
// console.log(num>10 ? 'This is true':'This is not true');

// let num = 7
// console.log(num%2==0 ? 'Even':'Odd');

// for loop

// for (let x = 1; x<10; x++){
//     console.log(x);   
// }

// while loop
// let w = 1
// while(w<5){
//     console.log('Usisipho');
//     w++;
// }

// do-while loop
// do {
//     console.log('Usisipho');
//     w++;
// } while(w<=5)

// let names = ['Usisipho', 'Siyavuya', 'Ilona', 'Sivuyile'];

// for (let x = 0; x < names.length; x++) {
//     console.log(names[x]);   
// }

// for (let name in names){
//     console.log(name);   
// }

// for (let index in names) {
//     console.log(names[index]);   
// }

// 1. Given an array of numbers, use .forEach() to loop and print all the numbers individually in the array.
//    Const numbers = [1, 2, 3, 4];
// 2. Create an array with called coolCars and give it the following value: ['BMW','Buggati','Ferrari','McLaren', 'Mercedes']
//    Now to manipulate the arrays. ;)
// 3. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
// 4. Use a for loop to loop through the array, and console.log every value inside of the array.
// 5. Reverse the array and console.log the reversed array.
// 6. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
// 7. Now write the code to use the variable you made in no.6 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini'] 2:02
// 8. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check.
// 9. Make use of a switch statement and create a possible solution for no.8
// 10. USE while or a do while loop to print out the array of Question2(coolCars). (Don't crash your pc lol).

// recursive function