let evolutionResearch;
if (Meteor.isClient) {
  evolutionResearch = require('/imports/content/Research/Evolution/client')['default'];
} else {
  evolutionResearch = require('/imports/content/Research/Evolution/server')['default'];
}

initResearchContentEvolution = function () {
  game.setToMenu = 'research';
  game.setToSide = 'evolution';

  _(evolutionResearch).keys().forEach((id) => {
    new game.Research(evolutionResearch[id]);
  });
};
