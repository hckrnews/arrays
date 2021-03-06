import { expect, describe, it } from '@jest/globals';
import { Arr } from '../src/helpers.js';

const a = new Arr(['John', 'Peter', 'Luke', 'Peter', 'Luke', 'Paul']);

const expectedResults = ['John', 'Peter', 'Luke', 'Paul'];

describe('Unique', () => {
    it('Should return the unique items from the array, in this example 4 items.', () => {
        expect(expectedResults).toEqual(a.unique);
    });
});
