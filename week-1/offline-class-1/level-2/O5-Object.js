// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj); //Object is a global class which have a static function keys which gives keys  as a string
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);//Object is a global class which have a static function values which gives values  as a string
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);//entries give each entry(key,value pair) as a array
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); //It will check for the key values. If it has property key it return true else false
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({name1:"Lohit"}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj); // it will merge 2 objects


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
