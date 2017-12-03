if (Meteor.isClient) {
  import '/imports/content/Resource/Artifact/White/client';
  import '/imports/content/Resource/Artifact/Green/client';
  import '/imports/content/Resource/Artifact/Blue/client';
  import '/imports/content/Resource/Artifact/Purple/client';
  import '/imports/content/Resource/Artifact/Orange/client';
  import '/imports/content/Resource/Artifact/Red/client';
} else {
  import '/imports/content/Resource/Artifact/White/server';
  import '/imports/content/Resource/Artifact/Green/server';
  import '/imports/content/Resource/Artifact/Blue/server';
  import '/imports/content/Resource/Artifact/Purple/server';
  import '/imports/content/Resource/Artifact/Orange/server';
  import '/imports/content/Resource/Artifact/Red/server';
}
