// src/calculation.ts
var Operation;
(function (Operation2) {
	Operation2[(Operation2["Addition"] = 0)] = "Addition";
	Operation2[(Operation2["Substraction"] = 1)] = "Substraction";
	Operation2[(Operation2["Division"] = 2)] = "Division";
	Operation2[(Operation2["Multiplication"] = 3)] = "Multiplication";
})(Operation || (Operation = {}));
var Calculation = class {
	constructor(a, b, operation) {
		this.a = a;
		this.b = b;
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
export { Operation, calculation_default as default };
