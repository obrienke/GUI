// Target an element by its Id attribute
let heading = document.getElementById("head1");

alert(heading.innerHTML);

heading.innerHTML = "Updated Heading";

// Target elements by value assigned to their class attribute
let paraEls = document.getElementsByClassName("paras"); // returns a collection. Think of it like an array.
//alert(paraEls.length)
//paraEls[0].innerHTML = "Para 1 Updated";
//paraEls[1].innerHTML = "Para 2 Updated";
for(let i = 0; i < paraEls.length; i++){
    paraEls[i].innerHTML = "Para " + (i + 1) + " updated";
}

// Target elements by the element type - e.g. <p>, <h1>
let allParas = document.getElementsByTagName("p"); // returns a collection. Think of it like an array.
for(let i = 0; i < allParas.length; i++){
    allParas[i].style.color = "red";
}

function updateText(){
    document.querySelector("#button1").innerHTML = "Clicked"; // Alternative to using getElementById()
    for(let i = 0; i < document.querySelectorAll(".paras").length; i++){
        // Alternative to getElementsByClassName. 
        // Could be used for targetting elements as well. E.g. for all <p> elements, use document.querySelectorAll("p")
        document.querySelectorAll(".paras")[i].innerHTML +=  " QuerySelectorAll" 
    }
    alert("Name entered: " + document.getElementById("name").value)
}
