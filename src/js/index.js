/* **************************************************************
Numbers and the Math Object
************************************************************** */


const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);

/* **************************************************************
String Methods and Concatenation
************************************************************** */

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);

/* **************************************************************
Template Literals
************************************************************** */

const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + '</li>' +
'<li>Job: ' + job + '</li>' +
'<li>City: ' + city + '</li>' +
'</ul>';

function hello() {
    return 'hello';
}

// With template strings (es6)
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;


/* **************************************************************
Arrays Methods
************************************************************** */

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num) {
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);


/* ----------------------------------------------------------
---------------------------------------------------------- */

    let _arr = Array(10).fill().map(item => parseFloat(Math.random().toFixed(1)));
//  _arr = Array(10).fill(0.19);

console.log(_arr);

let result;

let result_ = _arr.includes(0.1);
let result1 = _arr.some(item => item === 0.19);
let result2 = _arr.every(item => item === 0.19);
let result3 = _arr.indexOf(_arr.find(item => item === 0.1));
let result5 = _arr.map(item => item * 2);
let result6 = _arr.filter(item => item > 0.2);
let result7 = _arr.reduce((ac, val) => {

    console.log(this);

    return ac + val;
});

let result8 = result7 / _arr.length;
console.log(result3);

let result4 = saca();

function saca() {

    if (result3 !== -1) {
        result4 = _arr.splice(result3, 1);
    }

};


console.log(result_, result1, result2, _arr, result4, result5, result6, result7, result8);


/* **************************************************************
Object Literals
************************************************************** */

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function () {
        return 2017 - this.age;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 23 },
    { name: 'Nancy', age: 40 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}


/* **************************************************************
Dates and Times
************************************************************** */

let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);


/* **************************************************************
If statements and Comparison Operators
************************************************************** */

// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');

if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');

/* **************************************************************
Switches
************************************************************** */

const color = 'yellow';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);




/* **************************************************************
Function Declarations and Function Expressions
************************************************************** */

// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function (x = 3) {
    return x * x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');

// PROPERTY METHODS

const todo = {
    add: function () {
        console.log('Add todo..');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function () {
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


/* **************************************************************
General Loops
************************************************************** */

// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}




/* **************************************************************
Window Object, Methods and Properties
************************************************************** */

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);

/* **************************************************************
variables environment let var const Scopes
************************************************************** */

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log('Global Scope: ', a, b, c);

/* **************************************************************
Document Object
************************************************************** */

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
    console.log(script.getAttribute('src'));
});

console.log(val);

/* **************************************************************
DOM Selectors for Single Elements
************************************************************** */

// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

/* **************************************************************
DOM Selectors for Multiple Elements
************************************************************** */

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index) {
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
    li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}


console.log(items);





/* **************************************************************
Traversing the DOM
************************************************************** */

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);

/* **************************************************************
Creating Elements
************************************************************** */

// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

/* **************************************************************
Removing and Replacement of Elements
************************************************************** */

// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

/* **************************************************************
Event Listeners and the Event Object
************************************************************** */

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    //console.log('Clicked');

    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}


/* **************************************************************
Mouse Events
************************************************************** */

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}



/* **************************************************************
Keyboard and Inputs Events
************************************************************** */

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    //console.log(e.target.value);

    // heading.innerText = e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}


/* **************************************************************
Event Bubbling and Event Delegation
************************************************************** */

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //   console.log('delete item');
    // }

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}


/* **************************************************************
Local Storage and Session Storage
************************************************************** */

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function (e) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
    console.log(task);
});


/* **************************************************************
Constructor and the THIS word
************************************************************** */

// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());



/* **************************************************************
Built in Constructors
************************************************************** */

// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if (name2 === 'Jeff') {
    console.log('YES');
} else {
    console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);


/* **************************************************************
Prototypes Explained
************************************************************** */


//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //   const diff =  Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));






/* **************************************************************
Prototypal Inheritance
************************************************************** */

// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());



/* **************************************************************
Object Create
************************************************************** */

const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: { value: 'Brad' },
    lastName: { value: 'Traversy' },
    age: { value: 36 }
});

console.log(brad);

console.log(brad.greeting());



/* **************************************************************
ES6 Classes 
************************************************************** */

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);

console.log(Person.addNumbers(1, 2));




/* **************************************************************
ES6 SubClasses
************************************************************** */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());


/* **************************************************************
XHR Objects  & Working with Methods
************************************************************** */


