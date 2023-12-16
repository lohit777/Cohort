function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value); //parseInt is a global function.It will convert string to a integer.
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");  // If we have characters at end it will parse string to Int butif the 
//characters are before the number it will not convert sting to Integer
explainParseInt("3.14"); //As it is an integer it gives o/p 3

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42hfgjsedg");
explainParseFloat("aswasfse42hfgjsedg");
explainParseFloat("42px");
//parseFloat is same as parseint but it will convert string to float instead of int.