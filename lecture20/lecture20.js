let array1 = [100, 200, 300, "two"];
console.log(array1);
console.log(array1.length);
array1[3] = 400;
console.log(array1);
array1.push(500);
console.log(array1);
array1.splice(3, 2);
console.log(array1);

let names = ["Mayara", "Jacob"];
console.log(names.sort());
let numbers = [1100, 12];
console.log(numbers.sort(function(a, b){
    return a - b;
}));

array1.pop();
console.log(array1);
array1.push(300);
console.log(array1);

array1.reverse();
console.log(array1);

console.log(array1.indexOf(200));
console.log(array1.indexOf(400));

let mda = [[1,2], ["Three", 4, 5.0]];
for(let i = 0; i < mda.length; i++){
    for(let j = 0; j < mda[i].length; j++){
        console.log(mda[i][j]);
    }
}


let one = 1;
let two = 2;
let myname = "Kevin";

let output = `<p>Hello ${myname}</p>
 
<p>${one} - ${two} 

= ${one - two}</p>
`;
document.getElementById("output").innerHTML = output;

