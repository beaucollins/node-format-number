var assert = require('assert'),
    fmt = require('./index.js');

describe('fmt', function() {

  describe('pad', function() {
    it("should pad number with characters", function() {
      assert.equal("10000", fmt.pad(100, 5));
    });
  });

  describe('lpad', function() {
    it("should pad number to left with characters", function() {
      assert.equal("XX100", fmt.lpad(100, 5, 'X'));
    });
  });

  describe('formatCents', function() {
    it("should add a comma and decimal to number assuming its cents", function() {
      assert.equal("123.45", fmt.formatCents(12345));
      assert.equal("10,312,345.25", fmt.formatCents(1031234525));
    });

    it("should correctly format negative numbers", function() {
      assert.equal("-123.45", fmt.formatCents(-12345));
    });

    it("should format cents with leading zeros", function() {
      assert.equal("123.05", fmt.formatCents(12305));
      assert.equal("123.50", fmt.formatCents(12350));
    });

  });

  describe('formatCurrency', function() {
    it("should add currency symbol and format number with comma and decimal", function() {
      assert.equal("$123.45", fmt.formatCurrency(12345));
      assert.equal("$10,312,345.25", fmt.formatCurrency(1031234525));
    });

    it("should add a space with 3 character currency symbol", function() {
      assert.equal(fmt.formatCurrency(10050, 'CKN'), "CKN 100.50");
    });

    it("should convert to known symbols", function() {
      assert.equal(fmt.formatCurrency(10050, 'USD'), "$100.50");
      assert.equal(fmt.formatCurrency(10050, 'GBP'), "£100.50");
      assert.equal(fmt.formatCurrency(10050, 'EUR'), "€100.50");
    });


  });

});

