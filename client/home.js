Template.home.rendered = function () {
	$('#definition').hide();
};

Template.home.events({
	'click #def_toggle': function () {
		console.log('toggleit');
		$('#definition').fadeToggle();
	}
});