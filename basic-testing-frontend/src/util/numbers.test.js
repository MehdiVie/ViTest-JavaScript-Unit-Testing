import { it , expect } from 'vitest';

import { transformToNumber } from './numbers';

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

