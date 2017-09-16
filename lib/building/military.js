let militaryBuildings;
if (Meteor.isClient) {
  militaryBuildings = require('/imports/content/Building/Military/client')['default'];
} else {
  militaryBuildings = require('/imports/content/Building/Military/server')['default'];
}

initBuildingContentMilitary = function () {
  game.setToMenu = 'planet';
  game.setToSide = 'military';

  _(militaryBuildings).keys().forEach((id) => {
    new game.Building(militaryBuildings[id]);
  });
};
