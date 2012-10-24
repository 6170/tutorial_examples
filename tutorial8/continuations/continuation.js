

var combine = function(x, y, cc) {
	cc(x + y);
}

// Passing a function and calling it later
combine(4,5, function(result) {
				console.log("The result was: " + result);
				});

// Regular factorial
var fact = function(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * fact(n-1);
	}
}

console.log(fact(4));

/*
(4 * recurse)
(4 * (3 * recurse))
(4 * (3 * (2 * recurse)))
recursion returns 1         (4 * (3 * (2 * 1)))
recursion returns 2         (4 * (3 * (2)))
recursion returns 6         (4 * (6))
recursion returns 24        (24)
*/

// Factorial Using Continuation Passing
var fact2 = function(n, cc) {
	if (n === 0) {
		cc(1);
	} else {
		fact2(n-1, function(tmp) {
			cc(n * tmp);
		});
	}
}
fact2(4, function(n) {
	console.log(n);
});









