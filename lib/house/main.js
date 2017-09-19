let houseItems;
if (Meteor.isClient) {
  houseItems = require('/imports/content/House/client')['default'];
} else {
  houseItems = require('/imports/content/House/server')['default'];
}

initHouseContent = function () {
  _(houseItems).keys().forEach((id) => {
    new game.HouseItem(houseItems[id]);
  });
};
