
// instrument object
var instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecastor", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

instruments.guitar.electric[1];
instruments.guitar.acoustic[2];
instruments.banjo[2];
instruments.mandolin[1];

for (i = 0; i < instruments.guitar.electric.length; i++) {
	console.log(instruments.guitar.electric[i]);
}

instuments.faveSingers = ["Lalah Hathaway", "John Mayer", "Fred Hammond", "Jonathan McReynolds"];

// crazy object
var crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

crazyObject.taco[1].salsa[5]
crazyObject.larry.quotes[0]
crazyObject.larry.characters[2].favourtieHobby
crazyObject.larry.nicknames[1]
crazyObject.larry.characters[1]

for (prop in crazyObject.larry.characters[2]) {
	console.log(crazyObject.larry.characters[2][prop]);
}

for (prop in crazyObject.larry.quotes) {
	console.log(crazyObject.larry.quotes[prop]);
}

ayo = {}
	ayo.hobbies = ["graphic design", "drums", "soccer", "music"],
	ayo.height = "5 feet 9 inches",
	ayo.age = 31,
	ayo.career = "web developer",
	ayo.gender = "male",
	ayo.happy = true,
	ayo.faveQuote = function() {
		console.log("One day, it'll all make sense!")
	}

ayo = {
	hobbies: ["graphic design", "drums", "soccer", "music"],
	height: "5 feet 9 inches",
	age: 31,
	career: "web developer",
	gender: "male",
	happy: true,
	faveQuote: function() {
		console.log("One day, it'll all make sense!")
	}
}
