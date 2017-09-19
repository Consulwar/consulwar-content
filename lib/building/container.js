let fleetContainers;
if (Meteor.isClient) {
  fleetContainers = require('/imports/content/Container/Fleet/client')['default'];
} else {
  fleetContainers = require('/imports/content/Container/Fleet/server')['default'];
}

initBuildingSpecialContainerContent = function () {
  _(fleetContainers).keys().forEach((id) => {
    new game.Container(fleetContainers[id]);
  });
};
