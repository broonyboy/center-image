


	/* Yahoo Weather */
	$(document).ready(function() {
      getWeather(); //Get the initial weather.
      
    setInterval(getWeather, 600000); //Update the weather every 10 minutes.
    });
	
	function getWeather() {
      $.simpleWeather({
     /*location: 'YOURCITY, YOURSTATE',*/
     woeid: '13098',
     unit: 'c',
    
	success: function(weather) {
      html = '<i class="icon_w-'+weather.code+'"></i> '+weather.city+', '+weather.region+' '+weather.temp+'&deg;'+weather.units.temp+'';
     $("#weather").html(html);
    },
   
   error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

