import communicationAchievements from '/imports/content/Achievement/Communication/lib';

initAchievementsContentCommunication = function () {
  _(communicationAchievements).keys().forEach((id) => {
    new game.Achievement(communicationAchievements[id]);
  });
};
