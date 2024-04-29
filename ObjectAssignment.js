//Student Profile Object with firstname and lastname properties 
var studentProfile = {
    firstName:"Sachin",
    lastName : "Victor"

}

//StudentClass Object with name property
var studentClass = {
name : "Introduction to ES6"
}

//teacher Object with name and email properties 
var teacher = {

    name : "Kumar",
    email : "kumar@yahoo.com"
}
//grade object with subjects as properties
var grade = {

    Math : "A",
    Science : "A",
    Social :"B",
    English : "A",
    Kannada : "A"
}

console.log(studentProfile.firstName+" "+studentProfile.lastName); //Log first name and last name
console.log(studentClass['name']); //Log Class name
console.log(teacher.email); // Log teachers email address
grade.English ="B"; //Change the Grade of subject english
console.log(grade.English); //Log the grade of English