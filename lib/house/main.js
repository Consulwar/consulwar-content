initHouseContent = function() {
  'use strict';

  initHouseContentRoomItems();
  initHouseContentTronItems();
  initHouseContentAvatarItems();

  Game.Helpers.deepFreeze(Game.House.items);
};