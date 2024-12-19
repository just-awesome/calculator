let var1 = "";
let var2 = "";
let currentOperator = null;
let result = null;

const digit_buttons = document.querySelectorAll("button.digit");
const operator_buttons = document.querySelectorAll("button.operator");
const display = document.querySelector(".display");

digit_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentOperator === null) {
            var1 += button.textContent;  
            display.textContent = var1;
        } else {
            var2 += button.textContent;  
            display.textContent = var2;
        }
    });
});

function performOperation() {
    if (currentOperator === "+") {
        result = Number(var1) + Number(var2);
    }
    if (currentOperator === "-") {
        result = Number(var1) - Number(var2);
    }
    if (currentOperator === "*") {
        result = Number(var1) * Number(var2);
    }
    if (currentOperator === "/") {
        result = Number(var1) / Number(var2);
    }
    display.textContent = result;

    var1 = result.toString();
    var2 = "";
    currentOperator = null; 
}

operator_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (var1 !== "" && var2 !== "") {
            performOperation(); 
        }
        
        currentOperator = button.textContent; 
    });
});


document.querySelector("button.equal").addEventListener("click", () => {
    if (var1 !== "" && var2 !== "") {
        performOperation();
    }
});

const clear = document.querySelector("button.clear");
clear.addEventListener("click",() =>{
    var1 = "";
    var2 = "";
    currentOperator = null;
    result = null;
    display.textContent = 0;
})
