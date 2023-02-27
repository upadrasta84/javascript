//'use strict' -- this within single quotes will be more strict about the general usage of JavaScript that will enable to write cleaner code


/* to test something quickly in the browser, we can always go to developer tools/inspect in chrome, open console and check the statements there as well.*/


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const person = {
    age: 27
}

person.age = 28
// person = {}

console.log(person)

var p1 = 'test'
p1 = 'test2'
var p1 = 'test3' //ok; no problem redeclaring using var

{
    var p2 = 'test4' //var is function-scoped. if we declare var's outside of functions, they directly become global scoped.
    console.log(p2)
}

{
    let p3 = 'test5'
}

console.log(p1, p2) //since p2 is a global variable now. it can be accessed here.
//console.log(p3) //this is not ok because let is block scoped. const is also block scoped

//console.log(p5) //not ok as p5 is not declared anywhere

console.log(p4) // p4 is also not declared at this point but is declared down below. so this will work but will be undefined at this point.
var p4 = 10

//above is equivalent to
var p5
console.log(p5)
p5 = 10

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as assined value
let age = 27

age = null

console.log(age)

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// Challenge area
// 1 - 5 - true if correct - false if not correct
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(1))

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area
// Create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
let restaurant = {
    name: 'ASB',
    guestCapacity: 75,// we need commas but having no commas or having semicolons does not work
    guestCount: 0,
    checkAvailability: function (partySize) { //here checkAavailability is actually a property which happens to be a function but not an actual function
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) { //we have commas in between as they are all actually properties but not functions.
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
let name2 = '  Andrew Mead '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area

// isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

for(var i=0;i<todos.length; i++) {
    console.log(todos[i])
}

todos.splice(2, 2) //removes the 2nd parameter number of elements starting from the 1st parameter index
todos.push('Buy coffee') //appends new item at the end
todos.shift() //removes the 0th element and returns it. if no items, then undefined is returned 

console.log(`You have ${todos.length} todos!`)

todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
notes = ['note1', 'note2']
notes[2] = 'This is now the new note 3'
notes[5] = 'This is now the new note 5'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})



console.log(notes.length)
console.log(notes)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const todos3 = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

sortTodos(todos3)
console.log(todos3)

// console.log(getThingsToDo(todos))
 
// deleteTodo(todos, '!!buy food')
// console.log(todos)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const notes3 = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'eating'))

// const note = findNote(notes, 'some other office modification')
// console.log(note)

sortNotes(notes3)
console.log(notes3)

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//we have the terniary operator in js as well

var guessme = true? 'right' : 'wrong'

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//truthy and falsy values
//falsy  - false, '' empty string, undefined, NaN, 0, null

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//type coersion

console.log('5' + 5) //55

console.log('5' - 5 )//0

console.log(true + 12) //13 .. true is 1 and false is 0


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//we have arrow functions and shorthand arrow functions

const square2 = (num) => {    
    return num*num
}

const squareShort = (num) => num*num //simply returns num * num


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const s = 12;

if(s == 13) { 
    throw Error('number should not be 13!')
} else if(s == 12) {
    try {
        throw Error('number should never be effin 12') 
    } catch(e) {
        console.log('haha your throw is useless when i am around!')
    }

}




//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
console.log(day)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


let players2 = [3, 10, 4, 5, 1];

// for in
console.log("For/In"); 
for (let player in players2) { //for in iterates over the index
	console.log(player); //we get 0 1 2 3 4 with this
}

// for of
console.log("For/Of");
for (let player of players2) { //for of iterates over the values
	console.log(player); //we get 3 10 4 5 1
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/*
JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

ECMAScript is the official name of the language.

ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.

Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018).

ES1	ECMAScript 1 (1997)	First edition
ES2	ECMAScript 2 (1998)	Editorial changes

ES3	ECMAScript 3 (1999)	
Added regular expressions
Added try/catch
Added switch
Added do-while

ES4	ECMAScript 4	Never released

ES5	ECMAScript 5 (2009)
Added "strict mode"
Added JSON support
Added String.trim()
Added Array.isArray()
Added Array iteration methods
Allows trailing commas for object literals

ES6	ECMAScript 2015
Added let and const
Added default parameter values
Added Array.find()
Added Array.findIndex()

ECMAScript 2016
Added exponential operator (**)
Added Array.includes()

ECMAScript 2017
Added string padding
Added Object.entries()
Added Object.values()
Added async functions
Added shared memory

ECMAScript 2018
Added rest / spread properties
Added asynchronous iteration
Added Promise.finally()
Additions to RegExp


The Browser Object Model (BOM)
There are no official standards for the Browser Object Model (BOM).

Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

BOM
JS Window
JS Screen
JS Location
JS History
JS Navigator
JS Popup Alert
JS Timing
JS Cookies

we also have: 
JS Web APIs
Web Forms API
Web History API
Web Storage API
Web Worker API
Web Fetch API
Web Geolocation API


*/



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//destructuring:

const todo = {
    id: 'asdfpoijwermasdf',
    text: 'Pay the bills',
    completed: false
}

const printTodo = ({ text, completed }) => { // destructuring in method
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

const { text:todoText, completed, details = 'No details provided', ...others } = todo //object destructuring

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age2 = [65, 0, 13]
const [firstAge, ...otherAges] = age2 //array destructuring

console.log(firstAge)
console.log(otherAges)


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//rest parameters
const calculateAverage = (thing, ...numbers) => { //here numbers is a rest parameter
    //return (numOne + numTwo) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('age', 0, 100, 88, 64))

// Create printTeam that takes team name, coach, and players

// Team: Liberty
// Coach: Casey Penn
// Players: Marge, Aiden, Herbert, Sherry

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam(team.name, team.coach, ...team.players) //spread parameter spreading the team.players

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = [...cities, 'Santiago'] //spreading the cities parameter
console.log(cities)


//spread operations for objects..

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}
let newHouse = {
    basement: true,
    bedrooms: 3,
    ...house //spread the object house
}

console.log(house)
console.log(newHouse)
