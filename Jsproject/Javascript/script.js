// function added(a,b){
//     var c;
//     c=a+b;
//     var d=(a+b)/2
//     return[c,d]

// }
//  var o=added(100,500);
// console.log(o);
// var hello="hi selam new"
// function newFunction(){
   
//     console.log(hello);
   
// }

   
//     newFunction();
// {
//     var a=5;
//     let b=7;
//     const c=8;
//     console.log(a);
// console.log(b);
// console.log(c);
// }
//Question 1
//Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function
function myFirst(){
    let a="Hello";
    console.log(a);
}
myFirst();

// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// ○ Feel free to give any value as a parameter in your function
function mySecond(a){

console.log(a);
return a;
}
// Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console

function myThird(b){
    mySecond(b);

}
myThird("abebe said that" );

// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.

//function myFourth()

function myFourth(a){
    console.log(a[0]);
console.log(a.length);
}
myFourth([3,2.9,6])

// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter
// and prints the sum of the two numbers on console
function  myFifth(y){
    console.log(y[0]+y[1]);
}
myFifth([5,9])


// Write a function that takes an integer minutes and converts it to seconds.

function convert(minute){
        let a=minute*60
        console.log(a+" "+"sec");
    }
    convert(2)

// Question 7
    // Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.

function increamentByOne(a){
    let b=a+1;
    console.log(b);
    return b;
}
increamentByOne(6);


// Question 8
// ● Write a function that takes the base and height of a triangle and returns its area.
function AreaOfTriangle(base,height){
let area=0.5*base*height;
console.log(area);
return area;
}
AreaOfTriangle(10,50)
// Question 9
// ● Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
// the farmer wants to know the total number of legs and not the total number of animals.

function legsOfAnimals(chickens,cows,pigs){
    let legsOfChickens,legsOfCows,legsOfPigs,totalLegs;
    legsOfChickens=chickens*2
    legsOfCows=cows*4
    legsOfPigs=pigs*4
    totalLegs=legsOfChickens+legsOfCows+legsOfPigs;
    console.log(totalLegs);

return totalLegs;
}
legsOfAnimals(3,2,4)

// Question 10 (not from edabit.com)
// ● Create a function that takes an array containing only TWO numbers as a parameter and
// returns a value that is 3 times the first element of the array.
function array(a){
    let c;
    c=3*a[0];
    console.log(c);
    return c;
}
array([4,5]);

