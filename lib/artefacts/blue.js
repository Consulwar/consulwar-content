import blueArtifacts from '/imports/content/Resource/Artifact/Blue/lib';

initArtefactsContentBlue = function () {
  _(blueArtifacts).keys().forEach((id) => {
    new game.Artefact(blueArtifacts[id]);
  });
};
