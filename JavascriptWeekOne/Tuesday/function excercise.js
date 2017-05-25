// 1. Create a function that returns a random number
randomNumber = function() {
	return Math.random();
}

// 2. Create a function that randomly returns heads or tails
headsOrTails = function() {
	var chosenValue = Math.random() < 0.5 ? "heads" : "tails";
	return chosenValue;
}

// 3. Create a function that takes two numbers and returns their sum
addTwoNumbers = function(num1, num2) {
	return num1 + num2
}

// 4. Create a function that takes an array and an index as an argument and returns the element from the array at that index
arrayIndex = function(arrayName, index) {
	return arrayName[index]
}

// 5. Create a function that takes an array as an argument and prints every element in the array
printArray = function(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		console.log("The first element in this array is " + myArray[i]);
	}
}