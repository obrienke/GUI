// index.js

//create event listeners for clicking buy buttons
document.getElementById("btn1").addEventListener("click", addProduct1);
document.getElementById("btn2").addEventListener("click", addProduct2);
document.getElementById("btn3").addEventListener("click", addProduct3);
document.getElementById("btn4").addEventListener("click", addProduct4);


// initialise web storage
sessionStorage.qty1 = 0;
sessionStorage.cost1 = 0
sessionStorage.total1 = 0;
sessionStorage.qty2 = 0;
sessionStorage.cost2 = 0
sessionStorage.total2 = 0;
sessionStorage.qty3 = 0;
sessionStorage.cost3 = 0
sessionStorage.total3 = 0;
sessionStorage.qty4 = 0;
sessionStorage.cost4 = 0
sessionStorage.total4 = 0;
sessionStorage.total = 0;

// functions for adding orders to web storage
function addProduct1(){
	sessionStorage.qty1 = document.getElementById("qty1").value;
	sessionStorage.cost1 = 100
	sessionStorage.total1 = sessionStorage.cost1 * sessionStorage.qty1;
	alert("Order added. Go to cart page to see details");
}

function addProduct2(){
	sessionStorage.qty2 = document.getElementById("qty2").value;
	sessionStorage.cost2 = 150
	sessionStorage.total2 = sessionStorage.cost2 * sessionStorage.qty2;
	alert("Order added. Go to cart page to see details");
}

function addProduct3(){
	sessionStorage.qty3 = document.getElementById("qty3").value;
	sessionStorage.cost3 = 180
	sessionStorage.total3 = sessionStorage.cost3 * sessionStorage.qty3;
	alert("Order added. Go to cart page to see details");
}

function addProduct4(){
	sessionStorage.qty4 = document.getElementById("qty4").value;
	sessionStorage.cost4 = 80
	sessionStorage.total4 = sessionStorage.cost4 * sessionStorage.qty4;
	alert("Order added. Go to cart page to see details");
}
