initCosmosContentServer = function () {
  'use strict';

  initCosmosContentServerPlanets();
  initCosmosContentServerArtefacts();
  initCosmosContentServerMissions();

  Game.Helpers.deepFreeze(Game.Planets.types);
  Game.Helpers.deepFreeze(Game.Cosmos.ARTEFACTS_GROUP_SPREAD);
  Game.Helpers.deepFreeze(Game.Cosmos.PLANET_MISSIONS);
};
