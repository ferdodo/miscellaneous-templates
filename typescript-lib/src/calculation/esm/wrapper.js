import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { default: calculation_default, Operation } = require("../dist/calculation.js");

export {
	Operation,
	calculation_default as default
};