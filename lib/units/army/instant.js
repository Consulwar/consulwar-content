if (Meteor.isClient) {
  import '/imports/content/Unit/Human/Instant/client';
} else {
  import '/imports/content/Unit/Human/Instant/server';
}