// Question 11
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.
function numbers(num1,num2){
    if(num1==num2){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
numbers(5,2);
numbers(2,2);

// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
function divisible (a){
    if(a%100==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
divisible (12);
divisible (400)

// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.

function check(a){
    if (a%2==0) {
       console.log("Even"); 
    }
    else{
        console.log("Odd");
    }
}
check(4);
check(7);

// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79
function score(a){
    if (a<0 || a>100) {
        console.log("invalid Score");
 }
 else if(90<=a && a<=100){
console.log("Grade A");
 }
 else if(80<=a && a<=90){
     console.log("Grade B");
 }
 else {
    console.log("Grade C");
 }
}
score("good");
score(-56);
score(127);
score(69);
score(84);
score(95);



//     var a=7;
//     var b=17;
//     function add(a,b){
//         return a+b;
//     }
//     function mult(n1, n2){
//         return n1*n2;
//     }
// var sum=add(a,b);
// var product=mult(prompt ("Enter a number:"),sum);
// console.log(product);

function triArea(base,height){
    if(typeof base!=="number"|| typeof height!=="number"){
        return "please enter a number value";
    }else if (base<0||height<0){
        return "please provide only positive numbers";
    }else {
        return (base*height)/2;
    }
}
console.log(triArea(10,10));

function score(wins, draws,losses){
    let a,b,c;
    a=wins*3;
    b=draws*1;
    c=losses*0;
    return a+b+c;

}
let points=score(3,4,2);
console.log(points);
console.log(score(3,4,2));

//var studentsGrades=[12,34,56,87,89,45];
// var pass=50;
// console.log(studentsGrades[0]);
// console.log(studentsGrades[1]);
// console.log(studentsGrades[2]);
// console.log(studentsGrades[3]);
// console.log(studentsGrades[4]);
// console.log(studentsGrades[5]);

// for(i=0;i<=5;i++)
// console.log(studentsGrades[i]);
// for(i=0;i<studentsGrades.length;i++){
//     console.log(studentsGrades[i]);
// }
// let i=0;
// while (i<studentsGrades.length) {
//     console.log(studentsGrades[i]);
//     i++;
// }
// for(i=0;i<studentsGrades.length;i++){
//     var sum=0;
//     sum=sum+i;
//     console.log(studentsGrades(4));
// }

// steps to follow when solving algorithmic problem
// 1. understand the problem
// 2.solve it on paper
// 3.craft a general step that can be followed to solve any kind of similar problem
// 4.write the pseudo Code
// 5.translate to javaScript
// 6.test



// pseudo Code

// -if(typeof base!=="number||typeof height!=="number"){
//     return "please enter a number value";
// } else if (base<0||height<0){
//     return "please provide only positive numbers";
// }
// suedo code

// -difine a function that takes a number
// function addUp(a)
// -check if a is a number.if not return error Message
// if(typeof a!=="number"){
//     return "please enter a number value";
// }else if (a<0){
//     return "please provide only positive numbers";
// }
// -difine for loop
// -initial 1
// -limit a
// -update ++
// var result=0;
// for(i=1;i<=a;i++)
// -add every value of i and save the sum
// -var result to store the sum
// -return result


function addUp(a){
if(typeof a!=="number"){
    return "please enter a number value";
}else if (a<0){
    return "please provide only positive numbers";
}else{
    var result=0;
    for(i=1;i<=a;i++){
        result=result+i;
    }
    return result;
}
}
var added=addUp(13);
console.log(added);

function evenAndOdd(arr){
    var x=0;
    var y=0;
    for (i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
           y=y+ arr[i];
        }else{
            x=x+arr[i];
        }
        
    }
    return x-y;
}
console.log(evenAndOdd([1,2,3,4]));



// algorithmic problems Home Work
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

    function firstTenNumbers(b){
        for (index = 1; index <=10; index++) {
            console.log(index);
        }

    }
        
    let x=firstTenNumbers(10);
    

     
    //}
    
    // Question 2
    // ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
    //console. Note: each output should be displayed on a new line.
    // ○ Test case: If you give 7 to the function, output should look like this:
    // 8
    // 9
    // 10
    // 11
    // 12
    function nextFiveNumbers(n){
        
        for (let index = n+1; index<=n+5; index++) {
           
            console.log(index);
           
        }
       
        }
    let va= nextFiveNumbers(7);

//     Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125

function sumOfTheNextTenNumbers(n){
    let sum=0;
    for (let index = n+1; index<=n+10; index++) {
       
        sum+=index;
       
    }
    return sum;
    }
    let v= sumOfTheNextTenNumbers(7);
    console.log(v);
        
    
// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
function nextFiveNumbers(arr){
        
    for (let index = 0; index<arr.length; index++) {
       
        console.log(arr[index]);
       
    }
   
    }
let r= nextFiveNumbers([1,"Hello",8,44]);

// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

function nextFiveNumbers(array){
        
    for (let index = 0; index<array.length; index++) {
       
        console.log(array.length);
       
    }
   
    }
let m= nextFiveNumbers([1,"Hello",8,44]);
let j= nextFiveNumbers(["Hello",13]);

// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0

function text(Array){
    let sum=0;
    for (let index = 0; index<Array.length; index++) {
       
        sum+=Array[index];
       
    }
    return sum;
    }
    let t=text([5, 6, 99, 8, 76, 4, 68, 44]);
    console.log(t);

//     Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

function sumOfEvenOdd(Ar){
    var xSum=0;
    var ySum=0;
    for (let index = 0; index<Ar.length; index++) {
       if (Ar[index]%2==0) {
         xSum = xSum+Ar[index];
       }
       else{
        
          ySum =  ySum+Ar[index];
       }
        
       
    }
    return t=xSum-ySum;
    }
    sumOfEvenOdd([5, 6, 99, 8, 76, 4, 68, 44]);
    console.log(t);

//     Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

function evenIndices(array){
        
    for (let index = 0; index<array.length; index++) {
        if(index%2==0){
            console.log(array[index]);
        }
       
        
       
    }
   
    }
let g= evenIndices([5, 6, 99, 8, 76, 4, 68, 44]);
let u= evenIndices([11, "Sam", 3, 7, "car"]);

// function getFirstValue(arr) {
//     for (let index = 0; index < array.length; index++) {
        
        
//     }
// 	return arr[arr.length-1];
// }
// let value=getFirstValue([8,9,0,6]);
// console.log(value);

// function search(arr, item) {
// 	for (let i=0; i < arr.length; i++){
// 		if (arr[i] === item){
// 			return i
// 	}
// }
// return -1
// }
// let valu= search([8,9,0,9,6],9);
// console.log(valu);

// function addUp(num) {
//     var total = 0;
//     for (var i = 1; i <= num; i++) {
//       total += i;
//     }
//     return total;
//   }
//   let val= addUp(9);
//   console.log(val);
//   function add(n){
//   let sum=0;
//   for (let index = n+1; index<=n+10; index++) {
     
//       sum+=index;
     
//   }
//   return sum;
//   }
//   let va= add(7);
//   console.log(va);
  



// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method



// initialize array
var arr = [36, 98, 76, 54];

// append multiple values to the array
arr.pop(arr[length-1]);
arr.push(32);

// display all values
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

let number = [4, 10, 5, 1, 3];
number.sort((a, b) => a - b);
console.log(number);

// [1, 2, 3, 4, 5]

// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
let evangadiClass = {
lengthOfCourse: "1 Month",
website: "https://www.evangadi.com/",
isChallenging: false,
topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
students: [
{
name: "Abebe",
age: 34,
sex: "M"
},
{
name: "Kebede",
age: 44,
sex: "M"
},
{
name: "Almaz",
age: 27,
sex: "F"
},
{
name: "Challa",
age: 22,
sex: "M"
},
{
name: "Chaltu",
age: 19,
sex: "F"
}
]
}


// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change

evangadiClass.lengthOfCourse="5 Month";
console.log(evangadiClass);

// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method


// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console


// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

let person={
    firstName:"abebe",
    lastName:"kebede",
    someFunction:function(){
        return this.firstName +" "+ this.lastName;
    }
}
var persons={
    firstName:"james",
    lastName:"bond",
    address:{
        city:"londen",
        Country:"UK"

    }
};
console.log(persons.address.city);

console.log(person.firstName+" "+person.lastName);
console.log(person['firstName'] +" "+person['lastName']);
console.log(person.someFunction());

function Person(first,last){
    this.firstName=first;
    this.lastName=last;
    this.fullName=function(){
        return this.firstName+" "+this.lastName;
    }
    

};
var myClassMate=new Person("abebe","kebede");
var myFried=new Person("chala","chaltu");
console.log(myFried.fullName());

let student=new String();
studentName="Abebe"
let yetemariName="The love of money is the root of all sins"
console.log(yetemariName.charAt(5));
console.log(yetemariName.slice(5));
console.log(yetemariName.toUpperCase());
console.log(yetemariName.split());

{const arr=[1,2,3,4,5,6,7,8,9,10];
    console.log(arr);
arr[3]='a';
arr[6]='b';
arr.shift(0);
console.log(arr);}