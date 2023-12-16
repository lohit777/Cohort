//It allows a bunch of properties to put together
//Class gives us a structure of something that was reusable in multiple places
//Class is actually a blueprint
//Class will have attributes and functions
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static  myType(){
    // static are associated to class not to object i.e., not to dog/cat in this case
    //Static methods can be called directly on class without object
    console.log("Animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


class Animal1{
  constructor(name,legCount,speaks){
    this.name = name
    this.legCount = legCount
    this.speaks=speaks
  }
}

Animal.myType(); //no need to call static methods on object
let dog = new Animal("Dog","4","Bhow") ;//create object
console.log(dog.describe()); // call function on object
let cat = new Animal1("Cat","4","Meow");
console.log(cat) ;
console.log(cat['name']);


