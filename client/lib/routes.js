

//------------------------------------- ROUTES ----------------------------------


Router.route('/register');		// Register Page

Router.route('/login');   		// Login Page

Router.route('/', {				// Home Page
	template: 'home'
});



//---------------------------------- ROUTER CONFIG ------------------------------

//This defines the layout used for every page, where the wrapper page where you can define your HEADER and FOOTER
Router.configure({
	layoutTemplate: 'main'
});