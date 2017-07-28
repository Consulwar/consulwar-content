initArtefactsContent = function() {
  'use strict';

  initArtefactsContentWhite();
  initArtefactsContentGreen();
  initArtefactsContentBlue();
  initArtefactsContentPurple();
  initArtefactsContentOrange();
  initArtefactsContentRed();

  Game.Helpers.deepFreeze(Game.Artefacts.items);
};