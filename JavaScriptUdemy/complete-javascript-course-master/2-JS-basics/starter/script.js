//var yearJohn = 2018-28;
//console.log(yearJohn);
//
//var nope = yearJohn > 3000; 
//console.log(yearJohn);
//
//console.log(typeof nope); 
////assignment operator reads from right to left//
//

var markHeight= 1.69;
var markMass = 78;
var johnHeight= 1.95;
var johnMass= 92;
var markBMI,JohnBMI;

markBMI= markMass / (markHeight*markHeight);

JohnBMI= johnMass / (johnHeight*johnHeight);

var markHeigher= markBMI > JohnBMI;

if(markHeigher===true){
    console.log("Mark is larger than John");
}else{
    console.log("John is larger than Mark");
}

//console.log("is Mark's BMI higher than john's?" +markHeigher);
//var firstName= 'john';
//var civilStatus = 'married';
//
//if(civilStatus === "married"){
//    console.log(firstName + 'is married');
//}else{
//    console.log(firstName + 'will hopefully marry soon :)');
//}

//ternary operators: 
var firstName = "John"; 
var age = 16;

age >= 18 ? console.log(firstName+' drinks beer') :console.log(firstName + ' drinks juice'); 

var drink= age >= 18 ? 'beer' : 'juice'; 
console.log(drink); 

switch(true){
    case age < 13:
            console.log("john is a boy");
            break;
    case age >= 13 && age < 20:
            console.log("john is a teenager");
        break; 
    default:
        console.log("we dont know his age"); 
}

//switch statement 
var job ='teacher';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' theaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drivers an uber in lisbon');
        break; 
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break; 
    default:
        console.log(firstName + ' does not have a job'); 
        
}

//falsy values are: undefined, null, '', NaN
//truthy values are: not falsy values 
// === is for strict == has type cosersion 
var height= 0; 
if (height|| height ===0){
    console.log("variable is defined"); 
}else{
    console.log("the variable is not defined"); 
}
console.log(typeof(height));


//code challenge 2

var jamesTeamAvg= (89+120+103)/3;
var mikeTeamAvge = (116+94+123)/3;

if(jamesTeamAvg > mikeTeamAvge){
    console.log("James has the highest average: " + jamesTeamAvg);
}else if(jamesTeamAvg === mikeTeamAvge){
    console.log("it is a tie!" + jamesTeamAvg + " " + mikeTeamAvge);
}else{
    console.log("Mike has the highest");
}


//functions 

function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageJohn= calculateAge(1990);
console.log(ageJohn);
console.log(ageJohn);
//function declaration 
//function whatDoYoDo(job,Firstname){}
//function expressions: pieces of code that always return a  value, as long as its a single value 
var whatDoYouDo= function(job, middleName){
    switch(job){
        case 'teacher':
            return middleName +' teaches kids how to code';
        //no break because it finishes the function 
        case 'driver':
            return middleName+ ' drives uber in Lisbon';
        case 'designer':
            return middleName+ ' makes cool websites';
        default:
            return middleName+ ' does something else';
    
    }
    
}

console.log(whatDoYouDo('teacher', 'john'));

//statements dont immediately return a value, they just performaactions like if else statements 


if(true){
    console.log(11); 
}

//arrays:
var names= ['sara', 'rob', 'hanna']; 
var years = new Array(2018, 2020, 2021);
names[4]= 'jeanne'; 
names[names.length]='johnny'; //adds to end of the array 
console.log(names[0]);
console.log(names.length);

var john= ['John', 'Smith', 1998, 'teacher'];

//methods of arrays 
john.push('jany'); //adds element at the end of the array 
john.unshift('Mister');//adds to beginning 
john.pop(); 
john.shift();// removes from first 
console.log(john); 
john.indexOf(1990); // return s the posiiton, if not it returns -1 

var isDesigner = john.indexOf('designer')===-1 ? 'John is not a designer' : ' John is a designer'; 
console.log(isDesigner);


//coding challenge 3

function tipCalc(bill){
    if(bill < 50){
        return bill * 0.2; 
    }
    else if(50<= bill && bill < 200){
        return bill * .15;
    }
    else{
        return bill * .10; 
    }
}
var tipOne= tipCalc(124); 
var tipTwo = tipCalc(48);
var tipThree = tipCalc(268); 

