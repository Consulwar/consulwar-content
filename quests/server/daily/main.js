import dailyQuests from '/imports/content/Quest/Daily/server';

initQuestDailyContent = function () {
  _(dailyQuests).keys().forEach((id) => {
    new game.DailyQuest(dailyQuests[id]);
  });
};