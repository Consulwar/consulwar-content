if (Meteor.isClient) {
  import '/imports/content/Unit/Human/Defense/client';
} else {
  import '/imports/content/Unit/Human/Defense/server';
}
