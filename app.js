// The value saved to kelvin will stay constant.
const kelvin = 293;
// Convert Kelvin to Celsius
const celsius = kelvin - 273;
// Fahrenheit
let fahrenheit = celsius * 9/5 + 32;
// Math object to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
 
 let newton = celsius * (33 / 100);
 newton = Math.floor(newton);
 console.log(`newton is ${newton}`);