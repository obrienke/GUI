let x = 1;
do{
    x = prompt("enter a number other than 1");
    x = Number(x);
}while(x==1)

function function1(){
    alert("function 1");
}

function1();
function1();

function function2(number){
    alert(number);
}

function2(5);
function2(10);

function function3(number1, number2){
    alert(number1 + number2);
}

function3(5, 10);

function function4(number1, number2){
    return number1 + number2;
    alert()
}

let result = function4(3,7); 
alert(result);


let function5 = (firstname, surname) => {
    let fullname = firstname + " " + surname;
    return fullname;
}

let name = function5("Kevin","O'Brien");
alert("arrow: " + name);

x = "2";
let y = 2;

if(x==y){
	alert("match");
}
x = 2;
if(x===y){
	alert("match again");
}