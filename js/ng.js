var app = angular.module("CocaineApp", ["firebase", "restangular"]);

app.controller("CocaineCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://cocaine.firebaseio.com");
  var sync = $firebase(ref);

  // download the data into a local object
  var syncObject = sync.$asObject();


  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");


});


// /* Base url for Cocaine API */
// app.config(function(RestangularProvider) {
// 	RestangularProvider.setBaseUrl('http://cocaine-api.com');
// });

// /* Convert auth_code for access_token */
// app.controller('AuthController', function($scope, Restangular) {

// 	var access_token = Restangular.one('/auth');
// 	access_token.get().then(function(token){
// 		//save to firebase
// 		syncObject.$bindTo($scope, "data");
// 	});

// });


/* Base url for Cocaine API */
app.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('https://api.forecast.io');
});

/* Convert auth_code for access_token */
app.controller('WeatherController', function($scope, Restangular) {

	var weather_data = Restangular.one('forecast/5c969057cab45a9343c660165ef1624f/33.7550,-84.3900?exclude=[currently,minutely,hourly,daily,alerts,flags,flags]');
	weather_data.get().then(function(weatherData){
		//save to firebase
		console.log("hi");
		alert("hi");
	});

});

