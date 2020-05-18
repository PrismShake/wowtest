
//how our code is executed: javascript parsers and engines
//javascript engine is a code that executes javascript code, parsed by a parser-> absttract syntax tree -> conversion to machine code -> machine code -> code runs
//execution context ( a box, a container, which stores variables and in which a piece of our code is evaled and execed) -- the default: global execution context-> code that is not inside any function, associated wiht the global object, in the browser that's the window object lastName === window.lastName
    //a function's execution context is on top of the global excution context 
//
///////////////////////////////////////
// Lecture: Hoisting
calculateAge(1965);
function calculateAge(year){
    console.log(2020-year);
}

//the function declaration is always accounted for first so you can call your function before you declare it 
//retirement(1990);
var retirement = function(year){
    console.log(65-(2020-year) );
}
/// ** this does not workl, only works for declared functions 

//variables 

//console.log(age); doesnt work, not necessarily an error but will count it as undefined 
var age = 23; 
function foo(){
    var age=65; 
    console.log(age); 
}
foo(); 
console.log(age);













///////////////////////////////////////
// Lecture: Scoping
/*
    each new function creates a scope the space in which the variables it defines are accessible
    
    lexical scopeing a function that is lexically within another function gets access to the scope of the outer function 

*/

// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain


//var a = 'Hello!';
//first();
//
//function first() {
//    var b = 'Hi!';
//    second();
//
//    function second() {
//        var c = 'Hey!';
//        third()
//    }
//}
////since this below function isnt in the one above it doenst know what b and c is 
//function third() {
//    var d = 'John';
//    console.log(a + b + c + d);
//}
//the execution stack is diferent from the scope chain, the third function can only get a and d 




///////////////////////////////////////
// Lecture: The this keyword


var jahn = {
    name: 'jahn',
    yearOfBirth: 1999, 
    calculateAge: function(){
        console.log(this); 
        console.log(2020-this.yearOfBirth);
//        function innerFunction(){
//            console.log(this);
//        }
//        innerFunction(); 
    }
};
jahn.calculateAge(); 

//the inner function call is going to output the window object becuase it is not a method

var mike={
    name: 'mike',
    yearOfBirth: 1982
};

mike.calculateAge = jahn.calculateAge; 
//the mike version fo the function equals the veriosn john has 

mike.calculateAge(); 



