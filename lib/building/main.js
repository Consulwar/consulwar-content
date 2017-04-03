initBuildingContent = function() {
	'use strict';

	initBuildingContentResidential();
	initBuildingContentMilitary();

	Game.Helpers.deepFreeze(Game.Building.items);
};