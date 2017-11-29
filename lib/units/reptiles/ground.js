let groundInfantryUnits;
let groundEngineryUnits;
let groundAirUnits;
if (Meteor.isClient) {
  groundInfantryUnits = require('/imports/content/Unit/Reptile/Ground/Infantry/client')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Reptile/Ground/Enginery/client')['default'];
  groundAirUnits = require('/imports/content/Unit/Reptile/Ground/Air/client')['default'];
} else {
  groundInfantryUnits = require('/imports/content/Unit/Reptile/Ground/Infantry/server')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Reptile/Ground/Enginery/server')['default'];
  groundAirUnits = require('/imports/content/Unit/Reptile/Ground/Air/server')['default'];
}

initUnitsReptilesContentGround = function () {
  game.setToMenu = 'reptiles';
  game.setToSide = 'ground';

  _(groundInfantryUnits).keys().forEach((id) => {
    new game.ReptileUnit(groundInfantryUnits[id]);
  });
  _(groundEngineryUnits).keys().forEach((id) => {
    new game.ReptileUnit(groundEngineryUnits[id]);
  });
  _(groundAirUnits).keys().forEach((id) => {
    new game.ReptileUnit(groundAirUnits[id]);
  });
};
