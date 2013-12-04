Template.selector.events({
  "change #book_list": function(evt, tmp) {
    Session.set("current_book", $("#book_list").val());
  },
  "change #chapter_list": function(evt, tmp) {
    Session.set("current_chapter", $("#chapter_list").val());
  },
  "change #verse_list": function(evt, tmp) {
    Session.set("current_verse", $("#verse_list").val());
  }
});

Template.selector.helpers({
  books: function() {
    return _books;
  },
  chapters: function() {
  	var I = 0;
  	var C = _chapter[Session.get("current_book")];
  	var result = [];
  	
  	for (var X in C)
  		result.push(++I);
  	
  	return result;
  },
  verses: function(book_name) {
  	if (!Session.equals("current_book", undefined)) {
	  	var I = 0;
	  	var L = _chapter[Session.get("current_book")][Session.get("current_chapter")-1];
	  	var result = [];
	  	
	  	for (var I = 0; I < L; I++)
	  		result.push(I+1);
	  	
	  	return result;
  	}
  }
});
