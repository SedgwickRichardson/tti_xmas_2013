
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('.wrapper').delay(350).fadeIn('fast', function() {
  	
  	// initiate music
  	soundManager.setup({
  	  url: 'assets/swf/',
  	  onready: function() {
  	    var mySound = soundManager.createSound({
  	      id: 'aSound',
  	      url: 'assets/mp3/final.mp3',
  	      loops: 10,
          autoLoad: true,
          onload:function() {
            this.play();
          }
  	    });
  	  },
  	  ontimeout: function() {
  	    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  	  }
  	});
  	
  	$('.snowfall').snowfall({
  		image :"assets/img/snowflake_blur.png", 
  		minSize: 10, 
  		maxSize:30,
  		flakeCount: 18,
  		maxSpeed: 1
  	});
  	

	  	
    $(".balls img").each(function(index) {
      var r = Math.floor((Math.random()*300)+1);
      $(this).delay(r).animate({top:-108},{duration:1000, easing: 'easeOutBounce'});    	
    });
    $(".greeting").delay(600).fadeIn();
    $(".instruction").delay(600).fadeIn();
	});

	
});

$(document).ready(function() {
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $(".fa-volume-up").removeClass("fa-volume-up").addClass("fa-volume-off");
  }
	$(".fa").click(function() {
    
    if ($(this).hasClass("fa-volume-up")) {  		
  		soundManager.pause('aSound');
      $(this).removeClass("fa-volume-up").addClass("fa-volume-off");
    } else {
  		soundManager.resume('aSound');
      $(this).removeClass("fa-volume-off").addClass("fa-volume-up");        
      
    }
		
	});

	//colorbox
	$(".clicktags a").colorbox({
		inline:true, 
		opacity: 0,
		transition: "none"
		
	});
	$(".ryobi_click a").colorbox({
	  rel:'ryobi_group', 
	  slideshow:true,
	  slideshowSpeed: 5000,
		opacity: 0,
		transition: "none"
  
  });


});
