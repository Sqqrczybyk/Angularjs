var app=angular.module( "myApp", ['ngRoute', 'ngAnimate'] );

app.config( function ( $routeProvider ) {
  $routeProvider
    .when('/home',{
		templateUrl: 'strony/home.html',
		controller: 'homeCtrl'
		})
    .when('/about', {
		templateUrl: 'strony/about.html', 
		controller: 'aboutCtrl'
		})
    .when('/contact', {
		templateUrl: 'strony/contact.html',
		controller: 'contactCtrl'
		})
	.when('/chujten', {
		templateUrl: 'strony/chujten.html',
		controller: 'chujtenCtrl'
		})
	.when('/', {
		templateUrl: 'strony/index.html',
		
		})
});

app.controller( 'homeCtrl', function ( $scope ) {
	$scope.pageClass = 'page-home';
});
app.controller( 'aboutCtrl', function ( $scope ) {
		$scope.pageClass = 'page-about';
});
app.controller( 'contactCtrl', function ( $scope ) {
		$scope.pageClass = 'page-contact';
});
app.controller( 'chujtenCtrl', function ( $scope ) {
		$scope.pageClass = 'page-chujten';
});
app.controller( '/Ctrl', function ( $scope ) {
});

app.controller('timeCtrl', function($scope, $interval){
	var time = function() {
		$scope.clock = Date.now();
	}
	time();
	$interval(time, 1000);
});
app.controller('repeatCtrl', function($scope){
	$scope.skills = [
		'HTML',
		'CSS',
		'JavaScript',
		'AngularJS',
	]
	$scope.contacts = [
		'Tel: 603 786 689',
		'email: ernesto1103@o2.pl',
	]
});
