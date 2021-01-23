import getLetterCount from './letter-count';
import { expect } from 'chai';

describe('getLetterCount - basic functionality', () => {
  it('Empty String returns an empty object', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });

  it('a word with only one of each letter returns the correct letter count ', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });
});
