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
		engName: '1',
		price: { credits: 1000 }
	}, {
		engName: '2',
		price: { credits: 1200 }
	}, {
		engName: '3',
		price: { credits: 800 }
	}, {
		engName: '4',
		price: { credits: 1000 }
	}, {
		engName: '5',
		price: { credits: 1100 }
	}, {
		engName: '6',
		price: { credits: 1200 }
	}, {
		engName: '7',
		price: { credits: 1100 }
	}, {
		engName: '8',
		price: { credits: 1000 }
	}, {
		engName: '9',
		price: { credits: 900 }
	}, {
		engName: '10',
		price: { credits: 900 }
	}, {
		engName: '11',
		price: { credits: 1000 }
	}, {
		engName: '12',
		price: { credits: 1200 }
	}]
});

new game.ChatIconGroup({
	engName: 'rare',
	name: 'Редкие',
	price: {
		credits: 5000
	},
	icons: [{
		engName: '1',
		price: { credits: 4500 }
	}, {
		engName: '2',
		price: { credits: 4500 }
	}, {
		engName: '3',
		price: { credits: 4700 }
	}, {
		engName: '4',
		price: { credits: 4700 }
	}, {
		engName: '5',
		price: { credits: 4700 }
	}, {
		engName: '6',
		price: { credits: 5000 }
	}, {
		engName: '7',
		price: { credits: 5000 }
	}, {
		engName: '8',
		price: { credits: 5500 }
	}, {
		engName: '9',
		price: { credits: 5500 }
	}, {
		engName: '10',
		price: { credits: 5500 }
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
		engName: '1',
		price: { credits: 49000 }
	}, {
		engName: '2',
		price: { credits: 46000 }
	}, {
		engName: '3',
		price: { credits: 51000 }
	}, {
		engName: '4',
		price: { credits: 45000 }
	}, {
		engName: '5',
		price: { credits: 52000 }
	}, {
		engName: '6',
		price: { credits: 55000 }
	}, {
		engName: '7',
		price: { credits: 48000 }
	}, {
		engName: '8',
		price: { credits: 53000 }
	}, {
		engName: '9',
		price: { credits: 50000 }
	}, {
		engName: '10',
		price: { credits: 54000 }
	}]
});

};