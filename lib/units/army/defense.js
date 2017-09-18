let defenseUnits;
if (Meteor.isClient) {
  defenseUnits = require('/imports/content/Unit/Defense/Human/client')['default'];
} else {
  defenseUnits = require('/imports/content/Unit/Defense/Human/server')['default'];
}

initUnitsArmyContentDefense = function () {
  game.setToMenu = 'army';
  game.setToSide = 'defense';

  _(defenseUnits).keys().forEach((id) => {
    new game.Unit(defenseUnits[id]);
  });
};
