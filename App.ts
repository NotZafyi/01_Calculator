import inquirer from "inquirer";
import add from "./operators/add.js";
import subtract from "./operators/subtract.js";
import multiply from "./operators/multiply.js";
import divide from "./operators/divide.js";
console.log("connected")
add
let calculator;

do {

    calculator = await inquirer.prompt([
        {
            name: "operator",
            type: "checkbox",
            message: "What operation would you like to perform?",
            choices: ["add", "subtract", "multiply", "divide"]
        },
        {
            name: "number1",
            type: "number",
            message: "What is the first number?",
        },
        {
            name: "number2",
            type: "number",
            message: "What is the second number?",
        }
    ])
} while (calculator.operator[0] !== "add" && calculator.operator[0] !== "subtract" && calculator.operator[0] !== "multiply" && calculator.operator[0] !== "divide");


let answer;
let printOperator;




if (calculator.operator[0] === "add") {
    answer = add(calculator.number1, calculator.number2)
    printOperator = "+"
}
else if (calculator.operator[0] === "subtract") {
    answer = subtract(calculator.number1, calculator.number2)
    printOperator = "-"
}
else if (calculator.operator[0] === "multiply") {
    answer = multiply(calculator.number1, calculator.number2)
    printOperator = "x"
}
else if (calculator.operator[0] === "divide") {
    answer = divide(calculator.number1, calculator.number2)
    printOperator = "/"
}

console.log("--------------------------------------------")
console.log(calculator.number1 + " " + printOperator + " " + calculator.number2 + " = " + answer)
console.log("--------------------------------------------")