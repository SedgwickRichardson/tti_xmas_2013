$(document).ready(function() {


	// initiate snow fall
/*
	$(document).snowfall({
		image :"assets/img/snowflake.png", 
		minSize: 10, 
		maxSize:32,
		flakeCount: 20,
		maxSpeed: 2
	});
*/
	if ($("html").hasClass("lt-ie8")) {
	
	  // add JS for IE6+7 here
	  
	} else {
	
		$.fn.snow({ minSize: 20, maxSize: 45, newOn: 300, flakeColor: '#fff' });
		
		// initiate music
		soundManager.setup({
		  url: 'assets/swf/',
		  onready: function() {
		    var mySound = soundManager.createSound({
		      id: 'aSound',
		      url: 'assets/mp3/opt1.mp3'
		    });
		    mySound.play();
		  },
		  ontimeout: function() {
		    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
		  }
		});
		
		//colorbox
		$(".clicktags a").colorbox({
			inline:true, 
			opacity: 0,
			transition: "none"
			
		});
	}
});
