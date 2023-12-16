/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
function computeExpr(str = ''){
  str = str.replace(/\s/g, ""); //here \s means spaces. We are removing spaces by replacing space without space
  // here /g is global modifier which indicates it will replace all the instances of space without spaces 
  const result = eval(str);
  if (typeof result !== 'number' || isNaN(result)) {
      throw new Error('Invalid result');
  }
  else if (!isFinite(result)) {
    throw new Error('Division by zero');
  }
  return result;
  
};

class Calculator {
    constructor(){
      this.result  = 0;
    }
    add(a)
    {
      this.result+= a  ;
    }
    subtract(a)
    {
      this.result-=  a ;
    }

    multiply(a)
    {
      this.result*= a ;
    }

    divide(a)
    {
      if(a == 0){
        throw new Error("Division by zero is not possible.");
      }
      this.result =  this.result / a ;
    }
    clear(){
      this.result = 0;
    }
    getResult(){
      return this.result ;
    }
    calculate(expr){
      this.result = computeExpr(expr);  
    }
    


}

module.exports = Calculator;
