import { it , expect } from 'vitest';

import { add } from './math';

it('should summerize numbers into an array' , () => {
    //Arrane
    const numbers = [2,3];

    //Act
    const result = add(numbers);

    //Assertion
    const expectedResult = numbers.reduce(
        (accValue , currValue) => accValue + currValue ,
        0)
    expect(result).toBe(expectedResult);
})

it('should yield NAN if at least one invalid number is provided' , () => {
    const inputs = ['invalid' , 1];

    const result = add(inputs);

    expect(result).toBeNaN();
})

it('should yield a correct sum if an array of numerc string is provided',() => {
    const numbers = ['3','4'];

    const result = add(numbers);

    const expectedResult = numbers.reduce(
        (accValue , currValue) => +accValue + +currValue ,
        0
    );
    expect(result).toBe(expectedResult);
})

it('should yield 0 if an emty array is provided' , () => {
    const inputs = [];

    const result = add(inputs);

    expect(result).toBe(0);
})

it('should throw an error if no value passed into the function', () => {
    const resultFn = () => {
        add();
    };
    expect(resultFn).toThrow(/is not iterable/);
})

it('should throw an error if provided multiple arguments instead of an array',() => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => {
        add(num1,num2);
    };
    expect(resultFn).toThrow(/is not iterable/);

})