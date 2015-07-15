//alert("Hi forecast.js");

app.factory('forecast',['$http', '$q',function($http, $q)
{  
	//alert("factory created");
    //console.log(app);
    //console.log(forecast);

   function getWeather(city)
   {
   	 var deferred=$q.defer();
   	 //alert("Inside getWeather");
	  $http.get('http://api.worldweatheronline.com/free/v2/weather.ashx?key=f77a9195f2e5762ba9240aa21f66c&q='+city+'&num_of_days=5  &tp=3&format=json')
	   .success(function(data)
	   {
	   	console.log(data);
	    deferred.resolve(data);
	   })
	   .error(function(err)
	   {
	   	console.log(err);
        deferred.reject(err);
	   });
	  return deferred.promise;
   }
  return {
   	getWeather: getWeather
   };

}]);



app.factory('time', ['$http','$q',function($http,$q)
	{
		function getTime(city)
		{    
			var deferred=$q.defer();
			//alert("inside getTime");
			$http.get('http://api.worldweatheronline.com/free/v2/tz.ashx?key=4f2b811cc30abe0daed44eba197a8&q='+city+'&format=json')
			.success(function(data)
			{
               console.log("Time "+data);
               deferred.resolve(data);
			})
			.error(function(err)
				{
					console.log(err);
				   deferred.reject(err);
				});
			return deferred.promise;
		}
		return {
			getTime:getTime
		};
	}]);