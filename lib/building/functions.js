initBuildingContentFunctions = function() {
	
new game.BuildingFunction({
	key: 'slowExponentialGrow',
	func:  function(currentLevel, basePrice, startLevel) {
		if (currentLevel < startLevel) {
			return 0;
		}
		return Math.floor(basePrice * Math.pow(1.568803194, currentLevel - startLevel));
	}
});

new Game.BuildingFunction({
	key: 'slowLinearGrow',
	func: function(basePrice, startLevel) {
		if (currentLevel < startLevel) {
			return 0;
		}
		return Math.floor(basePrice + (currentLevel - startLevel) * 1.568803194);
	}
});

}