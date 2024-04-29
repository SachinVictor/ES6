const fruits = ["Apple", "Banana", "Cherry"];
[a,b,...rest] = fruits;

console.log(a);
console.log(b);


const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
   };

 const {firstName,lastName,...email} = user;
 
 console.log(firstName);
 console.log(lastName);


const address={
    street:"Marks Street",
    city : "New york"
}
 
let useraddress ={...user,...address}

console.log(useraddress.street);
console.log(useraddress.city);


function getUserDetails({firstName:firstname,email:email})
{
    console.log(`User's name is ${firstname}`);
    console.log(`User's email is ${email}`)
}

getUserDetails(user);

