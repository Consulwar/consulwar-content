let fleetUnits;
if (Meteor.isClient) {
  fleetUnits = require('/imports/content/Unit/Space/Human/client')['default'];
} else {
  fleetUnits = require('/imports/content/Unit/Space/Human/server')['default'];
}

initUnitsArmyContentFleet = function () {
  game.setToMenu = 'army';
  game.setToSide = 'fleet';

  _(fleetUnits).keys().forEach((id) => {
    new game.Unit(fleetUnits[id]);
  });
};
