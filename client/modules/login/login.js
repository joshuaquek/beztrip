<<<<<<< HEAD
Template.loginButtonsBig.events({  
    'click a#loginGoogle': function(e, t) {
        e.preventDefault();

        Meteor.loginWithGoogle({
           requestOfflineToken: 'true'
        }, Router.go('home'));
    }
});
=======
/**
 * Created by joshuaquek on 29/8/15.
 */
>>>>>>> 3f61e868ca7ef81f0390c340e3de0b29b81988f1
