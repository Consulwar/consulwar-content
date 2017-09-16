let groundInfantryUnits;
let groundEngineryUnits;
let groundAirUnits;
if (Meteor.isClient) {
  groundInfantryUnits = require('/imports/content/Unit/Ground/Infantry/Human/client')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Ground/Enginery/Human/client')['default'];
  groundAirUnits = require('/imports/content/Unit/Ground/Air/Human/client')['default'];
} else {
  groundInfantryUnits = require('/imports/content/Unit/Ground/Infantry/Human/server')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Ground/Enginery/Human/server')['default'];
  groundAirUnits = require('/imports/content/Unit/Ground/Air/Human/server')['default'];
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
