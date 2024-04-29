let array1 = [0,1,2,4,5];
let array2 = [10,4,5];

let combinedarray = [...array1,...array2];
console.log(combinedarray);

combinedarray = [0,...array1,12,...array2,14];

console.log(combinedarray);


let object1 = {
    name : "Sam",
    age: 32,
    street :"St Marks Road"
}

let object2 = {
    gender : "M",
    email: "abc@abc.com",
    street :"St Thomas Road"
}

let combinedObject = {...object1,...object2};

console.log(combinedObject);

combinedObject = {...object1,...object2,phone:"55555"};

console.log(combinedObject);


function sum(x,y,z)
{
   return x+y+z;
}

var numbers =[0,1,3];

var result = sum(...numbers);
console.log(result);