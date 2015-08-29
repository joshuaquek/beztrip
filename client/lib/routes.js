

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