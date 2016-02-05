initQuestRegularContentTest = function() {

new game.QuestLine({
	engName: 'testLine1',
	canStart: function() {
		return Game.Quest.checkFinished('tutorial');
	},
	finishText: 'Молодец! Возьми с полки пирожок!'
}, [
	new game.Quest({
		engName: 'step1',
		text: 'Тестовая цепочка 1 - Шаг 1',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name,
		reward: {
			metals: 5000,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.house.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 11);
		}
	}),
	new game.Quest({
		engName: 'step2',
		text: 'Тестовая цепочка 1 - Шаг 2',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name,
		reward: {
			metals: 5000,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.house.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 12);
		}
	})
])

new game.QuestLine({
	engName: 'testLine2',
	canStart: function() {
		return Game.Quest.checkFinished('testLine1');
	},
	finishText: 'Молодец! Возьми с полки пирожок!'
}, [
	new game.Quest({
		engName: 'step1',
		text: 'Тестовая цепочка 2 - Шаг 1',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name,
		reward: {
			metals: 5000,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.house.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 13);
		}
	}),
	new game.Quest({
		engName: 'step2',
		text: 'Тестовая цепочка 2 - Шаг 2',
		conditionText: 'Построить ' + Game.Building.items.residential.house.name,
		reward: {
			metals: 5000,
			crystals: 2500
		},
		options: {
			accept: {
				text: 'Хорошо, девочка, будет тебе ' + Game.Building.items.residential.house.name,
				mood: 'positive'
			}
		},
		isDone: function() {
			return Game.Building.has('residential', 'house', 14);
		}
	})
])

}