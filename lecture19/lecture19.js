/* Function to update the content of paragraph with id 'para1'
   This function is invoked from clicking on Paragraph 1.
   Paragraph 1 assigns this function to its onclick attribute */
function htmlHandler(){
    document.getElementById("para1").innerHTML += " updated";
}

// Get the paragraph with id 'para2' and assign it to variable x
let x = document.getElementById("para2");
// Assign the 'domHandler' function to execute on click event
x.onclick = domHandler;

// Function to update the content of paragraph with id 'para2' when clicked
function domHandler(){
    x.innerHTML += " updated";
} 

// Get the button with id 'button1' and assign it to variable y
let y = document.getElementById("button1");
// Add a click event listener to execute the 'listen' function
y.addEventListener("click", listen);

// Function to display an alert when the button is clicked
function listen(){
    alert("event listener");
}

// Get the paragraph with id 'para3' and assign it to variable z
let z = document.getElementById("para3");

// Add a mouseover event listener to change the paragraph content
z.addEventListener("mouseover", mover);

// Function to change content when the mouse hovers over 'para3'
function mover(){
    z.innerHTML = "<h2>Mouse over</h2>";
}

// Add a mouseout event listener to revert content back to original text
z.addEventListener("mouseout", mout);

// Function to reset content when the mouse moves away from 'para3'
function mout(){
    z.innerHTML = "Paragraph 3";   
}

// Get the input field with id 'name' and assign it to variable n
let n = document.getElementById("name");

// Add a keypress event listener to execute the 'kp' function
n.addEventListener("keypress", kp);

// Function to display an alert when a key is pressed inside the input field
function kp(){
    alert("keypress");
}
