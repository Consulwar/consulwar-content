import questLines from '/imports/content/Quest/Regular/server';

initQuestRegularContent = function () {
  initQuestRegularContentTutorial();

  _(questLines).keys().forEach((id) => {
    new game.QuestLine(questLines[id]);
  });
};
