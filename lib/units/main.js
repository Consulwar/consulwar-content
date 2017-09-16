initUnitsContent = function() {
  'use strict';

  initUnitsArmyContentDefense();
  initUnitsArmyContentFleet();
  initUnitsArmyContentGround();
  
  initUnitsReptilesContentFleet();
  initUnitsReptilesContentGround();

  initUnitsArmyContentInstance();

  Game.Helpers.deepFreeze(Game.Unit.items);
};