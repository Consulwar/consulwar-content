initCardsContent = function() {
	'use strict';

	// initCardsContentGeneral();
	initCardsContentDonate();
	initCardsContentPenalty();
	initCardsContentPulsecatcher();
	initCardsContentBackReward();

	initCardsContentInstantReducePrice();
	initCardsContentInstantPlanetDiscover();

	Game.Helpers.deepFreeze(Game.Cards.items);
};