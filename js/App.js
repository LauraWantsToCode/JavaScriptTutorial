// ==== below is tutorial 4 ============

// make a pop up with text, where you need to click ok before you access the page
// alert("Xoxo");

// you can include the same JS file into multiple html files. 

// ==== below is tutorial  5 ============
// using JS to write HTML
// document below relates to HTML document
// document.write("<br/>text inputted with JS"); 
// location of this text in relation to text written in the actual html depends on where 
// the file is linked - if at the bottom, it would be the last text, etc. 
//  if at the top or within body - first thing

// when you are inside of the function below - use single quatations - ' '. 
// if you use "", you might end the actual function.
// document.write("<h2 style='color:blue;'>Javascript rules!</h2>");
// add horizontal rule (line)
// document.write("<hr/>");

// ==== below is tutorial  6 ============
// variables and data
// var for variable
// important to add ; at the end to tell JS we are done 

// var phrase = "To be or not to be."; 
// document.write(phrase); 
// can use "" or '' - JS does not care.
// phrase = 'apple.'
// document.write(phrase); 

// var age = 23; // whole number
// var gpa = 3.1; //decimal number
// var isSilly = true; //boolean 
// var isSilly = null; //variable has no value. Going out of our way to specify the variable has no value
// var description = undefined; //can have undefined var. Doesn't have a value yet. 
// // null defines a variable, giving a definition - no value;
// whilst undefined means the value is not set yet.

// ==== below is tutorial  7 ============
// // working with strings

// var phrasee = "Strings are fun and more"; 
// document.write(phrasee); 
// //to access info about the string
// document.write(phrasee.length); 
// //how many characters
// //can also use methods on strings
// document.write(phrasee.toUpperCase() );
// // toLowerCase; charAt (returns the character of the first string); 
// document.write(phrasee.charAt(1) );
// // shows what location the letter/character is in 
// // gives the index of the first character used 
// document.write(phrasee.indexOf("a"));
// // for the last character that is repeated
// document.write(phrasee.lastIndexOf("a"));
// //gives -1 if the character is not in the string

// //takes two parameters - section of your string. add start index and stop index (not including last)
// document.write(phrasee.substring(0, 5));
// // can also include other methods within (). length will give the last item
// document.write(phrasee.substring(phrasee.indexOf("f"), phrasee.length));

// // //boolean value
// document.write(phrasee.endsWith("and"));

// document.write(phrasee.includes("and"));

// var text = "dis is my text"
// document.write(phrasee + text + " now additional text")

// string methods: https://www.w3schools.com/js/js_string_methods.asp 

// // ==== below is tutorial  8 ============
// // working with numbers in JS
// // JS does not separate integer numbers from decimals 
// document.write ( 2 + 2); 
// document.write ( 2 * (2 + 7)); 

// var numberz = 6
// document.write ( numberz * (2 + 7)); 
// // % divides the number and gives the remainder
// document.write ( 10 % 4);

// // methods with numbers

// var number = -2; 
// // Math.abs - absolute number
// document.write ( Math.abs(number) );
// // max - pass 2 numbers, will spit out the max
// document.write ( Math.max(number, 4) );
// // min
// // round
// // pow - pass it through 'power', same as number^^3
// document.write ( Math.pow(number, 3) );
// // sqrt - square root
// // random - would return a random number between 0 and 1 (decimal)
// document.write ( Math.random() );
// document.write ( Math.round(Math.random()) * 10 );

// ==== below is tutorial  9 ============
// getting input from the user
// whatever info the user will input, will be stored in the below var0
// var name = window.prompt("What is your name?"); 
// var age = window.prompt("How old are you?"); 
// // this will add a prompt box with info between ()
// // it is a pop up text box

// document.write("Hi, " + name + ", how are you today? Do you like being " + age); 


// ==== below is tutorial  10 ============
// basic calculator

// var num1 = window.prompt("Enter a number"); 
// var num2 = window.prompt("Enter another number"); 

// // document.write(num1 + num2); //this would just put both numbers next to each other, instead of adding
// // JS converted the numbers above into strings 

// //we need to convert string that has numbers in it into a number, use parseInt

