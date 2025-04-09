//checkout.js

document.getElementById("cost").value = sessionStorage.total;

function validate(){
	// check email, name, address or credit card field are not empty.
	let email = document.getElementById("emailAddress").value.length;
	let name = document.getElementById("name").value.length;
	let address = document.getElementById("address").value.length;
	let cc = document.getElementById("credit").value.length;
	
	if(email == 0 || name == 0 || address == 0 || cc == 0){
		alert("Please ensure email, name, address and credit card details are entered.");
		return false;
	}
	alert("Thank you for your purchase. Nike will contact you to confirm order.")
	return true;
}

function promotion(){
	let promo = document.getElementById("promo").value
	if(promo == "nike"){ // valid code, give 10% discount
		document.getElementById("cost").value *= 0.9;	
	}
}

function fastDelivery(){
	let check = document.getElementById("delivery").checked;
	if(check){ // add extra €3 to total cost
		document.getElementById("cost").value = +document.getElementById("cost").value + 3;
	}else{
		document.getElementById("cost").value = +document.getElementById("cost").value - 3;
	}
}
