initCosmosContentServerMissions = function() {
'use strict';

// Describes what kind of missions are available to spawn at discovered planet
// Array from 0 to 9 matches remoteness from player base
// 0 - means player sector or last segment
// 9 - means galactics center
Game.Cosmos.PLANET_MISSIONS = [
  [
    { type: 'patrolfleet', levels: [1] },
  ],
  [
    { type: 'patrolfleet', levels: [1, 2] },
    { type: 'defencefleet', levels: [1] },
  ],
  [
    { type: 'patrolfleet', levels: [2, 3] },
    { type: 'defencefleet', levels: [1, 2] },
  ],
  [
    { type: 'patrolfleet', levels: [3] },
    { type: 'defencefleet', levels: [2] },
    { type: 'battlefleet', levels: [1] },
  ],
  [
    { type: 'patrolfleet', levels: [3, 4] },
    { type: 'defencefleet', levels: [2, 3] },
    { type: 'battlefleet', levels: [1, 2] },
  ],
  [
    { type: 'patrolfleet', levels: [4] },
    { type: 'defencefleet', levels: [3] },
    { type: 'battlefleet', levels: [2] },
  ],
  [
    { type: 'patrolfleet', levels: [4, 5] },
    { type: 'defencefleet', levels: [3, 4] },
    { type: 'battlefleet', levels: [2, 3] },
  ],
  [
    { type: 'patrolfleet', levels: [5, 6] },
    { type: 'defencefleet', levels: [4, 5] },
    { type: 'battlefleet', levels: [3, 4] },
  ],
  [
    { type: 'patrolfleet', levels: [5, 6, 7] },
    { type: 'defencefleet', levels: [4, 5, 6] },
    { type: 'battlefleet', levels: [3, 4, 5] },
  ],
  [
    { type: 'patrolfleet', levels: [7] },
    { type: 'defencefleet', levels: [6, 7] },
    { type: 'battlefleet', levels: [5, 6, 7] },
  ],
];

// Describes what kind of missions are avaiable to attack player
// Array from 0 to 7 matches current consul rating level
Game.Cosmos.ATTACK_MISSIONS = [
  [
    { type: 'battlefleet', levels: [1] },
  ],
  [
    { type: 'battlefleet', levels: [2] },
  ],
  [
    { type: 'battlefleet', levels: [2, 3] },
  ],
  [
    { type: 'battlefleet', levels: [3] },
  ],
  [
    { type: 'battlefleet', levels: [3, 4] },
  ],
  [
    { type: 'battlefleet', levels: [4, 5] },
  ],
  [
    { type: 'battlefleet', levels: [5, 6] },
  ],
  [
    { type: 'battlefleet', levels: [5, 6, 7] },
  ],
];

};
