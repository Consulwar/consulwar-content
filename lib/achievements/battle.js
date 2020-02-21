import battleAchievements from '/imports/content/Achievement/Battle/lib';

initAchievementsContentBattle = function () {
  _(battleAchievements).keys().forEach((id) => {
    new game.Achievement(battleAchievements[id]);
  });
};
