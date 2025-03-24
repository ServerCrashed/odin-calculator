const add = (a, b) => a+b;
const sub = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

let x=0, y=0, op='';

function operate(a, b, o){
    switch(o){
        case "+":
            return add(a,b);
            break;
        case "-":
            return sub(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        default:
            return "Invalid";
    }
}

const display = document.querySelector(".display");

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent='';
});