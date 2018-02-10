initFunctionsContent = function() {
'use strict';

var values = [1.14, 1.31, 1.49, 1.68, 1.89, 2.09, 2.3, 2.54, 2.76, 3.01, 3.25, 3.52, 3.76, 4.03, 4.31, 4.57, 4.84, 5.13, 5.39, 5.98, 7.78, 10.03, 12.85, 16.32, 20.56, 25.7, 31.87, 39.2, 47.83, 57.39, 68.3, 80.59, 94.29, 109.38, 125.79, 143.4, 162.04, 181.49, 201.45, 217.57, 258.91, 302.92, 351.39, 404.1, 456.64, 511.43, 567.69, 624.46, 680.66, 687.47, 797.47, 917.09, 1045.48, 1170.94, 1288.03, 1365.31, 1419.93, 1448.32, 1462.81, 1477.44, 1772.92, 2083.19, 2395.67, 2635.23, 2846.05, 3045.28, 3197.54, 3293.47, 3359.34, 3460.12, 3979.13, 4456.63, 4902.29, 5196.43, 5456.25, 5619.94, 5732.34, 5846.99, 5905.46, 5964.51, 6620.61, 7282.67, 7865.28, 8258.55, 8588.89, 8846.56, 9023.49, 9113.72, 9204.86, 9481.01, 10429.11, 10846.27, 11171.66, 11283.38, 11396.21, 11510.17, 11625.28, 11741.53, 11858.94, 11977.53];

new game.Function({
  key: 'slowExponentialGrow',
  func:  function(currentLevel, basePrice, startLevel) {
    if (currentLevel < startLevel) {
      return 0;
    }
    return Math.floor(basePrice * values[currentLevel - startLevel]);
  }
});

new game.Function({
  key: 'slowLinearGrow',
  func: function(currentLevel, basePrice, startLevel) {
    if (currentLevel < startLevel) {
      return 0;
    }
    return Math.floor(basePrice + (currentLevel - startLevel) * 1.568803194);
  }
});

new game.Function({
  key: 'fastLinearGrow',
  func: function(currentLevel, basePrice, startLevel) {
    if (currentLevel < startLevel) {
      return 0;
    }
    return Math.floor(basePrice + (currentLevel - startLevel) * Math.max(basePrice * 0.5, 1));
  }
});

};