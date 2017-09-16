let instantUnits;
if (Meteor.isClient) {
  instantUnits = require('/imports/content/Unit/Instant/Human/client')['default'];
} else {
  instantUnits = require('/imports/content/Unit/Instant/Human/server')['default'];
}

initUnitsArmyContentInstance = function () {
  game.setToMenu = 'army';
  game.setToSide = 'instant';

  _(instantUnits).keys().forEach((id) => {
    new game.Unit(instantUnits[id]);
  });
};
