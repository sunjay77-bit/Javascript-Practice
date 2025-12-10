// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1)
// console.log(2==1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

//************** *//

// console.log(null>0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(underdefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0); --- This type of conversion can make you confusion

// ---

// console.log("2" == 2);

// let sanjay = 123
// {
//     sanjay = 234
//     console.log(sanjay); // Let Block Scope
    
// }

// console.log(sanjay);

// const sanjay = 123;
// {
// const sanjay = 234;
//   console.log(sanjay); // const Block Scope
// }

// console.log(sanjay);

var sanjay = 123;
{
  var sanjay = 234;
  console.log(sanjay); // VAR Block Scope
}

console.log(sanjay);