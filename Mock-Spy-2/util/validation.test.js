import { it, expect } from 'vitest';

import { validateNotEmpty } from './validation.js';

it('shloud return an error if text is empty' , () => {
    const testText = '';

    expect(validateNotEmpty(testText)).toThrow();
})