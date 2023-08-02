// creating a const object and trying to add a string it later
console.log("questions");
const mangesh = {
    name : "Mangesh Gupta",
    age : 21,
    addres :"Thekma",
    marital_status : false
}

console.log(mangesh["birthday"]);   // showing : undefined

// const mangesh = 555; //^ SyntaxError: Identifier 'mangesh' has already been declared (10:6) 

// const can never be re-declared nor be updated 

//ques-  try to add new keys in that const object

//  mangesh = {              //ERROR : Assignment to constant variable. 
//     constipated : false,
//     mental : true,
//     birthday : "13 Nov "
// }


// appropriate way

mangesh["birthday"]="13 Nov" ;

console.log(mangesh["birthday"]);

//we can't update it without using the same object box....