var ctx = document.getElementById("myChart").getContext("2d");


var myChart = new Chart(ctx, {
	type: 'pie',
	data: {
		
	labels: ["American Indian", "Asian/Pacific Islander", "Black", "Hispanic", "Unknown", "White",],
	datasets: [{
		backgroundColor: [
			"red",
			"orange",
			"yellow",
			"green",
			"blue",
			"purple",

		],

		data: [0.4, 5.1, 40.1, 33.3, 4.1, 17,]
	}]
}

});
