/*
let firstName = 7;
let lastName = 3;

firstName = "vinay";
let fullName = firstName + lastName
console.log(fullName);

*/
// array
/*
let arr = [2,5,7,100,8]
let sum = arr[2] + arr[4]
console.log(sum); //15 
console.log(arr[3]); //100

 let names = ["vinay","sumit","sachin","himanshu"];
 console.log(names[2]);

 let arrOfArr = ["vinay",7,[2,4,[5,6]]];
 console.log(arrOfArr[2][2][0]); //5

 */

/*

 let obj = {
    a:1,
    name: "vinay",
    boolean: true,
    arr : [1,2,4,6], 
    first : "ravi",
    last: "kumar",
 }
 console.log(obj);
 console.log(obj.name); // vinay 
 console.log(obj.first+" "+obj.last); // ravi kumar 
 

 */
/*

  // function 

 function greet (name){
  console.log('Namaste, '+ name);
  
 }

 let x = "vinay kumar";

 greet(x)

//  function add (num1 , num2) {
//   console.log(num1+num2);
//  }

//  add(2,3); 

 function sum (a,b){
  let add = a + b;
  console.log(add);
 }

//  let x = 3;
 let y = 5;
 let z = 9;

 sum(y,z)

 function square (a){
  let result  = a*a
  return result;
 }
let value = square(9)

console.log(value);

// if else 

  function eligible (age){
    if(age<18){
      console.log('not eligible');
    }else{
      console.log('you can vote');
    }
  }

  eligible (15) // not eligible
  eligible(23) // you can vote
  eligible(18) // you can vote

    function eligibleToVote (age){

      if (age<0){
        console.log('Invalid age');
      }
    else if(age<18){
      console.log('not eligible');
    }else{
      console.log('you can vote');
    }
  }

  eligibleToVote(-1); // not eligible
  eligibleToVote(23); // you can vote
  eligibleToVote(18); // you can vote

   function evenOdd (num){
    if(num%2==0){
      console.log('Even');
    }else{
      console.log('odd');
    }
   }

   evenOdd(2)

   */

/*

   // loops 

   for (let i = 0  ; i <10; i++){
    console.log('vinay');
   }

   for (let i=2; i<9; i=i+2){
    console.log('hello '+ i);
   }

   for (let i=5; i>0; i--){
    console.log('himanshu');
   }

    function greet (i){
      console.log('Namaste'+i);
    }
    for(let i=0; i<5;i++){
      greet(i)
    }

    let arr = [10,3,5,8,2,9,34];
    let length = arr.length;
    for(let i=0; i<length;i++){
       console.log(arr[i]);
    }
     // Print Even number from an Array
     let Arr = [1,2,3,4,5,6,7,8,9]
     for(let i=0; i<Arr.length; i++){
       if(Arr[i]%2==0){  
   //    if(evenArr[i]%2==1){   // for odd 
   console.log(Arr[i]);
       }
     }

      // While Loop 

      let i = 0
      while(i<5){
       // do whatever you  want 
        console.log('vinay');
        i++;
      }



*/

/*/
// Search Element and return its index number
let arr = [4,2,0,10,8,30]

function searchElement (x){

  for(let i=0; i<arr.length; i++){
    if (arr[i] === x ){
     return i ;
    }
  }
  return -1 ;  // if value is nor in array then return -1
}

let value  = searchElement(10);
console.log("The value is",value);


// count negative number of an Array
let negArray = [ 2, -3 ,5 , -1 , 0 ,-4]

function countNegative (negArray){
  let count  = 0;
  for(let i=0; i<negArray.length; i++){
    if(negArray[i]<0){
      count = count +1
    }
  }
  return count;
}
let result = countNegative(negArray)
console.log(result);


// Find the largest no of an Array
let Array = [2,4,7,18,1,9,10];

function largestNumber (Array){
    current = 0;

    for(let i=0; i<Array.length; i++){
      if(Array[i]>current){
        current = Array[i]
      }
    }
    return current;
}
let Ans = largestNumber(Array)
console.log('Ans',Ans);

// Find the smallestNumber no of an Array
let Arrays = [2,4,7,18,1,9,10];

function smallestNumber (Arrays){
    current = Arrays[0];

    for (let i = 0; i < Arrays.length; i++) {
      if (Arrays[i] < current) {
        current = Arrays[i];
      }
    }
    return current;
}
let Answer = smallestNumber(Arrays);
console.log('Ans',Answer);

*/
/*
// find the 2nd Largest element of an array

let arr = [4,9,0,2,8,7,1];

function secondGreatest (arr){

  if(arr.length<2){
    return null ;
  }

  firstLargest = -Infinity;
  secondLargest = -Infinity;
  for(let i=0; i<arr.length; i++){
    if(arr[i]>firstLargest){
      secondLargest = firstLargest
      firstLargest = arr[i]
    }
    else if (arr[i]>secondLargest){
      secondLargest = arr[i]
    }
  }
  return secondLargest ;
}
 let result = secondGreatest (arr);
 console.log('result is :',result);
*/

/*//
// Loops in Loop

for(let i=0; i<5; i++){
  for(let j=0; j<5; j++){
    console.log('i:',i + ' j:',j);
  }
}

for(let i=0; i<3; i++){
  for(let j=0; j<i; j++){
    console.log('i='+i + ' j='+j);
  }
}

for(let i=0; i<5; i++){
  for(let j=0; j<=i; j++){
    console.log("i=" + i + " j=" + j);
  }
}

for (let i = 0; i<3; i++) {
  for (let j = i; j>0; j--) {
    console.log("i=",i+" j=", j);
  }
}
 

 for (let i=5; i>0; i--){
  for(let j=0; j<i;j++){
    console.log("i=" + i + " j=" + j);
  }
 }

  */

//star pattern

// let n = 4 ;
// for (let i=0; i<n; i++){
//   row = ""
//   for(let j=0; j<n;j++){
//     row=row+"*";
//   }
//   console.log(row);
// }

// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i ; j++) {
    row = row + (j+1);
    //row = "" + (0+1) = "" +1 = "1"
    // row="1"+(1+1) // string + number = String 
    //row = "1"+2
    // row = "12"
  }
  console.log(row);
}