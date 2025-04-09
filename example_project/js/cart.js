// cart.js - read values from web storage and display these values on cart.html 

document.getElementById("qty1").textContent = sessionStorage.qty1;
document.getElementById("cost1").textContent = sessionStorage.cost1;
document.getElementById("total1").textContent = sessionStorage.total1;

document.getElementById("qty2").textContent = sessionStorage.qty2;
document.getElementById("cost2").textContent = sessionStorage.cost2;
document.getElementById("total2").textContent = sessionStorage.total2;

document.getElementById("qty3").textContent = sessionStorage.qty3;
document.getElementById("cost3").textContent = sessionStorage.cost3;
document.getElementById("total3").textContent = sessionStorage.total3;

document.getElementById("qty4").textContent = sessionStorage.qty4;
document.getElementById("cost4").textContent = sessionStorage.cost4;
document.getElementById("total4").textContent = sessionStorage.total4;

let total = +sessionStorage.total1 + +sessionStorage.total2; 
total += +sessionStorage.total3 + +sessionStorage.total4;

document.getElementById("totalCost").textContent = total;

// required for checkout.html
sessionStorage.total = total;
