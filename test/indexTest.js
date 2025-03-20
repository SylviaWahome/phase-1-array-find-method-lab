const { expect } = require('chai');
const { superbowlWin } = require('../index.js');

describe('superbowlWin()', () => {
  it('should return the year of the first Superbowl win', () => {
    const record = [
      { year: "2015", result: "W" },
      { year: "2014", result: "N/A" },
      { year: "2013", result: "L" },
    ];
    expect(superbowlWin(record)).to.equal("2015");
  });

  it('should return undefined if no win is found', () => {
    const record = [
      { year: "2014", result: "N/A" },
      { year: "2013", result: "L" },
    ];
    expect(superbowlWin(record)).to.equal(undefined);
  });
});