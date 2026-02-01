function tenTimes(num1){
    const result  =num1*10; 
    return result
}

const result = tenTimes(99);
// console.log(result);

function doMath(num1, num2){
    const sum = num1 +num2;
    const diff = num1 - num2;
    const multy = sum * diff;
    const result = multy/2;
    return result;

   
}
console.log(doMath(5,3));



const isEven = num => {
    if(num %2 ===0){
        return true;
    }
    return false;
}

console.log(isEven(41));
console.log(isEven(100));
console.log(isEven(-15));


function diff(num1, num2){
    console.log(num1+num2);
    for(const argument of arguments){
        console.log(argument)
    }
}

diff(5,7,9,8);
