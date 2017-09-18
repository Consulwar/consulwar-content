import orangeArtifacts from '/imports/content/Resource/Artifact/Orange/lib';

initArtefactsContentOrange = function () {
  _(orangeArtifacts).keys().forEach((id) => {
    new game.Artefact(orangeArtifacts[id]);
  });
};
