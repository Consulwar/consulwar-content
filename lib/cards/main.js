initCardsContent = function() {
	'use strict';

	// initCardsContentGeneral();
	initCardsContentDonate();
	initCardsContentPenalty();
	initCardsContentBackReward();
	initCardsContentPulsecatcher();

	Game.Helpers.deepFreeze(Game.Cards.items);
};