Meteor.startup(function() {
  $(document).ready(function() {
    // $('#popover_def').popover({
    //   animation: true,
    //   delay: 100
    // });
    $("#book_list").focus();
  });
});


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