document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();
    
    // OPEN
    xhr.open('GET', 'data.txt', true);
    
    // console.log('READYSTATE', xhr.readyState);
    
    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }
    
    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    
    // xhr.onreadystatechange = function() {
        //   console.log('READYSTATE', xhr.readyState);
        //   if(this.status === 200 && this.readyState === 4){
            //     console.log(this.responseText);
            //   }
            // }
            
            xhr.onerror = function() {
                console.log('Request error...');
            }
            
            xhr.send();
            
            
            // readyState Values
            // 0: request not initialized 
            // 1: server connection established
            // 2: request received 
            // 3: processing request 
            // 4: request finished and response is ready
            
            
            // HTTP Statuses
            // 200: "OK"
            // 403: "Forbidden"
            // 404: "Not Found"
        }

        /* **************************************************************
        Working with AJAX - JSON Object
        ************************************************************** */
       
       document.getElementById('button1').addEventListener('click', loadCustomer);
       
       document.getElementById('button2').addEventListener('click', loadCustomers);
       
       // Load Single Customer
       function loadCustomer(e) {
           const xhr = new XMLHttpRequest();
           
           xhr.open('GET', 'customer.json', true);
           
           xhr.onload = function(){
               if(this.status === 200) {
                   // console.log(this.responseText);
                   
                   const customer = JSON.parse(this.responseText);
                   
                   const output = `
                   <ul>
                   <li>ID: ${customer.id}</li>
                   <li>Name: ${customer.name}</li>
                   <li>Company: ${customer.company}</li>
                   <li>Phone: ${customer.phone}</li>
                   </ul>
                   `;
                   
                   document.getElementById('customer').innerHTML = output;
                }
            }
            
  xhr.send();
}


// Load Customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'customers.json', true);
    
    xhr.onload = function(){
    if(this.status === 200) {
        // console.log(this.responseText);
        
        const customers = JSON.parse(this.responseText);
        
        let output = '';
        
        customers.forEach(function(customer){
            output += `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>
            `;
        });
        
        document.getElementById('customers').innerHTML = output;
    }
}

xhr.send();
}

/* **************************************************************
Data from External API - Chuck Norris Project
************************************************************** */



document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = '';
            
            if(response.type === 'success') {
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }
            
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    
    xhr.send();
    
    e.preventDefault();
}

/* **************************************************************
Callbacks functions
************************************************************** */

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
    //   setTimeout(function() {
        //     posts.push(post);
        //   }, 2000);
        // }
        
        
        // function getPosts() {
            //   setTimeout(function() {
                //     let output = '';
                //     posts.forEach(function(post){
                    //       output += `<li>${post.title}</li>`;
                    //     });
                    //     document.body.innerHTML = output;
                    //   }, 1000);
                    // }
                    
                    // createPost({title: 'Post Three', body: 'This is post three'});
                    
                    // getPosts();
                    
                    
                    function createPost(post, callback) {
                        setTimeout(function() {
                            posts.push(post);
                            callback();
                        }, 2000);
                    }
                    
                    
                    function getPosts() {
                        setTimeout(function() {
                            let output = '';
                            posts.forEach(function(post){
                                output += `<li>${post.title}</li>`;
                            });
    document.body.innerHTML = output;
}, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

/* **************************************************************
Custom HTTP Library - AJAX calls - Part 1
************************************************************** */





function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();

}

/* --------------------------
-------------------------- */

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request

const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});


/* **************************************************************
Custom HTTP Library - AJAX calls - Part 2
************************************************************** */


function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

/* --------------------------
-------------------------- */


const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});


/* **************************************************************
E6 Promises
************************************************************** */

const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);
            
            const error = false;
            
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
    console.log(err);
});

/* **************************************************************
Fetch API
************************************************************** */


document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
    fetch('test.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
}


// Get local json data
function getJson() {
    fetch('posts.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}


// Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}

/* **************************************************************
Arrow Functions
************************************************************** */


document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}


// Get local json data
function getJson() {
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

/* **************************************************************
Custom HTTP Library  -  Fetch with Promises
************************************************************** *//**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

 class EasyHTTP {
   
  // Make an HTTP GET Request 
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

   // Make an HTTP PUT Request
   put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted...'))
      .catch(err => reject(err));
    });
  }

 }

 
/* -------------------------------------
------------------------------------- */


const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));


/* **************************************************************
Async  - Await
************************************************************** */





// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));



/* **************************************************************
Custom HTTP - Library with  Async Await
************************************************************** */


/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

 class EasyHTTP {
  // Make an HTTP GET Request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
   
  }

   // Make an HTTP PUT Request
   async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const resData = await 'Resource Deleted...';
    return resData;
  }

 }

 