// // num1 = parseInt(num1); 
// // num2 = parseInt(num2); 

// // although below will round the decimal numbers and will only work with whole numbers
// // parseInt will convert a string into an integer number! 
// // if we want to use decimal numbers, need to use parseFloat !!! 

// num1 = parseFloat(num1); 
// num2 = parseFloat(num2); 

// document.write(num1 + num2);

// ==== below is tutorial  11 ============
// arrays

// var fruits = new Array("Apples", "Oranges", "Peaches"); 
// document.write(fruits); 

// // instead of saying new array, you can do the below to create an array
// // can write in one line or like below, whichever view we prefer
// var vegetables = [
//                     "Potato", 
//                     "Beetroot", 
//                     "Carrot"
//                 ]; 
// document.write(vegetables); 
// // can also store numbers and boolean values in the arrays. 

// document.write(vegetables[1]); 
// document.write(vegetables.length); //how many items are in array
// vegetables[1] = "Cabbage"; // change value
// vegetables[3] = "Onion"; 
// document.write(vegetables); 

// var items = "Pen, Laptop, Lamp, Paper"; 
// // can use a special string function to create an array from above string
// items = items.split(", "); //online says split has been replaced with splice
// document.write(items[2]); 

// ==== below is tutorial  12 ============ 
// functions 

// function sayHi(){
//     document.write("<h1>Hello Laura</h1>")
// }
// // access function by calling it! 
// sayHi(); 

// function sayHi(){
//     var name = "Laurute"; 
//     document.write("<h1>Hello " + name + "</h1>")
// }
// sayHi(); 

// // using a parameter - variable or value 
// function sayHi(name, age){
//     document.write("<h1>Hello " + name + "</h1>");
//     document.write("<p>You are " + age + "</p>");
// }
// sayHi("Laurute", 28); //this is a parameter for the function
// sayHi("Mike", 50);
// // // each time we execute the function, we use the different value we pass in to it

// function addition(num1, num2){
// return num1 + num2; //return makes the function return the sum
// }
// document.write( addition(4, 5));

// var addedNumbers = addition(4, 99);
// document.write( addedNumbers ); 

// we are not trying to print anything on the screen. 


// ==== below is tutorial  13 ============ 
//  elements
// grab and modify html elements from JS

//create a variable for the html element with id
// var header = document.getElementById("header");
// // once var is created, can change the info within the element: 
// header.innerHTML = "Title Overridden"; 
// header.style.color = "red"; 
// // header.style.backgroundColor = "blue"; 

// var link = document.getElementById("link");
// link.href = "https://www.google.com/maps"; 
// //can access any attributes inside of the element! 
// link.style = "color: green"


// ==== below is tutorial  14 ============ 
// event listeners
// three ways to use event listeners: 
// 1. create an event listener in html fully (add onclick and define what happens)
// 2. create a function link within html, but type function in JS
// 3. fully in JS. 

// 2. below
// function handleClick(element){
//     // alert("Clicked!");
//     // function (element) links with (this) in the html function
//     // we are passing the current element where we are doing the clicking into the function
//     // and then we can access and modify it
//     element.innerHTML = "Clicked"; 
//     element.style="background-color:blue"; 
//     // above will change the button name from "Click me" to "Clicked"
// }
// // above function can be used on buttons, as well as images, etc

// // 3. will use an image in html
// var image = document.getElementById("image"); 
// // below in () include when we want smth to happen, and function
// image.addEventListener("mouseover", function(){
//     this.style = "box-shadow: 2px 2px 2px blue"; 
//     this.width = "150"; 
//     //this automatically represents the element that had mouseover on it
//     // above formula changes the image on mouse over, but does not change back when moved out
// }); 

// image.addEventListener("mouseout", function(){
//     this.style = ""; 
//     this.width = "100"; 
// }); 
// // find more event listeners: https://www.w3schools.com/js/js_htmldom_events.asp 
// the link above will have various event listeners - don't add 'on' at the front when 
// using it with the addEventListener
// the link provides events to be added to html

// ==== below is tutorial  15 ============ 
// building a messaging app 
// we will put our messages into a ul (unordered list)

