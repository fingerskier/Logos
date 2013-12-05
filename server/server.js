Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.publish("Verses", function() {
  return verses.find({
  	owner: this.userId
  });
});
