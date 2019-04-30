// Inputs: a number
// Output: a string of the 'result' version of the input number
// Constraints: input is a whole number between 0 - 99,999
// EdgeCases: we're hoping for happy path, but lets do a simple check for between the specified range,
// and ignore zeros in front of the actual number, lets not worry about scale either, given that this is 
// a 'toy problem', but lets try to stay DRY

const numberToWord = (num) => {
  const input = parseInt(num, 10)
    
  if ( input < 0 || input > 99999 ) {
    return null;
  }
    
  let result = '';
  const numberWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  // check if the input is a special number / single digit
  if ( numberWords[input] ) { 
    result = numberWords[input] 
    return result;  
  }
  // place input in an array, of numbers
  const data = input.toString().split('').map(number => parseInt(number));
  
  // I  noticed I was handling 'two numbers' a lot 
  const twoDigitHelper = (tensPlace, onesPlace, resultAtThisPoint) => {
    const tens = tensPlace * 10;
    const ones = onesPlace;
    const possibleSpecialNumber = tens + ones;
    if (numberWords[possibleSpecialNumber]) {
      resultAtThisPoint = resultAtThisPoint.concat(`${numberWords[possibleSpecialNumber]}`); //something like 19
      return resultAtThisPoint;
    } else {
      resultAtThisPoint = resultAtThisPoint.concat(`${numberWords[tens]} ${numberWords[ones]}` )
      return resultAtThisPoint;              
    }
  } 
 
  if (data.length === 2) {
    return twoDigitHelper(data[0], data[1],result)
  }

  if (data.length === 3) {
    result = result.concat(`${numberWords[data[0]]} hundred`);
    //something like 900
    if (data[1] === 0 && data[2] === 0 ) {  
      return result;
    } else {
      result = result.concat(' and ');
      return twoDigitHelper(data[1],data[2],result);
    }
  }
  
  if (data.length === 4) {
    result = result.concat(`${numberWords[data[0]]} thousand`);
    // for something like 9000
    if (data[1] === 0 && data[2] === 0 && data[3] === 0) {
      return result;
    } else {
      if (data[1] !== 0) {
        result = result.concat(` ${numberWords[data[1]]} hundred`);
      }
      if (data[2] === 0 && data[3] === 0 ) {  
        return result;
      } else {
        result = result.concat(' and ');
        return twoDigitHelper(data[2], data[3],result);
      }
    }
  }

  if (data.length === 5) {
    // lets use the helper function, but NOT return it, just keep it in result
    result = twoDigitHelper(data[0], data[1], result).concat(' thousand');
    if (data[2] === 0 && data[3] === 0 && data[4] === 0) {  
      return result;
    } else {
      if(data[2] !== 0) {
        result = result.concat(` ${numberWords[data[2]]} hundred`);
        if (data[3] === 0 && data[4] === 0 ) {  
          return result;
        }
      } 
      result = result.concat(' and ');
      return twoDigitHelper(data[3], data[4], result);
    }
  }
};  


export default numberToWord;