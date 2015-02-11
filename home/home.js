if (Meteor.isServer) {
	Meteor.startup(function () {
	});
}

Router.route('/', function() {
  this.render('home');
});

if (Meteor.isClient) {
	Meteor.startup(function () {
	});
}
