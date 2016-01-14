initCosmosContentServer = function () {

Game.Cosmos.TIME_RESPAWN_MISSION = 120;
Game.Cosmos.TIME_ATTACK_PLAYER = 120;

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