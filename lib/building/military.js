if (Meteor.isClient) {
  import '/imports/content/Building/Military/client';
} else {
  import '/imports/content/Building/Military/server';
}
