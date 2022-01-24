// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
const numbers = [2, 5, 13, 18, 22, 35];

function doubledNumbers(array) {
	return array.map((number) => number * 2);
}

doubledNumbers(numbers);

function doubledNumbers2(array) {
	return array.map(function (number) {
		return number * 2;
	});
}

doubledNumbers2(numbers);

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

function filterEven(array) {
	return array.filter((number) => number % 2 == 0);
}

filterEven(numbers);

// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const students = [
	{
		name: "Pete",
	},
	{
		name: "John Doe",
	},
	{
		name: "Jane Doe",
	},
];

function filterStudents(array) {
	return array.filter((student) => student.name.length >= 5);
}

filterStudents(students);

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

function largestNumber() {
	let largest = Math.max(...arguments);
	return largest;
}

largestNumber(...numbers);

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

function sum() {
	const args = [...arguments];
	let sumNumbers = args.reduce(function (previousValue, currentValue) {
		return previousValue + currentValue;
	}, 0);
	return sumNumbers;
}

sum(...numbers);
