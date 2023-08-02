//var could be re-declared 
//let could n't be re-declared and it will show errors 
//var is OUTDATED , it can produce bugs in production
// if var is updated , then it happens globally

console.log("var vs let vs const");

//var
var man = 'gupta';
var man = 66 ;         // updated // re-declared
 man = 76 ;         // updated // re-declared
console.log(man);

//const
const abc = "mangesh";
// abc="mangesh gupta";          can't done it , a const can never be re-declared nor be updated
console.log(abc);


// let

let mango = "apple ";
mango='banana';
console.log(mango);

{
   let mango="apple";  //initialized locally
    console.log(mango);   
}
console.log(mango);     //not effected