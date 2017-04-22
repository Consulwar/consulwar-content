initUnitsArmyContentInstance = function () {
'use strict';

game.setToMenu = 'army';
game.setToSide = 'instant';

new game.Unit({
	name: 'Единоразовый юниты',
	engName: 'instantDamage1',
	characteristics: {
		damage: {
			min: 160,
			max: 200
		},
		life: 1
	},
	targets: function() {
		return [
			// нет приоритетной цели, рандом
		];
	}
});

};