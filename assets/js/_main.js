$(document).ready(function() {


	// initiate snow fall
	$.fn.snow({ minSize: 20, maxSize: 45, newOn: 800, flakeColor: '#fff' });
	
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
			//width:"740px", 
			//height:"500px",
			opacity: 0,
			transition: "none"
		
	});
	
});
