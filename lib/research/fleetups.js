let fleetResearch;
if (Meteor.isClient) {
  fleetResearch = require('/imports/content/Research/Fleet/client')['default'];
} else {
  fleetResearch = require('/imports/content/Research/Fleet/server')['default'];
}

initResearchContentFleetUps = function () {
  game.setToMenu = 'research';
  game.setToSide = 'fleetups';

  _(fleetResearch).keys().forEach((id) => {
    new game.Research(fleetResearch[id]);
  });
};
