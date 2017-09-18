import generalAchievements from '/imports/content/Achievement/General/lib';

initAchievementsContentGeneral = function () {
  _(generalAchievements).keys().forEach((id) => {
    new game.Achievement(generalAchievements[id]);
  });
};
