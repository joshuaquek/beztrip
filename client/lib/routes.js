

//------------------------------------- ROUTES ----------------------------------

Router.route('/login');   		// Login Page

Router.route('/trips');   		// Trips Page



Router.route('/', {				// Home Page
	name: 'home',
	template: 'home'
});

Router.route('/checklist', { 	// Checklists
	name: 'checklist',
	template: 'checklist'
});

//---------------------------------- ROUTER CONFIG ------------------------------

Router.configure({				// This defines the layout used for every page,...
	layoutTemplate: 'main'		// ...where the wrapper page where you can define your HEADER and FOOTER
});


//
//var requireLogin = function() {
//	if (! Meteor.user()) {
//		// If user is not logged in render login
//		this.render('login');
//	} else {
//		//if user is logged in render whatever route was requested
//		this.next();
//	}
//}
//
//// Before any routing run the requireLogin function.
//// Except in the case of "landingpage".
//// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...)
//
//
//
//Router.onBeforeAction(requireLogin, {except: ['landingpage']});
//




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

Router.route('/documents', {				// Documents
	name: 'documents',
	template: 'documents'
});

Router.route('/addpurchase', {				// AddPurchase
	name: 'addpurchase',
	template: 'addpurchase'
});

//---------------------------------- ROUTER CONFIG ------------------------------

Router.configure({				// This defines the layout used for every page,...
	layoutTemplate: 'main'		// ...where the wrapper page where you can define your HEADER and FOOTER
});

