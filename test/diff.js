import test from 'node:test';
import assert from 'assert';
import { Arr } from '../src/helpers.js';

const a = new Arr(['John', 'Peter', 'Luke']);
const b = ['Peter', 'Luke', 'Paul'];

test('Diff', async (t) => {
    await t.test(
        'One side: Should return the difference, in this example should it be John.',
        () => {
            assert.deepEqual(['John'], a.diff(b));
        }
    );

    await t.test(
        'Average both sides: Should return the difference of both sides, in this example should it be John and Paul.',
        () => {
            assert.deepEqual(['John', 'Paul'], a.diff(b, true));
        }
    );
});
