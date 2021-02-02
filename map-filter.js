// const output =[];
// for(let i=0; i<number.length; i++){
//     const element = number[i];
//     const result = element*element;
//     output.push(result);
// } 
// console.log(output);


// function square (element){
//     return element*element;
// }
// const square2 = element => element*element;
// const square3 = x => x * x;
// number.map(function(element,index,array){
//     console.log(element,index,array);
// })
const number = [2,3,4,5,6,7,8];
const bigger = number.filter(x=> x<5);
const isThere = number.find(x => x>5);
console.log(bigger);
console.log(isThere);
// const result = number.map(x=> x*x);
// console.log(result);