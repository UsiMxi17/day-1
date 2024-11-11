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
let table = {
    material: "wood",
    no_of_legs: 4,
    occupied: true
}
// bracket notation
console.log(table["material"]);

// dot notation
console.log(table.material);

//destructuring
let {material, occupied} = table //wood
console.log(material);

//functions
// () --> parentheses
// [] --> brackets
function greeting(a,b){
    // a&b are parameters
    console.log("This is a greeting" + (a+b))
}
// 3&4 are arguments
greeting(3,4)

let num1 = 5
// num1++ post increment
// ++num1 pre increment
// -- num1 pre decrement
// num1-- post decrement
// console.log(num1--);
console.log(6=='7');
