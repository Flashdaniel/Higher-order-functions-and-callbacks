/** @format */

// CHALLENGE 1
function createFunction() {
	return function greeting() {
		console.log("Hello, World!");
	};
	return greeting;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
	return function printInput() {
		console.log(input);
	};
	return printinput;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
	let counter = 0; // this variable is outside incrementCounter's scope
	function incrementCounter() {
		counter++;
		console.log("counter", counter);
	}
	return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
	return function addInput(input) {
		console.log("result", input + x);
	};
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
	let call = 0;
	let result;
	return function callOnce(i) {
		if (call === 0) result = func(i);
		call++;
		return result;
	};
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
	let timer = 0;
	return (val) => {
		if (++timer >= count) return func(val);
	};
}

// /*** Uncomment these to check your work! ***/
const called = function () {
	console.log("hello");
};
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {
	setTimeOut(() => func(...args), wait);
}

// CHALLENGE 7
function rollCall(names) {
	let count = 0;
	return () => {
		if (count === 0) {
			console.log(names[0]);
			++count;
		} else if (count === names.length) {
			console.log("Everyone accounted for");
		} else {
			console.log(names[count++]);
		}
	};
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

function getEmptyRoom(rooms) {
	rooms.reduce((a, c) => c.reduce((ac, cv) => cv));
}

getEmptyRoom(rooms);
