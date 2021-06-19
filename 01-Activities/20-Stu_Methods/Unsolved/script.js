var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
// adds a string at the beginning without removing
constellations.unshift("Canis Major")
console.log(constellations)

// removes from the end of the array
planets.pop();
console.log(planets);

// joins two arrays and creates a new array
var galaxy =constellations.concat(planets);
console.log(galaxy);

// capitalizes letters
let starBigLetters = star.toUpperCase();
console.log(starBigLetters);