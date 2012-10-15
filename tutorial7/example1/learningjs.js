console.log("This is the console. Your html page is running the learningjs.js script");

// Types, Variables, Literals

console.log("Types, Variables, Literals\n");
// Number literals
var my_num = 5.0;
var your_num = 99;
// String literal
var sample_string = "The sum of our numbers is ";
// Type Conversion
console.log(sample_string + (my_num + your_num));
// undefined
var some_var;
console.log(some_var);

// Literal Object
var course6005 = {name: "Elements of Software Construction", number: 6.005};
var course = {name: "Software Studio", number: 6.170};
console.log(course);                           // Use the Console Tool to expand.
// Function 
var show_course = function(course) {          // Look, I'm storing a function in a variable.
	console.log("You're in " + course.name);
}
// Function invocation
show_course(course);                          // What do I do? Should be simple.

// But you're used to Object having methods right? Let's make it happen.
var better_course = {
	name: "Software Studio",
	number: "6.170",
	get_prereqs: function() {
		// Traverse a graph of classes and compute all prereqs rather than hard coding
		// Populate an array to be returned (mock this by hardcoding it)
		result = [course6005,]        //Look, you made an array too!
		return result
	},
	show: function() {
		console.log("You're still in " + this.name);
	} 

}
console.log(better_course.get_prereqs());
better_course.show();






