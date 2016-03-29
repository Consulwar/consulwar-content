initFunctionsContent = function() {
	
new game.Function({
	key: 'slowExponentialGrow',
	func:  function(currentLevel, basePrice, startLevel) {
		if (currentLevel < startLevel) {
			return 0;
		}
		return Math.floor(basePrice * Math.pow(1.1, currentLevel - startLevel));
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

}