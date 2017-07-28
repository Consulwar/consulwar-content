initIconsContent = function() {
  'use strict';

  initIconsContentCommon();
  initIconsContentExtra();
  initIconsContentRare();
  initIconsContentExclusive();

  Game.Helpers.deepFreeze(Game.Icons.items);
};