import * as _ from "lodash";
import * as chalk from "chalk";
import { safeDump } from "js-yaml";
import { spawn } from "child_process";
import Calculator from "./lib/Calculator.ts";

(async function main() {
	try {
		const result_using_module = example_using_module();
		const result_using_npm_package_1 = example_using_npm_package_1();
		const result_using_npm_package_2 = example_using_npm_package_2();
		const result_using_node_api_1 = await example_using_node_api_1();
		const result_using_node_api_2 = example_using_node_api_2();
		const result_using_runtime_variables = example_using_runtime_variables();

		const resultsInYaml = safeDump({
			result_using_module,
			result_using_npm_package_1,
			result_using_npm_package_2,
			result_using_node_api_1,
			result_using_node_api_2,
			result_using_runtime_variables,
		});

		console.log(resultsInYaml);
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(-1);
	}
})();

function example_using_module() {
	const calculator = new Calculator();
	return calculator.addition(1, 1);
}

function example_using_npm_package_1() {
	return _.defaults({ a: 1 }, { a: 3, b: 2 });
}

function example_using_npm_package_2() {
	return chalk.blue("Hello world!");
}

function example_using_node_api_1() {
	return new Promise(function (resolve, reject) {
		const ls = spawn("ls", ["-1", "/usr"]);
		var stdout = "";
		var stderr = "";

		function splitLines(str: string) {
			return str.match(/[^\r\n]+/g);
		}

		ls.stdout.on("data", (data: string) => {
			stdout += data;
		});

		ls.stderr.on("data", (data: string) => {
			stderr += data;
		});

		ls.on("close", (code: number) => {
			const stdoutArr = splitLines(stdout);
			const stderrArr = splitLines(stderr);

			if (code !== 0) {
				reject({ stdoutArr, stderrArr, code });
				return;
			}

			resolve({ stdoutArr, stderrArr });
		});
	});
}

function example_using_node_api_2() {
	const { readdirSync } = require("fs");
	return readdirSync("/usr");
}

function example_using_runtime_variables() {
	const platform = process.platform;
	return { platform, __dirname };
}
