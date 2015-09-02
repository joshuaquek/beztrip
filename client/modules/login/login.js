
Template.loginButtonsBig.events({  
    'click a#loginGoogle': function(e, t) {
        e.preventDefault();

        Meteor.loginWithGoogle({
           requestOfflineToken: 'true'
        }, Router.go('home'));
    }
});

Template.login.events({
    'click #loginNow': function(e, t) {
        e.preventDefault();
        Router.go('home');
    }
});

