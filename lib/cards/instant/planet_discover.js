initCardsContentInstantPlanetDiscover = function() {
'use strict';

new game.InstantCard({
  name: 'Еноты космонавты',
  engName: 'RacesAstronauts',
  cardType: 'instant',
  group: 'planetDiscover',
  effect: new Game.Effect.Special({
    pretext: 'разведка космоса',
    aftertext: '',
    priority: 1
  })/*,
  price: {
    credits: 10
  }*/
});

};