/* -------------------------------------
------------------------------------- */



const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));



/* **************************************************************
Error Handling -  Try Catch
************************************************************** */



const user = {email: 'jdoe@gmail.com'};

try {
    // Produce a ReferenceError
    // myFunction();
    
    // Produce a TypeError
    // null.myFunction();

    // Will produce SyntaxError
    // eval('Hello World');
    
    // Will produce a URIError
    // decodeURIComponent('%');
    
    if(!user.name) {
        //throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
    
} catch(e) {
    console.log(`User Error: ${e.message}`);
    // console.log(e);
    // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');



/* **************************************************************
Regular Expressions - Part 1
************************************************************** */


let re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found retuns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);




/* **************************************************************
Regular Expressions - Part 2
************************************************************** */


let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// String to match
const str = 'Gray?';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);



/* **************************************************************
Regular Expressions - Part 3
************************************************************** */



let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// String to match
const str = '3x3x3x';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);




/* **************************************************************
Regular Expressions - Part 4
************************************************************** */


let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character 


// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/;    // Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word character
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'dkjekdxydjekdj';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);



/* **************************************************************
Regular Expressions - Part 5 - Form Validation
************************************************************** */



// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}


/* **************************************************************
Iterators & Generators
************************************************************** */


// Iterator Example
// function nameIterator(names) {
    //   let nextIndex = 0;
    
    //   return {
        //     next: function() {
            //       return nextIndex < names.length ?
            //       { value: names[nextIndex++], done: false } :
            //       { done: true }
            //     }
            //   }
            // }
            
            // // Create an array of names
            // const namesArr = ['Jack', 'Jill', 'John'];
            // // Init iterator and pass in the names array
            // const names = nameIterator(namesArr);
            
            // console.log(names.next().value);
            // console.log(names.next().value);
            // console.log(names.next().value);
            // console.log(names.next().value);
            
            // Generator Example
            // function* sayNames() {
                //   yield 'Jack';
                //   yield 'Jill';
                //   yield 'John';
                // }
                
                // const name = sayNames();

                // console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
function* createIds() {
    let index = 1;
    
    while(true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



/* **************************************************************
Profile Scroller - Iterator Mini Project
************************************************************** */


const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;
    
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;
        
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;
    
    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true }
        }
    };
}

/* **************************************************************
Symbols
************************************************************** */


// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
// for(let i in myObj) {
    //   console.log(`${i}: ${myObj[i]}`);
    // }
    
    // Symbols are ignored by JSON.stringify
    console.log(JSON.stringify({key: 'prop'}));
    console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
    
    
    
    /* **************************************************************
        Destructuring
    ************************************************************** */
   
   
   // Destructuring Assignment
   
   let a, b;
   [a, b] = [100, 200];
   // Rest pattern
   [a, b, c, ...rest] = [100, 200, 300, 400, 500];
   
   ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
   ({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });
   
   // Array Destructuring
   
   // const people = ['John', 'Beth', 'Mike'];
   
   // const [person1, person2, person3] = people;
   
   // console.log(person1, person2, person3);
   
   // Parse array returned from function
   // function getPeople() {
       //   return ['John', 'Beth', 'Mike'];
       // }
       
       // let person1, person2, person3;
       // [person1, person2, person3] = getPeople();
       
       // console.log(person1, person2, person3);
       
       // Object Destructuring
       
       const person = {
           name: 'John Doe',
           age: 32,
           city: 'Miami',
           gender: 'Male',
           sayHello: function(){
               console.log('Hello');
            }
        }
        
        // Old ES5
        // const name = person.name,
        //       age = person.age,
        //       city = person.city;
        
        // New ES6 Destructuring
        const { name, age, city, sayHello } = person;
        
        console.log(name, age, city);
        
        sayHello();
        
        /* **************************************************************
            ES6 Maps
        ************************************************************** */
       
       
       // MAPS = key-value pairs - can use ANY type as a key or value
       
       const map1 = new Map();
       
       // Set Keys
       const key1 = 'some string',
       key2 = {},
       key3 = function() {};
       
       // Set map values by key
       map1.set(key1, 'Value of key1');
       map1.set(key2, 'Value of key2');
       map1.set(key3, 'Value of key3');
       
       // Get values by key
       // console.log(map1.get(key1), map1.get(key2), map1.get(key3));
       
       // Count values
       // console.log(map1.size);
       
       // ITERATING MAPS
       
       // Loop using for...of to get keys and values
       // for(let [key, value] of map1) {
           //   console.log(`${key} = ${value}`);
           // }
           
           // Iterate keys only
           // for(let key of map1.keys()) {
               //   console.log(key);
               // }
               
               // Iterate values only
               // for(let value of map1.values()) {
                   //   console.log(value);
                   // }
                   
                   // Loop with forEach
