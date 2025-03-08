import { describe ,  it , expect } from 'vitest';

import { transformToNumber , cleanNumbers } from './numbers';

describe('transformToNumber()' , () => {

    it('should return NaN if provided with empty input' , () => {
        const result = transformToNumber();
    
        expect(result).toBeNaN();
    })
    
    it('should transform string number to a number of type number' , () => {
        const val = '1';
    
        const result = transformToNumber(val);
    
        expect(result).toBeTypeOf('number');
    })
    
    it('should yield NAN for non-transformable value' , () => {
        const val1 = 'invalid';
        const val2 = {};
        
    
        const result1 = transformToNumber(val1);
        const result2 = transformToNumber(val2);
        
    
        expect(result1).toBeNaN();
        expect(result2).toBeNaN();
        
    })

});


describe('cleanNumbers()' , () => {

    it('should return array of numbers, if an array of string numbers is provided', () => {
        const val = ['1', '2'];

        const result = cleanNumbers(val);

        //expect(result[0]).toBeTypeOf('number');
        expect(result).toEqual([1, 2]);
    });

    it('should return error, if an empty array is provided', () => {
        const val = [];

        expect(() => cleanNumbers(val)).toThrow();
    });

    it('should return error, if an array with at least one empty string is provided', () => {
        const val = [1 , ''];

        const cleanFn = () => {
            cleanNumbers(val);
        }

        expect(cleanFn).toThrow();
    });
});


