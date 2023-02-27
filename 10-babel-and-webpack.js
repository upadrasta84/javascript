/*
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of 
JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.

Babel plugins transform syntax that is not widely supported into a backward-compatible version. For example, arrow functions, which are specified in ES6, 
are converted into regular function declarations. Non-standard JavaScript syntax such as JSX can also be transformed.

installed babel using 
npm i --save-dev babel-cli

to generate cross-browser output, do 
npx babel filename.js -o output.js
*/

var test = 'test1'
console.count(test)

class MyTest {
    mymethod() {
        console.count('test')
    }
}