initCardsContentPenalty = function() {

new game.Card({
	cardType: 'penalty',
	engName: 'penaltyHumans',
	name: 'Любовь к Рептилоидам',
	durationTime: 60 * 60,
	reloadTime: 1,
	effect: [new Game.Effect.Income({
		pretext: 'Приток людей ',
		aftertext: '%',
		priority: 2,
		affect: 'humans',
		result: function(level) {
			return -100;
		}
	})]
});

};