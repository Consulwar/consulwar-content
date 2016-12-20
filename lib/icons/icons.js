initIconsContent = function() {
	
new game.IconGroup({
	engName: 'common',
	name: 'Стандартные',
	isDefault: true,
	icons: [{
		engName: '1'
	}, {
		engName: '2',
		requirements: { rank: 1 }
	}, {
		engName: '3',
		requirements: { rank: 2 }
	}, {
		engName: '4',
		requirements: { rank: 3 }
	}, {
		engName: '5',
		requirements: { rank: 4 }
	}, {
		engName: '6',
		requirements: { rank: 5 }
	}, {
		engName: '7',
		requirements: { rank: 6 }
	}, {
		engName: '8',
		requirements: { rank: 7 }
	}]
});

new game.IconGroup({
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
	}]
});

new game.IconGroup({
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

new game.IconGroup({
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
	}, {
		engName: '11',
		price: { credits: 54000 }
	}, {
		engName: '12',
		price: { credits: 53000 }
	}, {
		engName: 'bratator',
		price: { credits: 48000 }
	}, {
		engName: 'exitman',
		price: { credits: 51000 }
	}, {
		engName: 'id69',
		price: { credits: 50000 }
	}, {
		engName: 'lazervolk',
		price: { credits: 52000 }
	}, {
		engName: 'sergeant',
		price: { credits: 52000 }	
	}, {
		engName: 'pinguin',
		price: { credits: 46000 }	
	}, {
		engName: 'farrneel',
		price: { credits: 46000 }	
	}, {
		engName: 'kifat',
		price: { credits: 52000 }	
	}, {
		engName: 'lopus',
		price: { credits: 47000 }	
	}, {
		engName: 'li-fer',
		price: { credits: 50000 }	
	}]
});

};