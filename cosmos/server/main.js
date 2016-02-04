initCosmosContentServer = function () {

// Describes artefacts spread by groups
// Array from 0 to 9 matches remoteness from player base
// 0 - means player sector or last segment
// 9 - means galactics center
//
// chance - means chance to be spawned at this sector
// power - multiplier for item drop chance
Game.Cosmos.ARTEFACTS_GROUP_SPREAD = [
	{
		white: {
			chance: 100, 
			power: 1
		}
	}, {
		green: {
			chance: 100, 
			power: 1
		}
	}, {
		green: {
			chance: 75,
			power: 1
		},
		blue: { 
			chance: 25,
			power: 0.5
		}
	}, {
		blue: {
			chance: 100,
			power: 1
		}
	}, {
		blue: {
			chance: 75,
			power: 1
		},
		purple: {
			chance: 25,
			power: 0.5
		}
	}, {
		purple: {
			chance: 100,
			power: 1
		}
	}, {
		purple: {
			chance: 75,
			power: 1
		},
		orange: {
			chance: 25,
			power: 0.5
		}
	}, {
		orange: {
			chance: 100,
			power: 1
		}
	}, {
		orange: {
			chance: 75,
			power: 1
		},
		red: {
			chance: 25,
			power: 0.5
		}
	}, {
		orange: {
			chance: 50,
			power: 1
		},
		red: {
			chance: 50,
			power: 1
		}
	}
];

// Describes what kind of missions are available to spawn at discovered planet
// Array from 0 to 9 matches remoteness from player base
// 0 - means player sector or last segment
// 9 - means galactics center
Game.Cosmos.PLANET_MISSIONS = [
	[
		{ type: 'patrolfleet', levels: [1] }
	],
	[
		{ type: 'patrolfleet', levels: [2] },
		{ type: 'defencefleet', levels: [1] }
	],
	[
		{ type: 'patrolfleet', levels: [3] },
		{ type: 'defencefleet', levels: [2] },
		{ type: 'battlefleet', levels: [1] }
	],
	[
		{ type: 'patrolfleet', levels: [4, 5, 6] },
		{ type: 'defencefleet', levels: [3, 4, 5] },
		{ type: 'battlefleet', levels: [2, 3, 4] }
	],
	[
		{ type: 'patrolfleet', levels: [5, 6, 7] },
		{ type: 'defencefleet', levels: [4, 5, 6] },
		{ type: 'battlefleet', levels: [3, 4, 5] }
	],
	[
		{ type: 'patrolfleet', levels: [6, 7, 8] },
		{ type: 'defencefleet', levels: [5, 6, 7] },
		{ type: 'battlefleet', levels: [4, 5, 6] }
	],
	[
		{ type: 'patrolfleet', levels: [8, 9, 10] },
		{ type: 'defencefleet', levels: [6, 7, 8] },
		{ type: 'battlefleet', levels: [5, 6, 7] }
	],
	[
		{ type: 'patrolfleet', levels: [9, 10] },
		{ type: 'defencefleet', levels: [7, 8, 9] },
		{ type: 'battlefleet', levels: [6, 7, 8] }
	],
	[
		{ type: 'patrolfleet', levels: [10] },
		{ type: 'defencefleet', levels: [8, 9, 10] },
		{ type: 'battlefleet', levels: [7, 8, 9] }
	],
	[
		{ type: 'patrolfleet', levels: [10] },
		{ type: 'defencefleet', levels: [10] },
		{ type: 'battlefleet', levels: [10] }
	]
];

// Describes what kind of missions are avaiable to attack player
// Array from 0 to 7 matches current consul rating level
Game.Cosmos.ATTACK_MISSIONS = [
	[
		{ type: 'patrolfleet', levels: [1] }
	],
	[
		{ type: 'patrolfleet', levels: [2, 3, 4] }
	],
	[
		{ type: 'patrolfleet', levels: [5, 6, 7] }
	],
	[
		{ type: 'patrolfleet', levels: [8, 9, 10] }
	],
	[
		{ type: 'battlefleet', levels: [1, 2, 3] }
	],
	[
		{ type: 'battlefleet', levels: [4, 5, 6] }
	],
	[
		{ type: 'battlefleet', levels: [7, 8, 9] }
	],
	[
		{ type: 'battlefleet', levels: [10] }
	]
];

}