// map1.forEach(function(value, key){
    //   console.log(`${key} = ${value}`);
    // });
    
    // CONVERT TO ARRAYS
    
    // Create an array of the key value pairs
    const keyValArr = Array.from(map1);
    console.log(keyValArr);
    
    // Create an array of the values
    const valArr = Array.from(map1.values());
    console.log(valArr);
    
    // Create an array of the keys
    const keyArr = Array.from(map1.keys());
    console.log(keyArr);
    


    /* **************************************************************
        ES6 Sets
    ************************************************************** */
   
   // SETS - Store unique values of any type
   
   const set1 = new Set();
   
   // Add values to set
   set1.add(100);
   set1.add('A string');
   set1.add({name: 'John'});
   set1.add(true);
   set1.add(100);
   
   // const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'John'}));

// Delete from set
// set1.delete(100);

// console.log(set1);

// ITERATING THROUGH SETS

// For..of 
// for(let item of set1) {
    //   console.log(item);
    // }
    
    // ForEach Loop
    // set1.forEach((value) => {
        //   console.log(value);
        // });
        
// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);



/* **************************************************************
    Module & Revealing Module Pattern
************************************************************** */


// Basic structure

// (function() {
    //   // Declare private vars and functions
    
    //   return {
        //     // Declare public var and functions
        //   }
        // })();
        
        // STANDARD MODULE PATTERN
        // const UICtrl = (function() {
            //   let text = 'Hello World';
            
            //   const changeText = function() {
                //     const element = document.querySelector('h1');
                //     element.textContent = text;
                //   }
                
                //   return {
                    //     callChangeText: function() {
                        //       changeText();
                        //       // console.log(text);
                        //     }
                        //   }
                        // })();
                        
                        // UICtrl.callChangeText();
                        // // UICtrl.changeText();
                        
                        // console.log(UICtrl.text);
                        
                        // REVEALING MODULE PATTERN
                        const ItemCtrl = (function() {
                            let data = [];
                            
                            function add(item) {
                                data.push(item);
                                console.log('Item Added....');
                            }
                            
                            function get(id) {
                                return data.find(item => {
                                    return item.id === id;
                                });
                            }
                            
                            return {
                                add: add,
                                // get: get
                            }
                        })();
                        
                        ItemCtrl.add({id: 1, name: 'John'});
                        ItemCtrl.add({id: 2, name: 'Mark'});
                        console.log(ItemCtrl.get(2));
                        
                        
                        
                        
    /* **************************************************************
        Singleton Pattern
    ************************************************************** */
   
   const Singleton = (function() {
       let instance;
       
       function createInstance() {
           const object = new Object({name:'Brad'});
           return object;
        }
        
        return {
            getInstance: function() {
                if(!instance){
                    instance = createInstance();
                }
                return instance;
            }
        }
    })();
    
    const instanceA = Singleton.getInstance();
    const instanceB = Singleton.getInstance();
    
    console.log(instanceA === instanceB);
    
    // console.log(instanceA);
    


    /* **************************************************************
        Factory Pattern
    ************************************************************** */
   
   function MemberFactory() {
       this.createMember = function(name, type) {
           let member;
           
           if(type === 'simple') {
               member = new SimpleMembership(name);
            } else if (type === 'standard') {
                member = new StandardMembership(name);
            } else if (type === 'super') {
                member = new SuperMembership(name);
            }
            
            member.type = type;
            
            member.define =  function() {
                console.log(`${this.name} (${this.type}): ${this.cost}`);
            }
            
            return member;
        }
    }
    
    const SimpleMembership = function(name) {
        this.name = name;
        this.cost = '$5';
    }
    
    const StandardMembership = function(name) {
        this.name = name;
        this.cost = '$15';
    }
    
    const SuperMembership = function(name) {
        this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members);

members.forEach(function(member) {
    member.define();
});



/* **************************************************************
    Observer Pattern
************************************************************** */


function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item){
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}



/* **************************************************************
    Mediator Pattern
************************************************************** */


const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; // list of users
    
    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Single user message
                to.recieve(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello Everyone!!!!');



/* **************************************************************
    State Pattern
************************************************************** */


const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
`;
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});
