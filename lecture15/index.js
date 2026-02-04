// basic standalone function
function function1(){
    alert("function1");
}

function1();
function1();

// function a value can be passed to
function function2(param1){
    alert(param1);
}

function2("function2");

// function where more than one value can be passed to it
function function3(param1, param2, arg){
    alert(param1 + " " + param2 + " " + arg);
}

function3("function3", 7, 2.5);
function3(6.2, "seven", 25);

// function where values can be passed to it and it returns a value
function function4(first, second){
    return first * second;
}
let first = prompt("Enter first number");
let second = prompt("Enter second number");

alert(function4(first, second));

//arrow function - another way of writing a function
let function5 = () => {alert("function5")}

function5();