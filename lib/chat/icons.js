initChatContent = function() {
	
new game.ChatIconGroup({
	engName: 'common',
	name: 'Стандартные',
	isDefault: true,
	icons: [{
		engName: '1'
	}, {
		engName: '2'
	}, {
		engName: '3'
	}, {
		engName: '4'
	}, {
		engName: '5'
	}, {
		engName: '6'
	}, {
		engName: '7'
	}, {
		engName: '8'
	}, {
		engName: '9'
	}, {
		engName: '10'
	}]
});

new game.ChatIconGroup({
	engName: 'extra',
	name: 'Дополнительные',
	price: {
		credits: 1000
	},
	icons: [{
		engName: '1'
	}, {
		engName: '2'
	}, {
		engName: '3'
	}, {
		engName: '4'
	}, {
		engName: '5'
	}, {
		engName: '6'
	}, {
		engName: '7'
	}, {
		engName: '8'
	}, {
		engName: '9'
	}, {
		engName: '10'
	}, {
		engName: '11'
	}, {
		engName: '12'
	}]
});

new game.ChatIconGroup({
	engName: 'rare',
	name: 'Редкие',
	price: {
		credits: 5000
	},
	icons: [{
		engName: '1'
	}, {
		engName: '2'
	}, {
		engName: '3'
	}, {
		engName: '4'
	}, {
		engName: '5'
	}, {
		engName: '6'
	}, {
		engName: '7'
	}, {
		engName: '8'
	}, {
		engName: '9'
	}, {
		engName: '10'
	}]
});

new game.ChatIconGroup({
	engName: 'exclusive',
	name: 'Эксклюзивные',
	isUnique: true,
	price: {
		credits: 50000
	},
	icons: [{
		engName: '1'
	}, {
		engName: '2'
	}, {
		engName: '3'
	}, {
		engName: '4'
	}, {
		engName: '5'
	}, {
		engName: '6'
	}, {
		engName: '7'
	}, {
		engName: '8'
	}, {
		engName: '9'
	}, {
		engName: '10'
	}]
});

};