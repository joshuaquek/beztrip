Template.navigation.events({
    "click #logout": function (event, template) {
        event.preventDefault();
        Meteor.logout(function (error) {
            if (error) {
                // Display the logout error to the user however you want
            }
        });
        Router.go('login');
    },

});

Template.navigation.helpers({
    active: function (routeName) {
        var curRoute = Router.current().route;
        return curRoute.getName() === routeName ? 'active' : '';
    },
    onFinancesPage: function (routeName) {
        var curRoute = Router.current().route;
        return curRoute.getName() === routeName ? true : false;
    }
});

