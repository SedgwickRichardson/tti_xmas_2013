$(document).ready(function() {


	// initiate snow fall
	$.fn.snow({ minSize: 10, maxSize: 30, newOn: 500, flakeColor: '#fff' });
	
	// initiate music
	soundManager.setup({
	  url: 'assets/swf/',
	  onready: function() {
	    var mySound = soundManager.createSound({
	      id: 'aSound',
	      url: 'assets/mp3/opt2.mp3'
	    });
	    mySound.play();
	  },
	  ontimeout: function() {
	    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
	  }
	});
	
});
