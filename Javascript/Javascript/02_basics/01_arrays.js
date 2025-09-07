// array == it store the similar type of data

// .lenght == to check the lenght of arrray



const myArr = [0, 1, 2, 3, 4, 5]  // array declaration 
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) == check the size
// myArr.push(7) == 
// myArr.pop() == it remove the last value in the array

// myArr.unshift(9) == it shift the vaule of array ata the starting of array 
// myArr.shift() == 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() == 

// console.log(myArr);
// console.log( newArr);


// slice  , splice  == both things are manipulate the array 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
