// For loop

for (let i = 0; i < 20; i++) {

   console.log("MAGesh is a great guy"); 
    
}

// 2  Multiplication table

for(let i=0 ; i<10 ; i++){

    console.log("2 * " + (i+1) + " = " + (2*(i+1)) ) ;

}

// factorial

let x=6;
for (let i = x-1; i > 0; i--) {
   
    // 5 5-1 5-1-1 5-1-1-1 5-1-1-1-1
console.log("be fore x = " +x + "  i = " + i);
    x=x*i;
  console.log("be after " +x);

}
console.log(x);