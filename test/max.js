import { expect, describe, it } from '@jest/globals';
import { Arr } from '../src/helpers.js';

const exampleArray = new Arr([1, 2, 3]);

describe('Max', () => {
    it('Should return the max, in this example should it be 3.', () => {
        expect(3).toEqual(exampleArray.max);
    });

    it('Test an empty array', () => {
        expect(null).toEqual(new Arr().max);
    });
});
