import { it , expect } from 'vitest';
import { generateToken , generateTokenPromise } from './async-example';

it('should generate a  token value' , (done) => {
  const testEmail = 'test@test.com';

  generateToken(testEmail , (err , token) => {
    try {
      expect(token).toBeDefined();
      //expect(token).toBe(2);
      done();
    } catch(err) {
      done(err);
    }
    
  });

});

it('should generate a  token value' , () => {
  const testEmail = 'test@test.com';

  return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();

});

it('should generate a  token value' , async () => {
  const testEmail = 'test@test.com';

  const token = await generateTokenPromise(testEmail);

  expect(token).toBeDefined();
});