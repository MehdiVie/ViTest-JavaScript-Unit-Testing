import { validateStringNotEmpty, validateNumber } from './validation.js';

export function transformToNumber(value) {
  // return NaN;
  return +value;
}

export function cleanNumbers(numberValues) {

  if (numberValues.length === 0) {
    throw new Error('invalid input - array must not be empty!');
  }

  const numbers = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}