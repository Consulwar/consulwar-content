if (Meteor.isClient) {
  import '/imports/content/Unit/Human/Ground/Infantry/client';
  import '/imports/content/Unit/Human/Ground/Enginery/client';
  import '/imports/content/Unit/Human/Ground/Air/client';
} else {
  import '/imports/content/Unit/Human/Ground/Infantry/server';
  import '/imports/content/Unit/Human/Ground/Enginery/server';
  import '/imports/content/Unit/Human/Ground/Air/server';
}
