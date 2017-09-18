import greenArtifacts from '/imports/content/Resource/Artifact/Green/lib';

initArtefactsContentGreen = function () {
  _(greenArtifacts).keys().forEach((id) => {
    new game.Artefact(greenArtifacts[id]);
  });
};
