require(["./fs", './person'], function(file, p){
	// file.read();
	// var newPerson = require('./person');

	var person1 = new p('lisi');
	var person2 = new p('wangwu');

	person1.name = 'zhaoliu';
	person2.sayHello();
});