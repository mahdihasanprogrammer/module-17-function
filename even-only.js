/**
 * create a function, that will return only even numbers;
 * return the sum of even numbers;
 *
 */

function sumOfEvenNumbers(numbers){
    let sum =0;
   for(const number of numbers){
    if(number % 2 ===0){
        sum+=number
    }
   }
   return sum
}
const numbers = [11,20,30,47,6,9,14];
const sum =sumOfEvenNumbers(numbers);
console.log('sum of:',sum)
