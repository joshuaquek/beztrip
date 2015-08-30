Template.managetrips.events({
	'click .finances': function(e){
		e.preventDefault();
		Router.go('/finances');
	},

	'click .documents': function(e){
		e.preventDefault();
		Router.go('/documents');
	},

	'click .checklist': function(e){
		e.preventDefault();
		Router.go('/checklist');
	}
});

