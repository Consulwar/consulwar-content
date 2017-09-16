let groundInfantryUnits;
let groundEngineryUnits;
let groundAirUnits;
if (Meteor.isClient) {
  groundInfantryUnits = require('/imports/content/Unit/Ground/Infantry/Reptile/client')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Ground/Enginery/Reptile/client')['default'];
  groundAirUnits = require('/imports/content/Unit/Ground/Air/Reptile/client')['default'];
} else {
  groundInfantryUnits = require('/imports/content/Unit/Ground/Infantry/Reptile/server')['default'];
  groundEngineryUnits = require('/imports/content/Unit/Ground/Enginery/Reptile/server')['default'];
  groundAirUnits = require('/imports/content/Unit/Ground/Air/Reptile/server')['default'];
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
