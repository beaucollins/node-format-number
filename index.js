var $f, f, format_currency, format_number, pad;

pad = function(n, min_length, character) {
  var num;
  if (min_length == null) {
    min_length = 2;
  }
  if (character == null) {
    character = '0';
  }
  num = n + "";
  while (num.length < min_length) {
    num += character;
  }
  return num;
};

f = format_number = function(n, decimals, point, seperator) {
  var digits, divisor, formatted, i, num, remainder, _i, _ref;

  if (n === null || n === undefined) {
    return "";
  }

  if (decimals == null) {
    decimals = 2;
  }
  if (point == null) {
    point = ".";
  }
  if (seperator == null) {
    seperator = ",";
  }
  divisor = Math.pow(10, decimals);
  num = Math.floor(n / divisor) + "";
  formatted = "";
  for (i = _i = _ref = num.length - 1; _i >= 0; i = _i += -3) {
    digits = num.slice(Math.max(0, i - 2), +i + 1 || 9e9);
    if (i !== num.length - 1) {
      digits += seperator;
    }
    formatted = digits + formatted;
  }
  remainder = n % divisor;
  return formatted + point + pad(remainder);
};

$f = format_currency = function(n, symbol) {
  if (symbol == null) {
    symbol = "$";
  }
  return symbol + format_number(n);
};

module.exports = {
  pad: pad,
  formatCents: f,
  formatCurrency: $f,
  n: f,
  $: $f
};
