initCosmosContentServer = function () {

// Describes artefacts spread by groups
// Array from 0 to 9 matches remoteness from player base
// 0 - means player sector or last segment
// 9 - means galactics center
//
// chance - means chance to be spawned at this sector
// power - multiplier for item drop chance
Game.Cosmos.ARTEFACTS_GROUP_SPREAD = [
	{ // user home sector or galaxy edge
		white: {
			chance: 95, 
			power: 0.1
		},
		green: {
			chance: 4, 
			power: 0.03
		},
		blue: {
			chance: 1,
			power: 0.03
		}
	}, { // 1
		white: {
			chance: 90, 
			power: 0.2
		},
		green: {
			chance: 8, 
			power: 0.05
		},
		blue: {
			chance: 2,
			power: 0.05
		}
	}, { // 2
		white: {
			chance: 80, 
			power: 0.3
		},
		green: {
			chance: 15, 
			power: 0.1
		},
		blue: {
			chance: 4,
			power: 0.08
		},
		purple: {
			chance: 1,
			power: 0.03
		}
	}, { // 3
		white: {
			chance: 50, 
			power: 0.5
		},
		green: {
			chance: 40, 
			power: 0.2
		},
		blue: {
			chance: 8,
			power: 0.1
		},
		purple: {
			chance: 2,
			power: 0.07
		}
	}, { // 4
		white: {
			chance: 33, 
			power: 0.7
		},
		green: {
			chance: 50, 
			power: 0.4
		},
		blue: {
			chance: 12,
			power: 0.2
		},
		purple: {
			chance: 5,
			power: 0.1
		}
	}, { // 5
		white: {
			chance: 25, 
			power: 0.9
		},
		green: {
			chance: 60, 
			power: 0.6
		},
		blue: {
			chance: 13,
			power: 0.4
		},
		purple: {
			chance: 6,
			power: 0.2
		},
		orange: {
			chance: 1,
			power: 0.05
		}
	}, { // 6
		white: {
			chance: 5, 
			power: 1
		},
		green: {
			chance: 70, 
			power: 0.8
		},
		blue: {
			chance: 15,
			power: 0.5
		},
		purple: {
			chance: 8,
			power: 0.4
		},
		orange: {
			chance: 2,
			power: 0.1
		}
	}, { // 7
		white: {
			chance: 3, 
			power: 1
		},
		green: {
			chance: 7, 
			power: 0.9
		},
		blue: {
			chance: 50,
			power: 0.8
		},
		purple: {
			chance: 35,
			power: 0.6
		},
		orange: {
			chance: 5,
			power: 0.2
		}
	}, { // 8
		white: {
			chance: 2, 
			power: 1
		},
		green: {
			chance: 4, 
			power: 1
		},
		blue: {
			chance: 30,
			power: 0.9
		},
		purple: {
			chance: 50,
			power: 0.8
		},
		orange: {
			chance: 14,
			power: 0.5
		}
	}, { // galaxy center
		white: {
			chance: 1, 
			power: 1
		},
		green: {
			chance: 2, 
			power: 1
		},
		blue: {
			chance: 10,
			power: 1
		},
		purple: {
			chance: 20,
			power: 1
		},
		orange: {
			chance: 67,
			power: 0.8
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

};
