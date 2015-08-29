// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }


Meteor.startup(function () {
    if (Messages.find().count() === 0) {
        for( var i = 0; i < 10; i++ ) {
            Users.insert({text: "A dummy message"});
        }
    }
});

Template.user_loggedout.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        console.log("Form submitted.");
    }

    // "click #login": function (event) {
    //     event.preventDefault();
    //     Meteor.loginWithGithub({
    //       requestPermissions: ['user', 'public_repo']
    //     }, function (err) {
    //       if (err)
    //         Session.set('errorMessage', err.reason || 'Unknown error');
    //     });
    // }
});

Template.user_loggedin.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
