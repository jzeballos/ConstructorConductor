//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
  this.name = name;
  this.age = age;
}


//Now create three instances of Person with data you make up

var Person1 = new Person('Francisco', 21);
var Person2 = new Person('Jorge', 31);
var Person3 = new Person('Pablo',28);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.


Person.prototype.sayName = function() {
    alert(this.name);
};
