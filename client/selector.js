/* verse_mode enum
	test == verse not shown, reciting from memory
	review == show verse text
	edit == edit verse text in a textarea
*/
Session.set("verse_mode", "test");

Template.selector.events({
  "change #book_list": function(evt, tmp) {
    Session.set("current_book", $("#book_list").val());
		Session.set("verse_mode", "test");
  },
  "change #chapter_list": function(evt, tmp) {
    Session.set("current_chapter", parseInt($("#chapter_list").val()));
		Session.set("verse_mode", "test");
  },
  "change #verse_list": function(evt, tmp) {
    Session.set("current_verse", parseInt($("#verse_list").val()));
		Session.set("verse_mode", "test");
  }
});

Template.selector.helpers({
  books: function() {
    return _books;
  },
  chapters: function() {
  	var I = 0;
  	var C = _chapters[Session.get("current_book")];
  	var result = [];
  	
  	for (var X in C)
  		result.push(++I);
  	
  	return result;
  },
  verses: function(book_name) {
  	if (!Session.equals("current_book", undefined) && parseInt(Session.get("current_chapter"))) {
	  	var I = 0;
	  	var L = _chapters[Session.get("current_book")][Session.get("current_chapter")-1];
	  	var result = [];
	  	
	  	for (var I = 0; I < L; I++)
	  		result.push(I+1);
	  	
	  	return result;
  	}
  }
});
