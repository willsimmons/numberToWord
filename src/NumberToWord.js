// Inputs: a number
// Output: a string of the 'word' version of the input number
// Constraints: input is a whole number between 0 - 99,999
// EdgeCases: we're hoping for happy path, but lets do a simple check for between the specified range,
// and ignore zeros in front of the actual number

const numberToWord = (input) => {
    input = parseInt(input, 10)
    
    if(input < 0 || input > 99999){
     return null;
    }
    
    let word = '';
    
    // keys for handling numbers
    const numberKey = {
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
    }
    // check if the input is a special number
    if ( numberKey[input] ) { 
      word = numberKey[input] 
      return word;  
    }
    //place it in an array, of numbers
    let data = input.toString().split('').map(number => parseInt(number)); 
    //handle set of 3...
    if (data.length === 3) {
        word = word.concat(`${numberKey[data[0]]} hundred`);
        //someting like 900
        if (data[1] === 0 && data[2] === 0 ) {  
            return word;
        } else {
          word = word.concat(' and ');
          //something like 904
          if (data[1] === 0) {  //will only have to handle 'ones' in this case
          word = word.concat(`${numberKey[data[2]]}`);  
              return word;
            } 
            //have to handle two digits
            let tens = data[1] * 10;
            let ones = data[2];
            let possibleSpecialNumber = tens + ones;
            if (numberKey[possibleSpecialNumber]) {
              word = word.concat(`${numberKey[possibleSpecialNumber]}`); //something like 19
              return word;
            } else {
              word = word.concat(`${numberKey[tens]} ${numberKey[ones]}` )
              return word;  
            }

        }
    } else {
      // todo: this block could be turned into a function to handle the middle and right 
      // columns of numbers (ex: for millions x00,x00,x00 - but dealing with the scope of the problem... lets forge ahead
      if (data.length === 2) {
        let tens = data[0] * 10;
        let ones = data[1];
        let possibleSpecialNumber = tens + ones;
          if (numberKey[possibleSpecialNumber]) {
            word = word.concat(`${numberKey[possibleSpecialNumber]}`); //something like 19
            return word;
          } else {
            word = word.concat(`${numberKey[tens]} ${numberKey[ones]}` )
            return word;              
          }
      }
    }  
}; 

export default numberToWord;