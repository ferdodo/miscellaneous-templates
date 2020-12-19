// ../calculation/dist/calculation.js
var Operation;
(function(Operation2) {
  Operation2[Operation2["Addition"] = 0] = "Addition";
  Operation2[Operation2["Substraction"] = 1] = "Substraction";
  Operation2[Operation2["Division"] = 2] = "Division";
  Operation2[Operation2["Multiplication"] = 3] = "Multiplication";
})(Operation || (Operation = {}));
var Calculation = class {
  constructor(a2, b2, operation) {
    this.a = a2;
    this.b = b2;
    this.operation = operation;
  }
  get result() {
    switch (this.operation) {
      case 0:
        return this.a + this.b;
      case 1:
        return this.a - this.b;
      case 2:
        return this.a / this.b;
      case 3:
        return this.a * this.b;
    }
  }
};
var calculation_default = Calculation;

// src/app.ts
var a = 4;
var b = 2;
var addition = new calculation_default(a, b, Operation.Addition);
console.log(`${a} + ${b} is ${addition.result}`);
var substraction = new calculation_default(a, b, Operation.Substraction);
console.log(`${a} - ${b} is ${substraction.result}`);
var division = new calculation_default(a, b, Operation.Division);
console.log(`${a} / ${b} is ${division.result}`);
var multiplication = new calculation_default(a, b, Operation.Multiplication);
console.log(`${a} * ${b} is ${multiplication.result}`);
