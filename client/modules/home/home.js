Template.home.rendered = function() {
	var d = new Date();
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		
		var mins = ('0' + d.getMinutes()).slice(-2);
		
		document.getElementById("todaydate").innerHTML = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
		document.getElementById("todaytime").innerHTML = d.getHours() + ':' + mins;
}