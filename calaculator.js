var input1 = '';
var input2 = '';
var operation;

function handleClick(input) {
    if (operation !== undefined) {
        input2 = isNaN(input2) ?  input : input2 + input;
        document.getElementById("inputArea").innerHTML = input2;
    } else {
        input1 = isNaN(input1) ?  input : input1 + input;
        document.getElementById("inputArea").innerHTML = input1;
    }    
}

function handleOperator(operator) {
    this.operation = this.operation === undefined ? operator : this.operation;
}

function getResult() {
    if (input1 === undefined || input2 === undefined || operation === undefined ) {
        alert("enter values");
    } else if (operation === "+") {
        document.getElementById("inputArea").innerHTML = parseInt(input2) + parseInt(input1);
    } else if (operation === "-") {
        document.getElementById("inputArea").innerHTML = parseInt(input1) - parseInt(input2);
    } else if (operation === "*") {
        document.getElementById("inputArea").innerHTML = parseInt(input1) * parseInt(input2);
    } else if (operation === "/") {
        document.getElementById("inputArea").innerHTML = parseInt(input1) / parseInt(input2);
    }
    input1 = '';
    input2 = '';
    operation = undefined;
}

function clearCalc() {
    input1 = '';
    input2 = '';
    document.getElementById("inputArea").innerHTML = '';
}