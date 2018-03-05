if (Meteor.isClient) {
  import '/imports/content/Research/Evolution/client';
} else {
  import '/imports/content/Research/Evolution/server';
}
