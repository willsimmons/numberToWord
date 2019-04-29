// the idea behind our tests to check that we:
// account for zeros in places, we check for special number when present
// and we handle words such as and's, hundred and thousand

import numberToWord from './NumberToWord';

it('returns null if a number is negative', () => {
  expect(numberToWord(-14)).toBeNull();
});

it('returns null if a number is greater than 99,999', () =>{
  expect(numberToWord(500000)).toBeNull();
});

it('returns the correct number if its a *special* number', () =>{
  expect(numberToWord(40)).toBe('forty');
  expect(numberToWord(0)).toBe('zero');
  expect(numberToWord(17)).toBe('seventeen');
});

it('handles two digit *regular* numbers', () => {
  expect(numberToWord(29)).toBe('twenty nine');
});

it('ignores fake zeros in front', () => {
  expect(numberToWord('00037')).toBe('thirty seven');
});

it('handles 3 digits', ()=> {
  expect(numberToWord(900)).toBe('nine hundred');    
  expect(numberToWord(701)).toBe('seven hundred and one');  
  expect(numberToWord(429)).toBe('four hundred and twenty nine');  
  expect(numberToWord(214)).toBe('two hundred and fourteen');
});

it('handles thousands and until the input limit',() => {
  expect(numberToWord(9000)).toBe('nine thousand');    
  expect(numberToWord(60001)).toBe('sixty thousand and one');    
  expect(numberToWord(14035)).toBe('fourteen thousand and thirty five');    
  expect(numberToWord(71205)).toBe('seventy one thousand two hundred and five');    
  expect(numberToWord(21111)).toBe('twenty one thouand one hundred and eleven');    
  expect(numberToWord(99999)).toBe('ninety nine thousand nine hundred and ninenty nine');     
});