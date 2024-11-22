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

// METHOD ONE INSIDE AN OBJECT
// let person = {
//     name: 'Usisipho',
//     surname: 'Mxinwa',
//     hairType: 'Bald',
//     fullname: function(){
//         return this.name +' '+ this.surname;
        
// }}

// console.log(person['name']); DOT NOTATION
// console.log(person.hairType); BRACKET NOTATION

// let {surname} = person
// console.log(surname);    DESTRUCTURING

// person.favColour = 'Purple' // ADDING A NEW PROPERTY

// console.log(person.fullname());

// METHOD TWO INSIDE AN OBJECT
// let person = {
//     name: 'Usisipho',
//     surname: 'Mxinwa',
//     hairType: 'Bald',
//     get fullname(){
//         return this.name +' '+ this.surname  
// }}

// console.log(person['name']); DOT NOTATION
// console.log(person.hairType); BRACKET NOTATION

// let {surname} = person
// console.log(surname);    DESTRUCTURING

// person.favColour = 'Purple' // ADDING A NEW PROPERTY

// console.log(person.fullname);

// METHOD THREE INSIDE AN OBJECT OF MY OWN
// let teams = {
//     team1: 'Manchester United',
//     team2: 'Barcelona',
//     team3: 'Bayern Munich',
//     team4: 'Juventus',
//     team5: 'Liverpool',
//     team6: 'Chelsea',
//     get teamname() {
//   return `${this.team1} ${this.team2} ${this.team3} ${this.team6}`;
// }
// }

// console.log(teams.teamname);

// function createPerson(name,surname,hairType){
//     return{
//     name: name,
//     surname: surname,
//     hairType: hairType,
// }}

// let person1 = createPerson('Usisipho','Mxinwa','Bald')

// class CreatePerson { // Pascal case [CREATING AN OBJECT USING CONSTRUCTOR FUNCTION]
//     constructor(name, surname, hairType) {
//         this.name = name;
//         this.surname = surname;
//         this.hairType = hairType;
// }
// }

// CreatePerson.prototype.fullname = function(){
//     console.log('Hi' + this.name);
// }

// let input = prompt('What is your name?')
// console.log(input); CTRL + SHIFT + I

// function CreatePerson(name,surname,hairType){ // Pascal case [CREATING AN OBJECT USING CONSTRUCTOR FUNCTION]
//         this.name = name;
//         this.surname = surname;
//         this.hairType = hairType;
// }

// let person1 = new CreatePerson('Usisipho','Mxinwa','Bald')
// let person2 = new CreatePerson('Matthew','Brown','Curly')

// let people = [person1,person2]
// console.log(people);

// for (let object of people) {
//     if (object.hairType == 'Curly') {
//     console.log(object.name);    
// }}

// let array = [1, 2, 33, 45, 6, 44]

// function times(a,b){
//     if (typeof a != 'number' || typeof b != 'number') throw new Error('Hol\' up a or b is not a number')
//     return a * b
// }
// try {
//     console.log(times(2,8));
//     console.log('hi there times!');
    
// } catch (e) {
//     console.log(e);
//     console.log('this is after the error');
// } finally{
//     console.log('Yay! I have run & I\'m out of breath');
// }

// const add = function(a, b) { // THIS IS A FUNCTION EXPRESSION
//     return a + b;
// };

// console.log(add(5, 3)); // Output: 8

// const groupMembers = [
//     { name: "Usisipho", favColor: "Black", Hobby: "Coding" },
//     { name: "Lithemba", favColor: "Black", Hobby: "Gaming" },
//     { name: "Sinoyolo", favColor: "Blue", Hobby: "Making Beats" },
//     { name: "Mulalo", favColor: "Blue", Hobby: "Football" },
//     { name: "Jean", favColor: "Blue", Hobby: "Slowly Walking My Tortoise" },
//     { name: "Luke", favColor: "Black", Hobby: "Fishing" },
// ]

// console.log(groupMembers[1]);

// function waiting(callback){
//     console.log('You are waiting for your meal 1');
//     setTimeout(()=>{
//         console.log('Your meal is ready');
//         callback()
//     },4000)
// }
// function ready(){
//     console.log('Your food has been served');
// }
// waiting(ready)

// let workout = true
// let p = new Promise((resolve,reject)=>{
//     if (workout) {
//         resolve('Man\'s looking like Johnny Bravo')
// } else {
//     reject('Hebana Eish Man')
// }
// })

// let array
// p.then(function(message) {
//     return message.split('')
// })
// .then(arr=> array=arr)
// .catch(e=>{
//     console.log(e)
// })

// async function waiting(){
//     let p = await new Promise((resolve,reject)) => {}
// }

// fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json') // ALLOWS YOU TO FETCH DATA FROM AN API/URL
// .then(api => api.json())
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))

// async function fetchData() {                            // async function fetchData = async() => {} // FETCHING DATA IF IT WAS AN ARROW FUNCTION
//     let api = await fetch ('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//     // if (api.status == 200) {
//     //     console.log(api);
//     // } else {
//     //     throw new Error('Problems Eish!')
//     // }
//     if (api.ok != true) throw new Error('Problems Eish')
//     console.log(api);
// }

// fetchData()

// const fetchData = async() => {
//     let api = await fetch ('https://usimxi17.github.io/API/index.json')
//     let data = await api.json()
//     friends = data
    
// }

// fetchData()

// const fetchData = async() => {
    //     let api = await fetch ('https://usimxi17.github.io/API/index.json')
    //     let data = await api.json()
    //     console.log(api);
    // }
    
    // fetchData()
    
async function fetchAPI() {
    try {
        const response = await fetch('https://usimxi17.github.io/API/index.json');
        const data = await response.json();
        const friends = data;

        // Log each friend's details
        friends.forEach(item => {
            console.log(`${item.firstName} ${item.lastName}
            really enjoys ${item.favHobby} and is ${item.criminal ? 'a criminal' : 'not a criminal'}`);
        });

        // Filter friends who are not criminals
        const nonCriminals = friends.filter(friend => !friend.criminal);
        console.log(nonCriminals);

        // Find and log the dream car of the first two non-criminal friends
        for (let i = 0; i < Math.min(2, nonCriminals.length); i++) {
            const friend = nonCriminals[i];
            console.log(`${friend.firstName} ${friend.lastName}'s dream cars are ${friend.dreamCars}.`);
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAPI();