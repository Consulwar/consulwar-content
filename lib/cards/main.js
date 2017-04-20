initCardsContent = function() {
	'use strict';

	// initCardsContentGeneral();
	initCardsContentDonate();
	initCardsContentPenalty();
	initCardsContentPulsecatcher();
	initCardsContentBackReward();

	initCardsContentInstantReducePrice();

	Game.Helpers.deepFreeze(Game.Cards.items);
};