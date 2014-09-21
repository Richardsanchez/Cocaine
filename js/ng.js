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

