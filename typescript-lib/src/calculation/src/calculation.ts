export enum Operation {
	Addition,
	Substraction,
	Division,
	Multiplication,
}

export default class Calculation {
	a: number;
	b: number;
	operation: Operation;

	constructor(a: number, b: number, operation: Operation) {
		this.a = a;
		this.b = b;
		this.operation = operation;
	}

	get result() {
		switch (this.operation) {
			case Operation.Addition:
				return this.a + this.b;

			case Operation.Substraction:
				return this.a - this.b;

			case Operation.Division:
				return this.a / this.b;

			case Operation.Multiplication:
				return this.a * this.b;
		}
	}
}
