import { it , expect , vi } from 'vitest';
import { promises as fs} from 'fs';

import writeData  from './io.js';

vi.mock('fs');
vi.mock('path' , () => {
    return {
        default : {
            join : (...args) => {
                return args[args.length -1];
            }
        } 
    }
})

it('should execute the writeFile method' , () => {
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData , testFilename);
    //return expect(writeData(testData , testFilename)).resolves.toBeUndefined();
    //expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFilename,testData);
});

it('should return a promise that resolve no value if called correctly' , 
    () => {
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData , testFilename);

    return expect(writeData(testData , testFilename)).resolves.toBeUndefined();
    //expect(fs.writeFile).toBeCalled();
    //expect(fs.writeFile).toBeCalledWith(testFilename,testData);
});