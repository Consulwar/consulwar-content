initCardsContent = function() {
	'use strict';

	// initCardsContentGeneral();
	initCardsContentDonate();
	initCardsContentPenalty();
	initCardsContentPulsecatcher();
	initCardsContentBackReward();

	initCardsContentInstantReducePrice();
	initCardsContentInstantSpeedupBuild();
	initCardsContentInstantPlanetDiscover();
	initCardsContentInstantCollectArtefacts();

	Game.Helpers.deepFreeze(Game.Cards.items);
};