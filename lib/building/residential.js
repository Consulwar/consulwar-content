let residentialBuildings;
if (Meteor.isClient) {
  residentialBuildings = require('/imports/content/Building/Residential/client')['default'];
} else {
  residentialBuildings = require('/imports/content/Building/Residential/server')['default'];
}

initBuildingContentResidential = function () {
  game.setToMenu = 'planet';
  game.setToSide = 'residential';
  
  _(residentialBuildings).keys().forEach((id) => {
    new game.Building(residentialBuildings[id]);
  });
};
