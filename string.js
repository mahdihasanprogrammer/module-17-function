function checkStr(str){
  if(str.length %2 ===0){
    return true;
  }
  else{
    return false;
  }
}
console.log(checkStr('hello Dhaka'))
console.log(checkStr('faka'));


function doubleOr(number, double){
    if(double === true){
        const result = number* 2;
        return result;
    }
    else{
        return number*3;
    }
}

console.log(doubleOr(5, true))
console.log(doubleOr(5, false))