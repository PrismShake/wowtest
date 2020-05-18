////function constructor
//var john= {
//    name: 'john',
//    yearOfBirth: 1998, 
//    job: 'teacher'
//};
//
//var Person = function(name, yearOfBirth, job){
//    this.name = name; 
//    this.yearOfBirth = yearOfBirth; 
//    this.job = job; 
//}
//
//
//Person.prototype.calculateAge = function(){
//        console.log(2020 - this.yearOfBirth); 
//}
//var john = new Person('John', 1990, 'therapist'); //instansiation 
//john.calculateAge(); 
//var jane = new Person('Jane', 1990, 'designer');
//
//
//jane.calculateAge(); 
//object.create
//var personProto = {
//    calculateAge: function(){
//    console.log(2020- this.yearOfBirth);
//}
//};
//
//var john = Object.create(personProto); 
//john.name = 'John'; 
//john.yearOfBirth = 1990; 
//
//
//var jane = Object.create(personProto, {
//    name: {value: 'Jane'},
//    yearOfBirth: {value: 1982},
//    job:{ value: 'designer'}
//});

//primitives vs objects 
//primitives
//var a = 23; 
//var b =a; 
//a  = 25; 
//console.log(a); 
//console.log(b); 
//
//var objOne= {
//    name: 'John', 
//    age: 39
//};
////objects 
//var objTwo = objOne; 
//objOne.age= 33; 
//console.log(objOne.age); 
//console.log(objTwo.age); 
//
////functions 
//var age = 45; 
//var obj= {
//    name: 'jonas', 
//    city: 'lisbon'
//}; 
//
//function change(a,b){
//    a = 56; 
//    b.city= 'san fran'
//}
//change(age, obj); 
//console.log(age); 
//console.log(obj.city); 

//passing functions as args

//var years = [1999, 1995, 1937, 2005, 1990]; 
//
//function arrayCalc(arr, fn){
//    var arrRes = []; 
//    for(var i = 0; i < arr.length; i++){
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes; 
//    
//}
//
//function calculateAge(el){
//    return 2016 - el; //only has one task 
//}
//function isFullAge(el){
//    return el >= 18; 
//}
//var ages = arrayCalc(years, calculateAge); 
//console.log(ages); 

//functions returning functions 

//
//function interviewQuestion(job){
//    if(job === 'designer'){
//        return function(name){
//            console.log(name + ', can you please explain what UX design is?'); 
//        }
//    }
//    else{
//        return function(name){
//            console.log('hello ' + name); 
//        }
//    }
//    
//
//    var teacherQuestion = interviewQuestion('teacher'); 
//    var deignerQuestion = interviewQuestionr('designer'); 
//
//teacherQuestion('John'); 
//    deignerQuestion('John'); 
//
// 
// immediately invoked finction experessions 
//function game(){
//    var score = Math.random()* 10 ; 
//    console.log(score >= 5); 
//}
//game(); 
//(function(){
//    var score = Math.random()* 10 ; 
//    console.log(score >= 5); 
//}
// )();
////console.log(score); 
//(function(goodLuck){
//    var score = Math.random()* 10 ; 
//    console.log(score >= 5 - goodLuck); 
//}
// )(5);

////closures 
//function retirement(retirementAge){
//     var a = " years away until retirement"; 
//    return function(yearOfBirth){
//        var age = 2020 - yearOfBirth; 
//        console.log((retirementAge - age)+ a); 
//    }
//}
//
//var retirementUs = retirement(66); 
//retirementUs(1990); 
//
//var retirementGermany = retirement(65); 
//
//var retirementIceland = retirement(67); 
//
//retirementGermany(1990);
//retirementUs(1990); 
//retirementIceland(1990); 
//
//function interviewQuestion(job){
//    return function(name){
//        if (job === 'designer') {
//                console.log(name + ', can you please explain what UX design is?'); 
//        }
//        else if (job === 'teacher') {
//                console.log(name + ' what do you teach?'); 
//        }
//        else { 
//            console.log('Hello ' + name);
//        }
//    }
//} 
//interviewQuestion('teacher')('Jason'); 
//lecture: bind,call, and apply 
// var john = {
//     name: 'John', 
//     age: 26, 
//     job: 'teacher', 
//     presentation: function(style,timeOfDay){
//         if (style === 'formal') {
//            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//        } else if (style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//        }
//     }
// };
// //method borrowing 
// var emily= { 
//    name: 'emily',
//    age: 25, 
//    job: 'designer'
// };
// john.presentation('formal',  'morning'); 
//john.presentation.call(emily, 'friendly', 'afternoon' );
////same thing as ^ 
////john.presentation.apply(emily, ['friendly', 'afternoon'])
//var johnFriendly = john.presentation.bind(john, 'friendly'); 
//
//johnFriendly('morning'); 
//var emilyFormal= john.presentation.bind(emily, 'formal'); 
//emilyFormal('afternoon'); 
//
//
//
//
//var years = [1999, 1995, 1937, 2005, 1990]; 
//
//function arrayCalc(arr, fn){
//    var arrRes = []; 
//    for(var i = 0; i < arr.length; i++){
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes; 
//    
//}
//
//function calculateAge(el){
//    return 2016 - el; //only has one task 
//}
//function isFullAge(limit, el){
//    return el >= limit; 
//}
//
//var ages = arrayCalc(years, calculateAge); 
//
//
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); 
//console.log(fullJapan); 
//console.log(ages); 









