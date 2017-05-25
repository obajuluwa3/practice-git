// for loop problem #1
for (var i = 0; i <= 20; i++) {
	if ((i % 2) > 0) {
		console.log(i + " is odd.")
	} else {
		console.log(i + " is even.")
	}
}

// for loop problem #2
var myBagOfBeans = 50
for (var i = 100; i > 0; i--) {
	if ((i % 2) === 0) {
		myBagOfBeans = myBagOfBeans + i
	}
}
myBagOfBeans

// for loop problem #3
var arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];
var drinks = [];
var food = [];
var sauces = [];
for (var i = 0; i < arrayOfStringsRememberIcanNameMyVariablesAnythingIWant.length; i++) {
	if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'cheese' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'pepperoni' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'sausage' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'dough') {
		food.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'coca cola' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'lemonade' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'beer' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'wine') {
		drinks.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'ranch' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'blue cheese' || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'bbq sauce') {
		sauces.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	}
}

// for loop problem #4
var mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]
var notNumbers = []
for (var i = 0; i < mixedArray.length; i++) {
	if (typeof(mixedArray[i]) !== "number") {
		notNumbers.push(mixedArray[i]);
	} 
}

// for loop problem #5
var food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"]
var dinner = []
for (var i = 0; i < food.length; i++) {
	if (food[i] === 'bun' || food[i] === 'jalepeno cheddar' || food[i] === 'beef' || food[i] === 'hot dog' || food[i] === 'mustard' || food[i] === 'ketchup' || food[i] === 'grilled onions' || food[i] === 'egg') {
		dinner.push(food[i]);
	}
}

//for in loop problem #1
var colorObjects = {
	red: 'red', 
	blue: 'blue', 
	cyan: 'cyan'
}
for (var property in colorObjects){
	console.log(colorObjects[property]);
}

// for in loop problem #2
var seinfeld = {
	cosmo: "kramer", 
	jerry: "Seinfeld", 
	george: "constanza", 
	elaine: "bennis"
}
for (var name in seinfeld) {
	console.log(seinfeld[name]);
}

//for in loop problem #3
var profile = {
	name: "Elon Musk", 
	occupation: "space man", 
	hobbies: ["paypal", "space X", "rocket science"]
}
for (var prop in profile) {
	console.log(profile[prop]);
}


// for or for in loop problem #1
// Used for loop
var oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];
for (var i = 0; i < oldTime.length; i++) {
	console.log(oldTime[i])
}

// Used for in loop
var sandwhich = {
	name: "sunday morning special", 
	bread: "ciabatta", 
	cheese: "pepper jack", 
	green: "arugala", 
	redStuff: "cherry tomatoes", 
	heated: true
}

for (var prop in sandwhich) {
	console.log(sandwhich[prop])
}

// Used for loop
var zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"]
for (var i = 0; i < zeppelin.length; i++) {
	console.log(zeppelin[i])
}