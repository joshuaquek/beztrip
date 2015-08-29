

//------------------------------------- ROUTES ----------------------------------

Router.route('/login');   		// Login Page

Router.route('/', {				// Home Page
	name: 'home',
	template: 'home'
});

Router.route('/itinerary', {				// Home Page
	name: 'itinerary',
	template: 'itinerary'
});

Router.route('/suggestions', {				// suggestions
	name: 'suggestions',
	template: 'suggestions'
});

Router.route('/managetrips', {				// Manage Trips
	name: 'managetrips',
	template: 'managetrips'
});

Router.route('/finances', {				// Finances
	name: 'finances',
	template: 'finances'
});

Router.route('/documents', {				// Finances
	name: 'documents',
	template: 'documents'
});
//---------------------------------- ROUTER CONFIG ------------------------------

Router.configure({				// This defines the layout used for every page,...
	layoutTemplate: 'main'		// ...where the wrapper page where you can define your HEADER and FOOTER
});