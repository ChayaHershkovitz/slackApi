// const fizz_buzz = require('./api');

// describe("FizzBuzz", () => {
//     test('[3] should result in "fizz"', () => {
//       expect(fizz_buzz([3])).toBe('fizz');
//     });

//     test('[5] should result in "buzz"', () => {
//       expect(fizz_buzz([5])).toBe('buzz');
//     });

//     test('[15] should result in "fizzbuzz"', () => {
//       expect(fizz_buzz([15])).toBe('fizzbuzz');
//     });

//     test('[1,2,3] should result in "1, 2, fizz"', () => {
//       expect(fizz_buzz([3])).toBe('fizz');
//     });

// });





const sum = require('./api');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});