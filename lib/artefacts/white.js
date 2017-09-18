import whiteArtifacts from '/imports/content/Resource/Artifact/White/lib';

initArtefactsContentWhite = function () {
  _(whiteArtifacts).keys().forEach((id) => {
    new game.Artefact(whiteArtifacts[id]);
  });
};