var bills = [124, 48, 268];  
var totals= [124 + tipOne, 48 + tipTwo, 268 + tipThree]; 

console.log(bills);
console.log(totals); 


//objects order doesnt matter 
//object literal:
//var jack = {
//    firstName:'jack', //name is the key and jack is a value, this is a key value pair, name is a property of jack object// 
//    lastName: 'Smith',
//    birthYear: 1998, 
//    family: ['Jane','Mark','Emily'], 
//    job: 'teacher', 
//    isMarried: false
//}; //object literal 
//console.log(jack.firstName); 
////using dot notation to access properties in objects 
//var x= 'birthYear'; 
//console.log(jack[x]); 
////mutate data
//jack.job = 'driver'; 
//jack['isMarried']= true; 

//initializing object 
//new object syntax
var jane = new Object();
jane.name= 'Jane';
jane.birthYear= 1992; 
jane["lastName"]= 'Smith'; 
console.log(jane); 


//methods functions within objects 
var jack = {
    firstName:'jack', //name is the key and jack is a value, this is a key value pair, name is a property of jack object// 
    lastName: 'Smith',
    birthYear: 1998, 
    family: ['Jane','Mark','Emily'], 
    job: 'teacher', 
    isMarried: false, 
    calcAge: function(){
        this.age = 2020 - this.birthYear; 
    }
}; //object literal 
jack.calcAge(); 
console.log(jack); 

//instead of passing birthyear use this (this object )//

//coding challenge 4
var jason = {
    name: 'jason', 
    mass: 92,
    height: 1.95,
    calcbmi: function(){
        this.bmi= this.mass / (this.height * this.height); 
        return this.bmi;
    }
};
    
var mark = {
    name: 'mark', 
    mass: 88,
    height: 1.68,
    calcbmi: function(){
        this.bmi= this.mass / (this.height * this.height); 
        return this.bmi;
    }
};
jason.calcbmi();
mark.calcbmi(); 
if (jason.bmi > mark.bmi){
    console.log('Jason ' + jason.bmi +' has more mass thant Mark ' + mark.bmi)
}else if (jason.bmi === mark.bmi){
    console.log("Equal " + jason.bmi);
}
else{
    console.log('Mark ' + mark.bmi + ' has more mass than Jason ' + jason.bmi); 
}

//loops 
//for loop 
for(var i =0; i < 10; i++){ 
    console.log(i); 
}

//while loop only have the condition 
var i =0; 
while(i < 10){
    console.log(i); 
    i++;
}


//continue and break statements: 
var john = ['John', 'Smith', 1990, 'deigner', 'false', 'blue']; 
for (var i =0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue; 
    //continue will skip next line 
    console.log(john[i]); 
}

for (var i =0; i < john.length; i++){
    if (typeof john[i] !== 'string') break; 
    //break will get out of everything  
    console.log(john[i]); 
}

//looping backwards

for (var i = john.length-1; i >= 0; i--){
    console.log(john[i]);
}


//code challenge 5 
var rod = {
    bills:[ 124, 48, 268, 180, 42], 
    tips:[],
    totals:[],
    calcTip: function(bill){
        if(bill < 50){
            return bill * 0.2;
        }else if(50 <= bill && bill < 200){
            return bill * .15;
        }else if(bill >= 200){
            return bill * .10;
        }
        
    }
};

for(var j =0; j < rod.bills.length; j++){
    rod.tips[j]= rod.calcTip(rod.bills[j]);
    console.log(rod.tips[j]);
}

for(var p =0; p < rod.bills.length; p++){
    rod.totals[p]= rod.calcTip(rod.bills[p]) + rod.bills[p];
    console.log(rod.totals[p]);
}

//code challenge 3 slon: 
var sam= {
  fullName: 'Sam Smith',
    bills: [124, 48, 268, 180,42], 
    calcTips: function(){
        this.tips=[];
        this.finalValues=[];
        for(var k =0; k < this.bills.length; k++){
            var percentage; 
            var bill= this.bills[k];
            
            if(bill < 50){
                percentage =.2;
            }else if(bill >= 50 && bill < 200){
                percentage =.15; 
            }else{
                percentage=.10;
            }
            this.tips[k]= bill*percentage; 
            this.finalValues[k]= bill+ bill * percentage;
            
        }
    }
};