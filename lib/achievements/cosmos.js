import cosmosAchievements from '/imports/content/Achievement/Space/lib';

initAchievementsContentCosmos = function () {
  _(cosmosAchievements).keys().forEach((id) => {
    new game.Achievement(cosmosAchievements[id]);
  });
};
