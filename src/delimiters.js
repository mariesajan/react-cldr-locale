var fs = require('fs');
var path = require('path');


var localePath = path.join(__dirname, '..', 'node_modules', 'cldr-misc-full',
  'main');


var getLocales = function() {
  var arr_locale = fs.readdirSync(localePath);
  return arr_locale; //['de','it', 'fr']
}

function fetchDelimiters() {
  var arr_locale = getLocales();
  var delimiter = {};
  arr_locale.map(function(locale) {
    var JSONPath = path.join(localePath, locale, 'delimiters.json');
    var delimiterObj = require(JSONPath).main[locale].delimiters;
    for (var obj in delimiterObj) {
      delimiter[obj] = delimiter[obj] || {};
      delimiter[obj][locale] = delimiterObj[obj];
    }
  });
  return delimiter;
}

module.exports = fetchDelimiters();