//create 3 variables to link to our id's in html
// var messages = document.getElementById("messages"); 
// var textbox = document.getElementById("textbox"); 
// var button = document.getElementById("button"); 

// // create an event listener, when clicked, function is executed
// button.addEventListener("click", function(){
//     // creating a new variable to store new typed messages, 
//     // that will be a list item (li) on our html page
//     var newMessage = document.createElement("li");
//     // make sure the new variable takes messages from the textbox (previously created var) 
//     // new message will be equal to the value within the textbox! 
//     newMessage.innerHTML = textbox.value; 
//     // add list item inside the unordered list 
//     messages.appendChild(newMessage); 
//     // () we just input the new element that we want to append into this unordered list
//     //remove text from textbox when it is sent and shown on the list
//     textbox.value = ""; 
// }); 
// // when the page is refreshes, the messages disappear
// // when creating a fully functioning page - you can store items into databases

// ==== below is tutorial  16 ============ 
// if statements 
// the conditions do not have to be boolean, could be comparison of numbers, etc

// var isMale = false; 
// var isTall = true; 

// if(isMale){
//     document.write("You are a male"); 
// } else {
//     document.write("You are not male"); 
// }

// if(isMale && isTall){ 
//     document.write("You are a tall male."); 
// } else {
//     document.write("You are either not male, or not tall, or both."); 
// }

// can use && or || (or) when adding 2 conditions
// if(isMale || isTall){ 
//     document.write("You are either male or tall or both."); 
// } else {
//     document.write("You are either not male and not tall."); 
// }

// if(isMale && isTall){ 
//     document.write("You are a tall male."); 
// } else if(isMale && !isTall){
//     document.write("You are a short male."); 
// } else if(!isMale && isTall){
//     document.write("You are tall, but not a male."); 
// } else {
//     document.write("You are not male, nor tall."); 
// }

// ==== below is tutorial  17 ============ 
// if statements w/ comparisons (using comparison operators >= etc )
// == would mean equal
// ! for not equal, called the not operator

// function max(num1, num2, num3){
//     if(num1 >= num2 && num1 >= num3){
//         return num1; 
//     } else if (num2 >= num1 && num2 >= num3){
//         return num2; 
//     } else {
//         return num3; 
//     }
// }

// document.write(max(33, 14, 5)); 

//can also use on strings, to check if same characters
// if("phrase" == "phrase"){
//     document.write("True"); 
// }

// ==== below is tutorial  18 ============ 
// switch statements 

// 0 -> Sunday
// 1 -> Monday
// ... 
// 5 -> Friday
// 6 -> Sunday

// will take a number between 0 or 6, and spit out the day of the week

// //we will accept one piece of info for this function - dayNum
// function getDayName(dayNum){
//     var day; 
    
// //could write function with if: if(dayNum == 0){ 
//     // day = "Sunday"; // then add all else if etc
// // }

// // in the case that dayNum is equal to zero, do .. 
// switch(dayNum){ 
//     case 0:
//         day = "Sunday"; 
//         break; //break out of the case statement when done
//     case 1:
//         day = "Monday"; 
//         break;
//     case 2:
//         day = "Tuesday"; 
//         break;
//     case 3:
//         day = "Wednesday"; 
//         break;
//     case 4:
//         day = "Thursday"; 
//         break;
//     case 5:
//         day = "Friday"; 
//         break;
//      case 6:
//         day = "Saturday"; 
//         break;
// // if we pass a number that is above 6, we will receive undefined. 
// // this is because we did not give day variable a value initially, it only receives value with cases
// // we need to add a default case statement
//         default:
//             day = "Day doesn't exist, " + dayNum + " isn't a valid number."
// }
//     return day; 
// }

// document.write(getDayName(60));



// ==== below is tutorial  19 ============ 
// objects
// similar to array
// with objects we are storing key value pairs
// can't have two attributes with the same key
// var person = {
//     name: "Laura", 
//     age: 23, 
//     isFemale: true,
//     occupation: "programmer",
//     //can put functions inside objects
//     printName: function(){
//         document.write("<h1>" + this.name + "</h1>");
//         // adding this allows us to access the name object within the current object
//     }
// };
// person.printName(); 

