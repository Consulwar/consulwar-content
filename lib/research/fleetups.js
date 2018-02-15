if (Meteor.isClient) {
  import '/imports/content/Research/Fleet/client';
} else {
  import '/imports/content/Research/Fleet/server';
}
