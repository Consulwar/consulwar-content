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

	initUnitsArmyContentInstance();

	Game.Helpers.deepFreeze(Game.Unit.items);
};