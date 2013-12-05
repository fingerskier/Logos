verses = new Meteor.Collection("verses");

verses.allow({
  insert: function(userId, doc) {
    return (userId && doc.owner === userId);
  },
  update: function(userId, docs, fields, modifier) {
    return _.all(docs, function(doc) {
      return doc.owner === userId;
    });
  },
  remove: function (userId, docs) {
    return _.all(docs, function(doc) {
      return doc.owner === userId;
    });
  }
});