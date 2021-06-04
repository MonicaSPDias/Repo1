//The Geometrizer
//Calculate properties of a circle, using the definitions here.
//Store a radius into a variable.
//Calculate the circumference based on the radius, and output "The circumference is NN".
//Calculate the area based on the radius, and output "The area is NN".


//example 2PI x r = C
//Math.PI is the formula for PI
//r**2 is rsquared

let r = 18;

let C = Math.PI*2*r;
let Area= Math.PI*r**2;

console.log("The area is " + Area);
console.log("The circumference is " + C);
