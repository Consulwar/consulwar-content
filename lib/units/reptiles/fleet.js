let fleetUnits;
if (Meteor.isClient) {
  fleetUnits = require('/imports/content/Unit/Space/Reptile/client')['default'];
} else {
  fleetUnits = require('/imports/content/Unit/Space/Reptile/server')['default'];
}

initUnitsReptilesContentFleet = function () {
  game.setToMenu = 'reptiles';
  game.setToSide = 'fleet';

  _(fleetUnits).keys().forEach((id) => {
    new game.ReptileUnit(fleetUnits[id]);
  });
};
