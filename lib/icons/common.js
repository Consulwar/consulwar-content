initIconsContentCommon = function() {
'use strict';

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

};