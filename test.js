// test.js
const sum = require('./app');
const assert = require('assert');

describe('Sum Function', () => {
  it('should return 5 when adding 2 and 3', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it('should return 0 when adding -1 and 1', () => {
    assert.strictEqual(sum(-1, 1), 0);
  });
});
