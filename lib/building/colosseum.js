let colosseumTournaments;
if (Meteor.isClient) {
  colosseumTournaments = require('/imports/content/Container/Tournament/client')['default'];
} else {
  colosseumTournaments = require('/imports/content/Container/Tournament/server')['default'];
}

initBuildingSpecialColosseumContent = function () {
  _(colosseumTournaments).keys().forEach((id) => {
    new game.ColosseumTournament(colosseumTournaments[id]);
  });
};
