
// Task-1
// Take four parameters. Multiply the four numbers and then return the result;
function multiply(num1, num2, num3, num4){
    const result = num1*num2*num3*num4;
    return result;
}
const result = multiply(5,9,3,6);
// console.log(result);



// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEvenNum(num){
    if(num % 2 !==0){
        return num*2;
    } else{
        return num/2;
    }
}

// console.log(oddEvenNum(5));
// console.log(oddEvenNum(50));


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numbers,size){
    let sum = 0;
    for(const number of numbers){
        sum+=number;
    }

    const avg = sum/size
    const convertedAvg = Number(avg.toFixed(2));
    return convertedAvg;
}
const array = [10,64,9,17,36,15];

// console.log(make_avg(array,array.length));



// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let count = 0;
    for(const letter of str){
        if(letter ==='0'){
            count++;
        }
    }
    return count;
}
const str = count_zero('00000011110000');
// console.log(str)


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd;

function odd_even(num){
    if(num % 2 ===0){
        return 'Even'
    }
    else{
        return 'Odd'
    }
}

// console.log(odd_even(27));
// console.log(odd_even(62));



function hello(){
    console.log('li')
}