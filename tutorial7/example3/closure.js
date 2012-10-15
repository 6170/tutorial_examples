(function() {
	console.log("This is the console. Your html page is running the closure.js script");

	// Closure

	console.log("Closure\n");

	// Now that we know scoping, its not surprising that this works.
	var init = function() {
  		var name = "Make sure you understand JS scoping"; // Local variable inside function
  		// inner function - only available inside init()
  		var show_name = function() {                // Create a function which has access to 'name'
  			alert(name);
  		}
  		show_name();                              
  	}
  	// show_name is invoked before the execution of init completes
  	init(); 


  	//This is a bit more surprising. This works because of closure   
  	var init2 = function() {
  		var name = "Closure!";
  		var show_name = function() {
  			alert(name);
  		}
  		return show_name;
  	}
  	var func_to_show_name = init2();
  	func_to_show_name();
  	/* So calling init2 returns a function which we then call. Closure enables the function 
  	stored in func_to_show_name to remember the variable name that was available when the 
  	function was defined.
  	*/


  	// A more Practical Example

	function makeCounter(start_count, end_count) {
		var count = start_count;
		return {
				increment_count: function() {
					if (count < end_count) {
						count += 1;
					}
				},
				get_count: function() {
					return count;
				}
		}
	}
	mycounter = makeCounter(1, 4);
	console.log(mycounter.get_count());   // 1
	mycounter.increment_count();          // 2
	console.log(mycounter.get_count());
 	mycounter.increment_count();          // 3
	mycounter.increment_count();          // 4
	console.log(mycounter.get_count());
	mycounter.increment_count();          // 4
	console.log(mycounter.get_count());


	// Check and you can see that we're not polluting the global namespace.
	console.log(window);

})();     // Don't place anything below here.















