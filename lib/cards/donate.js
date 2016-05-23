initCardsContentDonate = function() {

game.setToMenu = 'planet';
game.setToSide = 'house';

new game.Card({
	cardType: 'donate',
	engName: 'uncleBuilder',
	name: 'Дядя застройщик',
	description: 'Скорость развития вашей Империи - это очень важный показатель. Кто раньше достигнет высот, тому проще будет контролировать не только саму военную ситуацию галактики, но и других консулов. Иногда можно иметь бесконечное количество денег или ресурсов, но самое дорогое всё ещё это время. Быстрая застройка поможет сэкономить этот ценный ресурс.',
	durationTime: 60 * 60 * 24 * 30,
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
	}), new Game.Effect.Price({
		pretext: 'Исследования проходят быстрее на ',
		aftertext: '%',
		condition: {
			type: 'research'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 25;
		}
	}), new Game.Effect.Price({
		pretext: 'Войска подготавливаются быстрее на ',
		aftertext: '%',
		condition: {
			type: 'unit'
		},
		priority: 4,
		affect: 'time',
		result: function(level) {
			return 25;
		}
	})],
	price: {
		credits: 2000
	}
});

new game.Card({
	cardType: 'donate',
	engName: 'nuclearComplex',
	name: 'Ядерный комплекс',
	description: 'Крайне важно понимать, что чем выше добыча ресурсов, тем больше возможностей у вас, Консул, развивать вашу колонию, вашу армию, ваш флот, и тем большее влияние вы можете оказывать на эту галактику. Ядерный комплекс штука дорогая, но чрезвычайно полезная для вашего обогащения.',
	durationTime: 60 * 60 * 24 * 30,
	effect: [new Game.Effect.Income({
		pretext: 'Добыча металла +',
		aftertext: '%',
		priority: 4,
		affect: 'metals',
		result: function(level) {
			return 30;
		}
	}), new Game.Effect.Income({
		pretext: 'Добыча кристалла +',
		aftertext: '%',
		priority: 4,
		affect: 'crystals',
		result: function(level) {
			return 30;
		}
	}), new Game.Effect.Income({
		pretext: 'Приток людей +',
		aftertext: '%',
		priority: 4,
		affect: 'humans',
		result: function(level) {
			return 30;
		}
	}), new Game.Effect.Income({
		pretext: 'Честь от статуи +',
		aftertext: '%',
		priority: 4,
		affect: 'honor',
		result: function(level) {
			return 30;
		}
	})],
	price: {
		credits: 3000
	}
});

new game.Card({
	cardType: 'donate',
	engName: 'robotsPilots',
	name: 'Роботы Пилоты',
	description: 'Важно не только иметь мощный флот, но и иметь возможность правильно его использовать. К сожалению, действительно хороших пилотов ещё надо поискать, да и тех рано или поздно ждёт рептилоидная ракета в лицо. Учёные разработали новый вид роботов, мощнейшее ИИ, эти роботы способны крайне эффективно пилотировать любые корабли, что увеличивает мощность вашего флота. Увеличивает вашу власть в небе, Консул.',
	durationTime: 60 * 60 * 24 * 30,
	effect: [new Game.Effect.Military({
		pretext: '+',
		aftertext: '% к урону флота',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 4,
		affect: 'damage',
		result: function(level) {
			return 15;
		}
	}), new Game.Effect.Military({
		pretext: '+',
		aftertext: '% к броне флота',
		condition: {
			type: 'unit',
			group: 'fleet'
		},
		priority: 4,
		affect: 'life',
		result: function(level) {
			return 20;
		}
	})],
	price: {
		credits: 4000
	}
});

};