var assert = require('assert'),
    fmt = require('./index.js');

describe('fmt', function() {

  describe('pad', function() {
    it("should pad number with characters", function() {
      assert.equal("10000", fmt.pad(100, 5));
    });
  });

  describe('formatCents', function() {
    it("should add a comma and decimal to number assuming its cents", function() {
      assert.equal("123.45", fmt.formatCents(12345));
      assert.equal("10,312,345.25", fmt.formatCents(1031234525));
    });
  });

  describe('formatCurrency', function() {
    it("should add currency symbol and format number with comma and decimal", function() {
      assert.equal("$123.45", fmt.formatCurrency(12345));
      assert.equal("$10,312,345.25", fmt.formatCurrency(1031234525));
    });
  });
});

