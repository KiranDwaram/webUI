app.controller('MainController', ['$scope', 'forecast', function($scope, forecast)
{
   function fetchWeather(city)
   {
	forecast.getWeather(city).then(function(data)
	{
      $scope.data=data;
	});
}

   $scope.findWeather=function(city)
   {
   	alert("Inside Controller");
   	$scope.data='';
   	fetchWeather(city);
   };
}]);