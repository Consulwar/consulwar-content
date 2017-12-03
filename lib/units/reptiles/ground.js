if (Meteor.isClient) {
  import '/imports/content/Unit/Reptile/Ground/Infantry/client';
  import '/imports/content/Unit/Reptile/Ground/Enginery/client';
  import '/imports/content/Unit/Reptile/Ground/Air/client';
} else {
  import '/imports/content/Unit/Reptile/Ground/Infantry/server';
  import '/imports/content/Unit/Reptile/Ground/Enginery/server';
  import '/imports/content/Unit/Reptile/Ground/Air/server';
}
