Session.set("verse_text", "");
Session.set('verse_mode', '');

Meteor.startup(function() {
	$(document).ready(function() {
		Meteor.flush();
		$("#book_list").focus();
	});
});

Template.verse.events({
	"click #edit_verse": edit_verse,
	"click #hide_verse": hide_verse,
	"click #save_verse": save_verse,
	"click #show_verse": show_verse,
	"click #popLeft_verse": shrink_verse_left,
	"click #popRight_verse": shrink_verse_right
});

/* TEMPLATE EVENT HANDLERS */
function edit_verse() {
	Session.set("verse_mode", "edit");
	Session.set("verse_text", Session.get("orig_text"));
	Meteor.flush();
	$("#verse_editor").focus();
};
function hide_verse() {
	Session.set("verse_mode", "test");
	$("#book_list").focus();
};
function save_verse() {
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
			owner: Meteor.userId(),
			text: Session.get("verse_text"),
			verse: Session.get("current_verse")
		};
		
		the_id = verses.insert(new_rec);
		Session.set("verse_id", the_id);
	}
	Session.set("verse_mode", "test");
	$("#book_list").focus();
};
function show_verse() {
	var the_verse = verses.findOne({
		book: Session.get("current_book"),
		chapter: Session.get("current_chapter"),
    verse: Session.get("current_verse")
	});
	
	if (the_verse) {
		Session.set("popRight_pos", the_verse.text.split(' ').length);
		Session.set("popLeft_pos", 0);
  	Session.set("verse_id", the_verse._id);
  	Session.set("verse_text", the_verse.text);	
  	Session.set("orig_text", the_verse.text);	
  	Session.set("verse_mode", "review");
	} else {
		Session.set("popRight_pos", 0);
		Session.set("popLeft_pos", 0);
  	Session.set("verse_id", "");
  	Session.set("verse_text", "");
  	Session.set("orig_text", "");
		Session.set("verse_mode", "edit");
	}
};
function shrink_verse_left() {
	var len = Session.get("popLeft_pos");
	var temp = Session.get("verse_text");

	if (len >= Session.get("popRight_pos")) return;
	temp = temp.split(' ');
	temp[len] = '*';
	temp = temp.join(' ');
	len += 1;

	Session.set('verse_text', temp);
	Session.set('popLeft_pos', len);
};
function shrink_verse_right() {
	var len = Session.get("popRight_pos");
	var temp = Session.get("verse_text");

	len -= 1;
	if (len < 0) return;
	temp = temp.split(' ');
	temp[len] = '*';
	temp = temp.join(' ');

	Session.set('verse_text', temp);
	Session.set('popRight_pos', len);
};

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
