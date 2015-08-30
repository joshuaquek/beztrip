
Template.loginButtonsBig.events({  
    'click a#loginGoogle': function(e, t) {
        e.preventDefault();

        Meteor.loginWithGoogle({
           requestOfflineToken: 'true'
        }, Router.go('home'));
    }
});
