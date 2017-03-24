initAchievementsContent = function() {
	'use strict';

	initAchievementsContentGeneral();
	initAchievementsContentCosmos();
	initAchievementsContentBattle();
	initAchievementsContentScience();
	initAchievementsContentCommunication();

	Game.Helpers.deepFreeze(Game.Achievements.items);
};