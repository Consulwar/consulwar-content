let groundInfantryUnits;
let groundEngineryUnits;
let groundAirUnits;
if (Meteor.isClient) {
  groundInfantryUnits = require('/imports/content/Unit/Human/Ground/Infantry/client')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Human/Ground/Enginery/client')['default'];
  groundAirUnits = require('/imports/content/Unit/Human/Ground/Air/client')['default'];
} else {
  groundInfantryUnits = require('/imports/content/Unit/Human/Ground/Infantry/server')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Human/Ground/Enginery/server')['default'];
  groundAirUnits = require('/imports/content/Unit/Human/Ground/Air/server')['default'];
}

initUnitsArmyContentGround = function () {
  game.setToMenu = 'army';
  game.setToSide = 'ground';

  _(groundInfantryUnits).keys().forEach((id) => {
    new game.Unit(groundInfantryUnits[id]);
  });
  _(groundEngineryUnits).keys().forEach((id) => {
    new game.Unit(groundEngineryUnits[id]);
  });
  _(groundAirUnits).keys().forEach((id) => {
    new game.Unit(groundAirUnits[id]);
  });
};
