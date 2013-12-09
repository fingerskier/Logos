Session.set("verse_text", "");

Meteor.startup(function() {
	$(document).ready(function() {
		Meteor.flush();
		$("#book_list").focus();
	});
});

Template.verse.events({
	"click #show_verse": function() {
		var the_verse = verses.findOne({
			book: Session.get("current_book"),
			chapter: Session.get("current_chapter"),
      verse: Session.get("current_verse")
		});
		
		if (the_verse) {
	  	Session.set("verse_id", the_verse._id);
	  	Session.set("verse_text", the_verse.text);	  	
	  	Session.set("verse_mode", "review");
		} else {
	  	Session.set("verse_id", "");
	  	Session.set("verse_text", "");
			Session.set("verse_mode", "edit");
		}
  },
	"click #edit_verse": function() {
		Session.set("verse_mode", "edit");
		Meteor.flush();
		$("#verse_editor").focus();
	},
	"click #hide_verse": function() {
		Session.set("verse_mode", "test");
		$("#book_list").focus();
	},
	"click #save_verse": function() {
		var the_id = Session.get("verse_id");
		Session.set("verse_text", $("#verse_editor").val());
		
		if (the_id) {
			verses.update(the_id, {
				$set: {text: Session.get("verse_text")}
			});
		} else {
			var new_rec = {
				book: Session.get("current_book"),
				chapter: Session.get("current_chapter"),
				verse: Session.get("current_verse"),
				text: Session.get("verse_text"),
				owner: Meteor.userId()
			};
			
			the_id = verses.insert(new_rec);
			Session.set("verse_id", the_id);
		}
		Session.set("verse_mode", "test");
		$("#book_list").focus();
	}
});

Template.verse.helpers({
	book_name: function() {
		var abbr = Session.get("current_book");
		
		for (var I in _books) {
			if (_books[I].val === abbr)
				return _books[I].name
		}
	},
  current_book: function() {
    return Session.get("current_book");
  },
  current_chapter: function() {
  	return Session.get("current_chapter");
  },
  current_verse: function() {
  	return Session.get("current_verse");
  },
  editing_verse: function() {
  	return Session.equals("verse_mode", "edit");
  },
  reviewing_verse: function() {
  	return Session.equals("verse_mode", "review");
  },
  testing_verse: function() {
  	return Session.equals("verse_mode", "test");
  },
  verse_text: function() {
  	return Session.get("verse_text");
  }
});
