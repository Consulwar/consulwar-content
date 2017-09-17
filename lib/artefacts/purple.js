import purpleArtifacts from '/imports/content/Resource/Artifact/Purple/lib';

initArtefactsContentPurple = function () {
  _(purpleArtifacts).keys().forEach((id) => {
    new game.Artefact(purpleArtifacts[id]);
  });
};
