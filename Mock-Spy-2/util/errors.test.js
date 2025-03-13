import { it, expect, describe , beforeEach  } from 'vitest';

import { HttpError , ValidationError } from './errors.js';

const testErrorStatusCode = 1;
const testErrorMessage = 'testErrorMessage';
const testErrorData = {key : 'testErrorData'};
let testError;

describe.concurrent('HttpError()', () => {

    beforeEach(()=>{
        testError = new HttpError(testErrorStatusCode,testErrorMessage,testErrorData);
    });
      
    it('should have statusCode,message and data property', () => {
        expect(testError).toHaveProperty('statusCode');
        expect(testError).toHaveProperty('message');
        expect(testError).toHaveProperty('data');
    });

    it('should store the provided statusCode,message and data value', () => {
        expect(testError.statusCode).toBe(testErrorStatusCode);
        expect(testError.message).toBe(testErrorMessage);
        expect(testError.data).toEqual(testErrorData);
    });

    it('should contain undefined if no data is provided', () => {
        testError = new HttpError(testErrorStatusCode,testErrorMessage);
        
        expect(testError.statusCode).toBe(testErrorStatusCode);
        expect(testError.message).toBe(testErrorMessage);
        expect(testError.data).toBeUndefined();
        
    });


      

      
})

describe.concurrent('ValidationError()', () => {

    beforeEach(()=>{
        testError = new ValidationError(testErrorMessage);
    });
      
    it('should have message property', () => {
        expect(testError).toHaveProperty('message');
    });
      
    it('should store the provided message value', () => {
        expect(testError.message).toBe(testErrorMessage);
    });
      
})
