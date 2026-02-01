/**
 * objective: write a function to give me the sum of all numbers in an array;
 * step-1: declare a function;
 * step-2: call check whether the function is called properly;
 * step-3; set a parameter;
 * step-4: pass the parameter , check whether parameter is passed a proper format;
 * step-5: do the function tasks (step by step)
 */

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        sum+= number;
    }
    return sum;
}
const numbers = sumOfNumbers([20,5,9,31,75,29]);
console.log(numbers);