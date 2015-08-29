

//------------------------------------- ROUTES ----------------------------------

Router.route('/login');   		// Login Page

Router.route('/', {				// Home Page
	name: 'home',
	template: 'home'
});



//---------------------------------- ROUTER CONFIG ------------------------------

Router.configure({				// This defines the layout used for every page,...
	layoutTemplate: 'main'		// ...where the wrapper page where you can define your HEADER and FOOTER
});


var requireLogin = function() {
	if (! Meteor.user()) {
		// If user is not logged in render login
		this.render('login');
	} else {
		//if user is logged in render whatever route was requested
		this.next();
	}
}

// Before any routing run the requireLogin function.
// Except in the case of "landingpage".
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...)
Router.onBeforeAction(requireLogin, {except: ['landingpage']});