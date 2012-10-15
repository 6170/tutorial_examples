console.log("This is the console. Your html page is running the scoping.js script");

// Scoping

console.log("Scoping\n");

if (true) {
	var x = 5;                            // Global Variable                     
}
console.log(x);                           // Will print 5

for (var i=0; i < 10; i+=1) {
	var index = i                         // Also a global variable
}
console.log(i);                           // Both will print 9
console.log(index);

// Why would we want to make a variable "private"?
// Create local variables using function scoping

var funcy = function() {
	var secret = "abcdef";                 // Local to the function funcy
}
//console.log(secret);                    // Attempt to read secret, but secret is a local variable

// Namespace pollution
console.log(window);










