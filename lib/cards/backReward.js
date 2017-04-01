initCardsContentBackReward = function() {
'use strict';

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.BackRewardCard({
	engName: 'br1',
	name: 'За возврат 1',
	description: '',
	durationTime: 60 * 60 * 24 * 30,
	fromDay: 30,
	cardType: 'backReward',
	cardGroup: 'backRewards',
	effect: [new Game.Effect.Price({
		pretext: 'Здания строятся быстрее на ',
		aftertext: '%',
		condition: {
			type: 'building'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 25;
		}
	})]
});

new game.BackRewardCard({
	engName: 'br2',
	name: 'Награда за возврат 2',
	fromDay: 60,
	description: 'Скорость развития вашей Империи - это очень важный показатель. Кто раньше достигнет высот, тому проще будет контролировать не только саму военную ситуацию галактики, но и других консулов. Иногда можно иметь бесконечное количество денег или ресурсов, но самое дорогое всё ещё это время. Быстрая застройка поможет сэкономить этот ценный ресурс.',
	durationTime: 60,
	cardType: 'backReward',
	cardGroup: 'backRewards',
	effect: [new Game.Effect.Price({
		pretext: 'Здания строятся быстрее на ',
		aftertext: '%',
		condition: {
			type: 'building'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 25;
		}
	})]
});

};