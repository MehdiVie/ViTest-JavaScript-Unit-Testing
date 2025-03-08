import { describe , it , expect } from 'vitest';
import { generateResultText } from './output.js';

describe('generateResultText()' , () => {

    it('should return a string, no matter value is passed in' , () => {
        const val1 = 1;
        const val2 = false;
        const val3 = 'a';

        const result1 = generateResultText(val1);
        const result2 = generateResultText(val2);
        const result3 = generateResultText(val3);

        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
        expect(result3).toBeTypeOf('string');
    });

    it('should return a string including "invalid", if result is "invalid" ' , () => {
        const val = 'invalid';

        const result = generateResultText(val);

        expect(result).toContain('Invalid');
    });

    it('should return an empty string , if result is "no-calc" ' , () => {
        const val = 'no-calc';

        const result = generateResultText(val);

        expect(result).toContain('');
    });

    it('should return an string that contains the calculation result, if a number is provided as result" ' , () => {
        const val = '4';

        const result = generateResultText(val);

        expect(result).toContain(result.toString());
    });

});