// // document.write(person); //this does not work - only prints [object Object], not my actual objects
// person.name = "Joe"; //can change individual parts of the object
// document.write(person.name); 

// var phrase = "Strings are cool"; 
// // this string is an object
// document.write(phrase.length); //object's attribute

// ==== below is tutorial  20 ============  
// real world objects 
// use strings, numbers and booleans to represent information about real life objects 

// var myMovie = {
//     title: "The Social Network", 
//     releaseYear: "2010", 
//     duration: 2.0, 
//     actors: [
//         {
//             name: "Jessie Eisenberg", 
//             birthday: new Date("October 5, 1983"), 
//             hometown: "New York, New York",
//         },
//         {
//             name: "Rooney Mara", 
//             birthday: new Date("April 17, 1985"), 
//             hometown: "Bedford, New York",
//         },
//     ]
//     // creating an array of actor objects
//     // both objects are stored in an array
// }

// document.write(myMovie.title); 
// document.write(myMovie.actors[0].name); 


// ==== below is tutorial  21 ============ 
// while loops
// loops until the condition is false.


// var i = 1; 

// // specify condition in ()
// while(i <= 10){
//     document.write(i + "<br/>");
//     // also added a break so it would be easier to read
//     i++;  
//     // adds 1 to i, same as i + 1. 
// }

// avoid infinite loop - if we would miss to add the condition to increase i by 1
// your loop would be infinite as it would always be less than 10 
// avoid it! 

//another type of while loop! 
// do while loop
// with while loop, we check to see if the () condition is true
// if check condition and it is false, we don't do any code (if we would set var i = 11)
// we can switch it around for do while loop! 

// var i = 11; 

// do{ 
//     document.write(i + "<br/>");
//     i++; 
// }while(i <= 10); 

// code is executed first, then we check the condition. 
// this would print 11 !


// ==== below is tutorial  22 ============ 
// password checker 

// var password = "wordpass"; 
// var response; 
// // response is what the user enters in 

// //use while to keep on asking the user until they adds the correct password
// while(response != password){
//     response = window.prompt("Enter password"); 
//     // response is equal to whatever they enter into the textbox 
// }; 
// // while loop will stop if they will enter the correct password, 
// // thus, we will be out of the loop and the below will be printed
// alert("You got it. "); 
// the above works! 

// if we want to keep track of how many times the user entered a password. 
// and do something if they enter an incorrect password for more than 3 times

// var password = "wordpass"; 
// var response; 
// var entryCount = 0; 
// var entryLimit = 3; 
// var error = false; 
// // it will show us if the programme has shown an error

// // && !error - if error becomes true, we want to stop looping
// while(response != password && !error){
//     // have we gone over the entry limit? 
//     if(entryCount < entryLimit){
//         response = window.prompt("Enter password"); 
//         entryCount++; // every time we get a response, we increment this count    
//     } else {
//         error = true; 
//     }
// }; 

// if(error){
//     alert("Too many entries"); 
// } else{ 
//     alert("You got it. "); 
// }; 


// ==== below is tutorial  23 ============ 
// for loops 

// every time i go through the loop, i can see which part of the loop i am in
// specialised version of while loop 

// below is a while lopp

// var i = 0; 
// // i is our index variable. when we go through the loop, it shows what iteration we are on

// while(i < 10){
//     document.write(i + "<br>") 
//     i++ 
// }

// we can write a for loop without having to write all the syntax to show our index i position
// inside () we add: index variable, add our 'while', then add what to execute when loop is finished
// so: variable, condition, function

// for(var i = 0; i < 10; i++){
//     document.write(i + "<br>") 
// }

// for loops are more common than while loops ! 
// we can loop through elements inside of an array

// var friends = ["Jim", "Stanley", "Kevin"]; 
// // document.write(friends[0] + "<br>"); 

// // below will keep looping as lond as i is less than the amount of items inside of the array
// // looping as long as we have elements
// for(var i = 0; i < friends.length; i++){
//     document.write(friends[i] + "<br>"); 
//     // we will be printing a friends name, it will be like an index friends[0], 
//     // second loop friends[1] etc
// }

