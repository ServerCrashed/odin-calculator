const add = (a, b) => a+b;
const sub = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

let x, y, op='';

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
    x=0, y=0, op='';
});

const str = '=AC';
const numButtons = document.querySelector(".buttons .nums");
numButtons.addEventListener("click", (e) => {
    if(!str.includes(e.target.textContent) && display.textContent.length<8){
        let t;
        t = e.target.textContent;
        if(!x) x=+t;
        else y=+t;
        display.textContent+=t;
    }
})

const opButtons = document.querySelector(".buttons .ops");
opButtons.addEventListener("click", (e) => {
    let t;
    t = e.target.textContent;
    op = t;
    display.textContent+=t;
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if(x && y && op){
        let res = operate(x,y,op);
        res = +res.toFixed(2);
        display.textContent = res;
        x=res;
    }
})