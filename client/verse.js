Template.verse.helpers({
  current_book: function() {
    return Session.get("current_book");
  },
  current_chapter: function() {
  	return Session.get("current_chapter");
  },
  current_verse: function() {
  	return Session.get("current_verse");
  }
});
