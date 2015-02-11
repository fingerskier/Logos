if (Meteor.isServer) {
	Meteor.startup(function () {
	});
}

Router.route('/:book/:chapter/:verse', function() {
	Session.set('current_book', this.params.book);
	Session.set('current_chapter', parseInt(this.params.chapter));
	Session.set('current_verse', parseInt(this.params.verse));

  this.render('home');
});

if (Meteor.isClient) {
	Meteor.startup(function () {
		Session.setDefault('current_book', 'gen');
		Session.setDefault('current_chapter', 1);
		Session.setDefault('current_verse', 1);
	});

	Template.verse_finder.events({
	  "change #book_list": function(evt, tmp) {
	    Session.set("current_book", $("#book_list").val());
	  },
	  "change #chapter_list": function(evt, tmp) {
	    Session.set("current_chapter", parseInt($("#chapter_list").val()));
	  },
	  "change #verse_list": function(evt, tmp) {
	    Session.set("current_verse", parseInt($("#verse_list").val()));
	  }
	});

	Template.verse_finder.helpers({
		book: function() {
			return Session.get('book');
		},
	  books: function() {
	    return _books;
	  },
	  chapter: function() {
	  	return Session.get('chapter');
	  },
	  chapters: function() {
	  	var I = 0;
	  	var C = _chapters[Session.get("current_book")];
	  	var result = [];
	  	
	  	for (var X in C)
	  		result.push(++I);
	  	
	  	return result;
	  },
	  verse_link: function() {
	  	var book = $('#book_list').val();
	  	var chapter = $('#chapter_list').val();
	  	var verse = $('#verse_list').val();
	  	
	  	var url =  '/' + Session.get('current_book') + '/' + Session.get('current_chapter') + '/' + Session.get('current_verse');

	  	return url;
	  },
	  verse: function() {
	  	return Session.get('current_verse');
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
}
