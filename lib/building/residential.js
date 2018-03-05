if (Meteor.isClient) {
  import '/imports/content/Building/Residential/client';
} else {
  import '/imports/content/Building/Residential/server';
}
