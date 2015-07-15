app.controller('MainController', ['$scope', 'forecast','time','news', function($scope,forecast,time,news)
{  
   console.log(app);
   console.log(forecast);
   function fetchWeather(city)
   {
      //alert("Inside fetch weather");
    console.log(forecast);
    //forecast.getWeather(city);

	forecast.getWeather(city).then(function(data)
	{
      console.log("result"+data);
      $scope.data=data;
	});

  time.getTime(city).then(function(data)
    {  
      console.log("time in controller"+data);
      $scope.t=data;
    });
   
   news.getNews(city).then(function(data)
    {  
      console.log("news in controller"+data);
      $scope.news=data;
    });
   }

   $scope.findWeather=function(city)
   {
    //	alert("Inside Controller");
   	$scope.data='';
   	fetchWeather(city);
   };
   $scope.oneAtATime=true;
  /* $scope.news=[
   {
    body:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas.",
    content:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas. After grossing a staggering 66 crores with a share of nearly 40 crores across the world on its first day, the film has now crossed the 1 billion milestone with a staggering 115 crores by its second day including all the versions.The film's Telugu version alone has grossed close to 67 crores worldwide by its second day and is all set to cross Atharintiki Dharedhi's lifetime collections of 83 plus crores by the first weekend itself. Baahubali's overseas menace is no less as the film has already beaten India's biggest overseas earner in 2015 Tanu Weds Manu Returns' collections of $3.1 million by collecting more than $3.3 million within just 3 days, showcasing the Telugu film's stamina across the world.",
    title:"Baahubali Breaks into Rs 100 Crore Club"
   },
   {
    body:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas.",
    content:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas. After grossing a staggering 66 crores with a share of nearly 40 crores across the world on its first day, the film has now crossed the 1 billion milestone with a staggering 115 crores by its second day including all the versions.The film's Telugu version alone has grossed close to 67 crores worldwide by its second day and is all set to cross Atharintiki Dharedhi's lifetime collections of 83 plus crores by the first weekend itself. Baahubali's overseas menace is no less as the film has already beaten India's biggest overseas earner in 2015 Tanu Weds Manu Returns' collections of $3.1 million by collecting more than $3.3 million within just 3 days, showcasing the Telugu film's stamina across the world.",
    title:"Baahubali Breaks into Rs 100 Crore Club"
   },
   {
    body:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas.",
    content:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas. After grossing a staggering 66 crores with a share of nearly 40 crores across the world on its first day, the film has now crossed the 1 billion milestone with a staggering 115 crores by its second day including all the versions.The film's Telugu version alone has grossed close to 67 crores worldwide by its second day and is all set to cross Atharintiki Dharedhi's lifetime collections of 83 plus crores by the first weekend itself. Baahubali's overseas menace is no less as the film has already beaten India's biggest overseas earner in 2015 Tanu Weds Manu Returns' collections of $3.1 million by collecting more than $3.3 million within just 3 days, showcasing the Telugu film's stamina across the world.",
    title:"Baahubali Breaks into Rs 100 Crore Club"
   },
   {
    body:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas.",
    content:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas. After grossing a staggering 66 crores with a share of nearly 40 crores across the world on its first day, the film has now crossed the 1 billion milestone with a staggering 115 crores by its second day including all the versions.The film's Telugu version alone has grossed close to 67 crores worldwide by its second day and is all set to cross Atharintiki Dharedhi's lifetime collections of 83 plus crores by the first weekend itself. Baahubali's overseas menace is no less as the film has already beaten India's biggest overseas earner in 2015 Tanu Weds Manu Returns' collections of $3.1 million by collecting more than $3.3 million within just 3 days, showcasing the Telugu film's stamina across the world.",
    title:"Baahubali Breaks into Rs 100 Crore Club"
   },
   {
    body:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas.",
    content:"The Baahubali box-office Tsunami has not slowed down even on its second day, as the film's earth shattering collections have been erasing all the existing records by double the margins in almost all the areas. After grossing a staggering 66 crores with a share of nearly 40 crores across the world on its first day, the film has now crossed the 1 billion milestone with a staggering 115 crores by its second day including all the versions.The film's Telugu version alone has grossed close to 67 crores worldwide by its second day and is all set to cross Atharintiki Dharedhi's lifetime collections of 83 plus crores by the first weekend itself. Baahubali's overseas menace is no less as the film has already beaten India's biggest overseas earner in 2015 Tanu Weds Manu Returns' collections of $3.1 million by collecting more than $3.3 million within just 3 days, showcasing the Telugu film's stamina across the world.",
    title:"Baahubali Breaks into Rs 100 Crore Club"
   }];*/
   
}]);