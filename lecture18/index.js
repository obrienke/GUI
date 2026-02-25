let array1 = [100, 200, 300];
console.log(array1);
array1[3] = 400;
console.log(array1);
array1.push("Five Hundred")
console.log(array1);

array1.splice(3, 2, 350, 450)
console.log(array1);

let names = ["Zoey", "Mary"];
names.sort();
console.log(names);

let numbers = [1100, 12];
numbers.sort()
console.log(numbers);
numbers.sort(function(a, b){return a - b})
console.log(numbers);

array1.pop()
console.log(array1);
array1.reverse();
console.log(array1);

console.log(array1.indexOf(200));

for(let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}

array1.forEach((i) => {console.log(i)});

let mda = [[10, 20], ["1", "2", 3]]

for(let i = 0; i < mda.length; i++){
    for(let j = 0; j < mda[i].length; j++){
        console.log(mda[i][j]);
    }
}

let one = 1;
let two = 2;
let myname = "Joan";
let greet = `<p> Hello ${myname}</p>`
document.getElementById("greeting").innerHTML = greet;
let res = `<p>${one} + ${two} = ${(one + two)}</p>`;
document.getElementById("greeting").innerHTML += res;  

