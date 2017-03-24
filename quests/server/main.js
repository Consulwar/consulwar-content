initQuestContent = function() {
	'use strict';

	initQuestRegularContent();
	initQuestDailyContent();

	Game.Helpers.deepFreeze(Game.Quest.regularQuests);
	Game.Helpers.deepFreeze(Game.Quest.dailyQuests);
};