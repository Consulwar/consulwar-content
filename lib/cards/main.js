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
  initCardsContentInstantReinforcement();
  initCardsContentInstantCollectArtefacts();
  initCardsContentInstantDamage();

  Game.Helpers.deepFreeze(Game.Cards.items);
};