
//Setters/getters
///////////////////////////////////////////////////////////////////////////////////

//Object Literal (keys assumed to be strings so quoting them is optional)
var sample = {url: "http://www.google.com", 'owner': 'google'};

//Property getters
console.log(sample.url);
console.log(sample['url']);

//Property Setters - setters return the value they just set as an object property
sample.url = "http://www.mysite.com";
sample['owner'] = 'Daniel Jackson';
console.log(sample.prop = "value");       // Returns the set value "value" to be console logged.
sample.prop = 3;
console.log(JSON.stringify(sample));  //We convert to a JSON string because some browsers (Chrome) store an object reference to be dumped to log, so only the final state of 'sample' would be console logged.

//Property Delete - delete only returns false if property exists AND cannot be deleted. Otherwise true.
delete sample['prop']
delete sample.prop                  //idempotent
console.log(JSON.stringify(sample));
console.log(sample);



//Prototypal Inheritiance
//////////////////////////////////////////////////////////////////////////////////////
console.log("Prototypal Inheritance");
var person = {name: "Bob",
	      	  age: 21
	     	  };

var zoo_keeper = Object.create(person);
//We only need to define the differences between the person and zoo_keeper objects.

zoo_keeper.name = "Frank";                 //This name is earlier in the prototype chain and is the one that is used for the zook_keeper object.
zoo_keeper.enter_park = function() {
    console.log(this.name + " entered the park");
};

// When an object does not have a particular property, it checks its parents along its prototype
// chain to see if the property is defined.
console.log(zoo_keeper.name)
console.log(zoo_keeper.age);              //21
console.log(zoo_keeper);
console.log(person);

zoo_keeper.enter_park();

