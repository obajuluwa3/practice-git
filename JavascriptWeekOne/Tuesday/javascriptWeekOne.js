// 1. Data Types

var num = Math.PI;
// float number

var name = "Odunayo Obajuluwa"
// string

var primeNumList = [1, 3, 5, 7];
// integer number

var eightySeven = 87;
// integer number

var takingWDI = true;
// boolean


// 2. Array Manipulation

	sampleArray = ["Nigeria", "Saudi Arabia", "United States"];
	sampleArray.shift();
	sampleArray.shift();
	sampleArray.push("Cameroon", "Israel", "Germany");
	sampleArray.pop();
	sampleArray[1] = "Japan";
	sampleArray[0] = "Where am I going?";
	sampleArray.push(8);

// 3. Conditional Trials

	canPurchaseAlcohol = function(userAge) {
		if (userAge > 18) {
			console.log("You may have a drink!");
		} else {
			console.log("You're too young to drink!");
		}
	}

// Farenheit to Celsius

FarenheitToCelsius = function(temp) {
	temp = (temp - 32)*.5556;
	return temp;
}
