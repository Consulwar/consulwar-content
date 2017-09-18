import redArtifacts from '/imports/content/Resource/Artifact/Red/lib';

initArtefactsContentRed = function () {
  _(redArtifacts).keys().forEach((id) => {
    new game.Artefact(redArtifacts[id]);
  });
};
