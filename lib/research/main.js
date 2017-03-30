initResearchContent = function() {
	'use strict';

	initResearchContentEvolution();
	initResearchContentFleetUps();

	Game.Helpers.deepFreeze(Game.Research.items);
};