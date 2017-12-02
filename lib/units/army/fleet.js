if (Meteor.isClient) {
  import '/imports/content/Unit/Human/Space/client';
} else {
  import '/imports/content/Unit/Human/Space/server';
}
