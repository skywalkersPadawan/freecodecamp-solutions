function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {}

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
};
// Add your code above this line

let beagle = new Dog();

beagle.eat();
beagle.bark();
