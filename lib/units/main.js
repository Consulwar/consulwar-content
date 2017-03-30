initUnitsContent = function() {
	'use strict';

	initUnitsBattleEffectsContent();

	initUnitsArmyContentDefense();
	initUnitsArmyContentFleet();
	initUnitsArmyContentGround();
	initUnitsArmyContentHeroes();
	
	initUnitsReptilesContentFleet();
	initUnitsReptilesContentGround();
	initUnitsReptilesContentHeroes();

	Game.Helpers.deepFreeze(Game.Unit.items);
};