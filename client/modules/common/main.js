

Template.main.helpers({
    onLoginPage: function (routeName) {
        var curRoute = Router.current().route;
        return curRoute.getName() === 'login' ? false : true;
    }
});

