// Inputs: a number
// Output: a string of the 'result' version of the input number
// Constraints: input is a whole number between 0 - 99,999
// EdgeCases: we're hoping for happy path, but lets do a simple check for between the specified range,
// and ignore zeros in front of the actual number

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
    90: 'ninenty',
  };
  // check if the input is a special number
  if ( numberWords[input] ) { 
    result = numberWords[input] 
    return result;  
  }
  // place input in an array, of numbers
  const data = input.toString().split('').map(number => parseInt(number));
  
  // while writing this out, i noticed i was handling 'two numbers' a lot, so here is a helper
  // function for dealing with two digits  
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

  //how to handle 3,4,5 
  if (data.length === 3) {
    result = result.concat(`${numberWords[data[0]]} hundred`);
    //someting like 900
    if (data[1] === 0 && data[2] === 0 ) {  
      return result;
    } else {
      result = result.concat(' and ');
      //something like 904
      if (data[1] === 0) {  //will only have to handle 'ones' in this case
        result = result.concat(`${numberWords[data[2]]}`);  
        return result;
      } 
      //have to handle two digits
      return twoDigitHelper(data[1],data[2],result);
    }
  }
  // 1,2,and 3 digit lengths are accounted for, though this code is somewhat repetitive, lets pass the tests
  // and worry about refactoring later - possible recursive too, if we keep track of places and had a result bank for
  // hundreds, thousands, etc -but lets focus on the goal
  if (data.length === 4) {
    //just like our hundreds block...ln 56
    result = result.concat(`${numberWords[data[0]]} thousand`);
    // for someting like 9000
    if (data[1] === 0 && data[2] === 0 && data[3] === 0) {  
      return result;
    } else {
      result = result.concat(`${numberWords[data[1]]} hundred`);
      //someting like 900
      if (data[2] === 0 && data[3] === 0 ) {  
        return result;
      } else {
        result = result.concat(' and ');
        //something like 904
        if (data[1] === 0) {  //will only have to handle 'ones' in this case
          result = result.concat(`${numberWords[data[2]]}`);  
          return result;
        }
        //have to handle two digits 
        return twoDigitHelper(data[1], data[2],result);
      }
    }
  }
  if (data.length === 5) {
    let tens = data[0] * 10;  //look familiar (handle two digits...)
    let ones = data[1];
    let possibleSpecialNumber = tens + ones;
      if (numberWords[possibleSpecialNumber]) {
        result = result.concat(`${numberWords[possibleSpecialNumber]}`); 
      } else {
        result = result.concat(`${numberWords[tens]} ${numberWords[ones]}` )
      }
        result = result.concat(` thousand `);
        // for someting like 91000
        if (data[2] === 0 && data[3] === 0 && data[4] === 0) {  
          return result;
        } else {
          if(data[2] !== 0) {
            result = result.concat(`${numberWords[data[2]]} hundred`);
            if (data[3] === 0 && data[4] === 0 ) {  
              return result;
            } else {
              result = result.concat(' and ');
            }
            if (data[3] === 0) {  //will only have to handle 'ones' in this case
              result = result.concat(`${numberWords[data[2]]}`);  
              return result;
            }   
            //have to handle two digits
            let tens = data[1] * 10;
            let ones = data[2];
            let possibleSpecialNumber = tens + ones;
            if (numberWords[possibleSpecialNumber]) {
              result = result.concat(`${numberWords[possibleSpecialNumber]}`); //something like 19
              return result;
            } else {
              result = result.concat(`${numberWords[tens]} ${numberWords[ones]}` )
              return result;  
            }
          }
        }
      }
}  


export default numberToWord;