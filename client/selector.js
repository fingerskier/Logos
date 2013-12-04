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
    return [
      {val:"gen",text:"Genesis"},
      {val:"exo",text:"Exodus"},
      {val:"lev",text:"Leviticus"},
      {val:"num",text:"Numbers"},
      {val:"dtr",text:"Dueteronomy"},
      {val:"jos",text:"Joshua"},
      {val:"jdg",text:"Judges"},
      {val:"rth",text:"Ruth"},
      {val:"sm1",text:"Samuel I"},
      {val:"sm2",text:"Samuel II"},
      {val:"kg1",text:"Kings I"},
      {val:"kg2",text:"Kings II"},
      {val:"cr1",text:"Chronicles I"},
      {val:"cr2",text:"Chronicles II"},
      {val:"ezr",text:"Ezra"},
      {val:"neh",text:"Nehemiah"},
      {val:"est",text:"Esther"},
      {val:"job",text:"Job"},
      {val:"psm",text:"Psalms"},
      {val:"prv",text:"Proverbs"},
      {val:"ecc",text:"Ecclesiastes"},
      {val:"sos",text:"Song of Solomon"},
      {val:"isa",text:"Isaiah"},
      {val:"jer",text:"Jeremiah"},
      {val:"lam",text:"Lamentations"},
      {val:"ezl",text:"Ezekiel"},
      {val:"dan",text:"Daniel"},
      {val:"hos",text:"Hosea"},
      {val:"jol",text:"Joel"},
      {val:"ams",text:"Amos"},
      {val:"obd",text:"Obadiah"},
      {val:"jnh",text:"Jonah"},
      {val:"mch",text:"Micah"},
      {val:"nhm",text:"Nahum"},
      {val:"hbk",text:"Habakkuk"},
      {val:"zph",text:"Zephaniah"},
      {val:"hgg",text:"Haggai"},
      {val:"zch",text:"Zechariah"},
      {val:"mlc",text:"Malachi"},
      {val:"mtw",text:"Matthew"},
      {val:"mrk",text:"Mark"},
      {val:"luk",text:"Luke"},
      {val:"jhn",text:"John"},
      {val:"act",text:"Acts"},
      {val:"rom",text:"Romans"},
      {val:"1co",text:"Corinthians I"},
      {val:"2co",text:"Corinthians II"},
      {val:"gal",text:"Galatians"},
      {val:"eph",text:"Ephesians"},
      {val:"phl",text:"Phillipans"},
      {val:"cls",text:"Colossians"},
      {val:"1th",text:"Thessalonians I"},
      {val:"2th",text:"Thessalonians II"},
      {val:"1tm",text:"Timothy I"},
      {val:"2tm",text:"Timothy II"),
      {val:"tts",text:"Titus"},
      {val:"pmn",text:"Philemon"},
      {val:"heb",text:"Hebrews"},
      {val:"jms",text:"James"},
      {val:"1pt",text:"Peter I"},
      {val:"2pt",text:"Peter II"},
      {val:"1jn",text:"John I"},
      {val:"2jn",text:"John II"},
      {val:"3jn",text:"John III"},
      {val:"jud",text:"Jude"},
      {val:"rev",text:"Revelation"}
    ];
  }
});