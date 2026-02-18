function html_event(){
    document.getElementById("para1").textContent = "HTML Event Handler";    
}

document.getElementById("button2").onclick = dom_event;

function dom_event(){
    document.getElementById("para2").textContent = "DOM Event Handler";    
}


function listener_event(){
    document.getElementById("para3").textContent = "Event Listener";    
}
document.getElementById("button3").addEventListener("click", listener_event);

document.getElementById("button3").addEventListener("mouseout", listener_event_mo);

function listener_event_mo(){
    document.getElementById("para3").textContent += " Mouse Out";    
}

document.getElementById("button3").addEventListener("click", listener_event_another);

function listener_event_another(){
    document.getElementById("para3").textContent += " Event Listener 2";    
}


document.getElementById("name").addEventListener("keypress", 
    function(e){
        document.getElementById("para4").textContent += e.key;
    }
);

document.getElementById("name").addEventListener("keyup", chars);

function chars(e){
    console.log(e.type);
}
