import SpecialEffect from '/imports/modules/Effect/lib/SpecialEffect';

initCardsContentInstantPlanetDiscover = function() {
'use strict';

new game.InstantCard({
  name: 'Еноты космонавты',
  engName: 'RacesAstronauts',
  cardType: 'instant',
  group: 'planetDiscover',
  effect: new SpecialEffect({
    textBefore: 'разведка космоса',
    textAfter: '',
    priority: 1
  })/*,
  price: {
    credits: 10
  }*/
});

};
