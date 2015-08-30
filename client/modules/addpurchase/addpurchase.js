// Template.addpurchase.events

purchases = new Mongo.Collection("purchases");

Template.addpurchase.events({
	'click .addpurchase': function(e){
		e.preventDefault();
		Session.set("purchase", "drink");
		console.log('purccchase: ', "AGJASJHDKASH");
		// Purchases.insert({type: "Drink", amount: "$25.00", createdAt: new Date() });
		Router.go('/finances');
	}
});
