export declare enum Operation {
	Addition = 0,
	Substraction = 1,
	Division = 2,
	Multiplication = 3,
}
export default class Calculation {
	a: number;
	b: number;
	operation: Operation;
	constructor(a: number, b: number, operation: Operation);
	get result(): number;
}