// ==== below is tutorial  24 ============ 
// building a multiple choice quiz

// var questions = [
//     {
//         prompt: "What color are apples? \n(a) Red/Green\n\
//         (b) Purple\n(c) Orange", 
//         answer: "a"
//     },
//     {
//         prompt: "What color are bananas? \n(a) Teal\n\
//         (b) Magenta\n(c) Yellow", 
//         answer: "c"
//     },
//     {
//         prompt: "What color are strawberries? \n(a) Yellow\n\
//         (b) Red\n(c) Blue", 
//         answer: "b"
//     },
// ];

// var score = 0; 

// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt); 
//     // this will access the question prompts that we created, i will show which array
//     // then direct to prompt
//     if(response == questions[i].answer){
//         score++; 
//         alert("Correct"); 
//     } else{
//         alert("WRONG"); 
//     }
// }
// alert("you got " + score + "/" + questions.length); 

// // can add additional questions, our loop will pick it up! until we are out of q!


// ==== below is tutorial  25 ============ 
// nested loops & 2d arrays

// nested loop - a loop inception, loop inside of a loop
// 2d array is when each element inside of an array is itself an array

// below is a loop within a loop
// for(var i = 0; i < 4; i++){
//     for(var j = 0; j < 3; j++){
//         document.write("i= " + i + ", j= " + j + "<br>"); 
//     }
// }

// 2d array

// var numberGrid = [
//     [1, 2, 3], 
//     [4, 5, 6],
//     [7, 8, 9], 
//     [0], 
// ]; 

// //to access, we can specify the row and column that we want to access
// // document.write(numberGrid[2][0]); 

// // use 2d array in a loop-inception 
// // numberGrid.length will give us the number of rows
// // numberGrid[i].length referring to a specific row inside of a number grid, 
// // and getting lenght of that array

// for(var i = 0; i < numberGrid.length; i++){
//     for(var j = 0; j < numberGrid[i].length; j++){
//         document.write(numberGrid[i][j]); 
//     }
//     document.write("<br>");
// }

// ==== below is tutorial  26 ============ 
// for each loops 



// var friends = ["Oscar", "Angela", "Kevin"]; 

// // for(var i = 0; i < friends.length; i++){
// //     document.write(friends[i] + "<br>"); 
// // }

// // for each loop is used for looping through each element in an array
// // instead of above loop, we can write a for each loop
// // add another function in (). it will be called for every single element in the array. 

// friends.forEach(function(element){  // will pass elements into the function
//     document.write(element + "<br>")  // will print current element that the function is working on
//     // might be easier to read if using 'friend' instead of 'element'
// }); 

// var books = [
//     {
//         title: "Harry Potter", 
//         author: "JK Rowling", 
//         pages: 300
//     },
//     {
//         title: "Green Eggs & Ham", 
//         author: "Dr. Seuss", 
//         pages: 25
//     },
// ]; 

// books.forEach(function(book){
//     document.write(book.title + "<br>");
//     document.write(book.author + "<br><br>");
// });

// ==== below is tutorial  27 ============ 
// timing 
// setting a time when some function runs
// add a button to html
// add this to your html button: onclick="setTimeout()"
// this will mean that when the button is clicked, 
// after set amount of time, our function will be executed.
// 
// when using setInterval function, function will be executed every x seconds 

// in () we add: 
//  1.  name of the function - just the name, no ()
//  2. duration in miliseconds (1000 = 1s, 3000 = 3s)

// function sayHi(){
//     alert("Hi");
// }


// ==== below is tutorial  28 ============ 
// web storage
// local storage in JS, this is a mini database where we can store our files 
// when the user inputs data, exits the page or refreshes the web browser
//  and comes back to the page again, they can access it
// storing info! entering their name, come back and the value will be there! 

// var textbox = document.getElementById("textbox");
// var button = document.getElementById("btn"); 

// // we will grab the text that is entered
// // and put it into a local storage
// button.addEventListener("click", function(){
//     localStorage.name = textbox.value; 
//     // it does not have to be name, we just named it that
// });
// document.write(localStorage.name);
// // the above only works when I refresh the page after clicking save


