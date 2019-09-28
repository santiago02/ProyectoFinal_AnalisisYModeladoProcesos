/*

	Green Flip Main Java Script

	- - - - - Contents - - - - -
	
	01 - 404 Page (Animate Number)
	02 - Navigation & Scroll
	03 - Supersized plugin
	04 - Video container
	05 - Map Settings
	
	06 - Owl Sliders Plugin
	06 - 01 - Owlslider Intro
	06 - 02 - Owlslider About-us
	06 - 03 - Owlslider Customers-Reviews
	06 - 04 - Owlslider Pricing-Table
	06 - 05 - Owlslider Team
	06 - 06 - Owlslider Sidebar-Widget
	
	07 - Circle Progress Bar
	08 - Line Progress Bar
	
	09 - Animate Number Plugin
	09 - 01 - Random Facts
	09 - 02 - Happy Customers
	09 - 03 - We work 24/7
	
	10 - Gallery Isotope
	11 - jQuery isotope
	12 - Popup for images
	13 - Contact form

	- - - - - - - - - - - - - -
	
*/	

"use strict";

//	01 - 404 Page (Animate Number)

var percent_number_step = $.animateNumber
$('#not-found-counter').animateNumber(
  {
    number: 404,
    'font-size': '230px',
    easing: 'easeOutQuad',
  },
  1200
);


//	02 - Navigation & Scroll

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});


//	03 - Supersized plugin

jQuery(function($){
  "use strict";
	$.supersized({
	slide_interval          :   2600,		// Length between transitions
	transition              :   2, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	700,		// Speed of transition
	slide_links			:	'num',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 			:  	[					// Slideshow Images
							{image : 'img/intro-bg/01.jpg'},
							{image : 'img/intro-bg/02.jpg'},
							{image : 'img/intro-bg/03.jpg'}
						]
	});
});


//	04 - Video container

var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
	height: '100%',
	width: '100%',			
	playerVars: { 'rel':0 , 'autoplay': 1, 'loop':1, 'controls':0, 'start':30, 'autohide':1,'wmode':'opaque' },
	videoId: 'NeESf9aCZHQ',
	events: {
	  'onReady': onPlayerReady,
	  'onStateChange': onPlayerStateChange}
  });
}
function onPlayerReady(event) {
event.target.setVolume(0);

// bind events
var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
  player.playVideo();
});

var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
  player.pauseVideo();
});

}
  function onPlayerStateChange(event) {        
	  if(event.data === 0) {          
		  event.target.playVideo();
	  }
  }



// Onclick js
$(document).ready(function() {
	"use strict";
	$(".play-btn").on('click', function() {
	   $(this).hide();
	   $(".pause-btn").show();
	});
	$(".pause-btn").on('click', function() {
	   $(this).hide();
	   $(".play-btn").show();
	});
});



//	05 - Map Settings

// Google Map Skin - Get more at http://snazzymaps.com/
	
// Add your company name and some text about company
var maptooltipbold = 'Green Flip';
var maptooltip = 'Some text about company';

var myLatlng = new google.maps.LatLng(41.562063, -87.6500723);

var myOptions = {
    zoom: 13,
    center: myLatlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "stylers": [
            {
                "hue": "#00aaff"
            },
            {
                "saturation": -100
            },
            {
                "gamma": 2.15
            },
            {
                "lightness": 10
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 57
            }
        ]
    }
]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);


	// Image of toogle
	var image = 'img/contacts-map-marker.png';

	// Div's of toogle
	var content = document.createElement('div');
	content.innerHTML = "<div class="+"map-tooltip"+"><h4><strong>"+maptooltipbold+"</strong></h4><hr>"+"<h5>"+maptooltip+"</h5></div>";
	
	// Initialize tooltips
	var infowindow = new google.maps.InfoWindow({
	 content: content
	});
	
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		draggable:false,
		icon: image,
	
	  });


		google.maps.event.addListener(marker, 'click', function() {
		  infowindow.open(map, marker);
		});



//	06 - Owl Sliders Plugin

//	06 - 01 - Owlslider Intro
$(document).ready(function() {
  "use strict";
	$("#owl-intro").owlCarousel({
	      navigation : true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
		  autoPlay: 5200,
	      singleItem:true
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	  });
});


//	06 - 02 - Owlslider About-us
$(document).ready(function() {
  "use strict";
	$("#owl-about-us").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: 3600,
		singleItem:true,
		transitionStyle : "backSlide"

     		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
     });
});


//	06 - 03 - Owlslider Customers-Eeviews
$(document).ready(function() {
  "use strict";
	$("#owl-customers-reviews").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: 3600,
		singleItem:true,
		

     		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
     });
});


//	06 - 04 - Owlslider Pricing-Table
$(document).ready(function() {
  "use strict";
	$("#owl-pricing-table").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: false,
		singleItem:false,
		transitionStyle : "backSlide",
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,2],
		  itemsMobile :  [620,1]

     	// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
     });
});


//	06 - 05 - Owlslider Team
$(document).ready(function() {
  "use strict";
    var owl = $("#owl-team");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 2],
				[700, 2],
				[1000, 3],
				[1200, 3],
				[1400, 3],
				[1600, 3]
				],
				navigation : true
		});
});

//	06 - 06 - Owlslider Sidebar-Widget
$(document).ready(function() {
  "use strict";
    var owl = $("#owl-sidebar-widget");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 2],
				[700, 2],
				[1000, 1],
				[1200, 1],
				[1400, 1],
				[1600, 1]
				],
				navigation : false,
				transitionStyle : "backSlide"
		});
});



//	07 - Circle Progress Bar

(function() {
		"use strict";
		$(".po-column-mobile-ani").each(function() {
			var animatedElement = $(this),
			animation = animatedElement.data('animation'),
			delay = animatedElement.data('delay');
			
			animatedElement.appear(function() {
			setTimeout(function(){ 
				animatedElement.addClass(animation);
			}, delay);
			});
		});
	})();
	


	
	(function() {
		"use strict";
		$('.dial').each(function () {
		
           var $this = $(this);
           var myVal = $(this).data("value");	
		   
		   $this.appear(function() {
           // alert(myVal);
           $this.knob({

           });
		   
           $({
               value: 0
           }).animate({

               value: myVal
           }, {
               duration: 2000,
               easing: 'swing',
               step: function () {
                   $this.val(Math.ceil(this.value)).trigger('change');

               }
           });
		    });

       });
	   
//	08 - Line Progress Bar

jQuery(document).ready(function($) {
	"use strict";
	$('.skills-wrapper').appear(function() {
	$('.skills-1').css('width', '90%');
	$('.skills-2').css('width', '72%');
	$('.skills-3').css('width', '80%');
	$('.skills-4').css('width', '62%');
	},{accX: 0, accY: -70});
});
  

//	09 - Animate Number Plugin

//	09 - 01 - Random Facts

jQuery(document).ready(function($) {
	"use strict";
	$('#random-facts ul').appear(function() {
	$('#fact-1').animateNumber({ number: 1256 }, 1500 );
	$('#fact-2').animateNumber({ number: 2468 }, 1500 );
	$('#fact-3').animateNumber({ number: 1865 }, 1500 );
	$('#fact-4').animateNumber({ number: 1203 }, 1500 );
	},{accX: 0, accY: -200});
});

//	09 - 02 - Happy Customers

jQuery(document).ready(function($) {
	"use strict";
	$('#happy-customers').appear(function() {
	$('#happy-customers-1').animateNumber({ number: 1256 }, 2600 );
	},{accX: 0, accY: -200});
});

//	09 - 03 - We work 24/7

jQuery(document).ready(function($) {
	"use strict";
	$('#video').appear(function() {
	$('#counter-1').animateNumber({ number: 24 }, 2800 );
	$('#counter-2').animateNumber({ number: 7 }, 2800 );
	},{accX: 0, accY: -200});
});


//	10 - Gallery Isotope

// Sly Scroll Slider
var $frame = $('.gallery-frame'),
	$wrap = $frame.parent();

if ($frame.length) {
	var gallery_slider = new Sly($frame, {
		horizontal: 1,
		itemNav: 'basic',
		smart: 1,
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		scrollBar: $wrap.find('.sly_scrollbar'),
		scrollBy: 1,
		speed: 300,
		elasticBounds: 1,
		easing: 'easeOutExpo',
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1
	});
}


//	11 - jQuery isotope

$('.gallery-filter  a').click();

var $gallery = $('.gallery-slider'),
	  $gallery_items = $gallery.find('.gallery-item');

$gallery.imagesLoaded(function () {
	

	var wW = $(window).width()
				
	if (wW < 800) {
		 var  rows = 1;
		$gallery_items.css('width', wW - 30 + 'px');
	}
	
	else{   var  rows = 2;   }

	
	$gallery.css('height', ((get_max($gallery_items) + 40) * rows) + 'px');

	$gallery.isotope({
		onLayout: function () {
			sticky_header();
		},
		itemSelector: $gallery_items,
		layoutMode: 'fitColumns'
	}, function () {
		gallery_slider.init();

	});
	
	
	
	
	
});



/* Isotope filtering */
$('.gallery-filter a').on('click', function () {
	$(this).closest('ul').find('.btn-primary').removeClass('btn-primary').addClass('btn-default');
	$(this).addClass('btn-primary');
	var selector = $(this).attr('data-filter');
	$gallery.isotope({
		filter: selector
	});
	return false;
});



$(window).on('smartresize', function () {
	sticky_header();
});



//  Sticky Header
// set margin top for inner pages with fixed header
function fix_content_margin() {
	var phH = $('.page-header').height();
	var mt = (phH > 100) ? phH : 100 - phH;
	$('.inner-page.sticky-header #main').css('margin-top', mt);
}
fix_content_margin();


function sticky_header() {
	// Destory All waypoints
	$.waypoints('destroy');

	// Hashchange event
	onHashChange();

	fix_content_margin();

  

	try {
		gallery_slider.reload();
	 
		

	} catch (err) {}


//  animate elements when they are in viewport

	$('.noIE .animated:not(.animation-done)').waypoint(function () {

		var animation = $(this).data('animation');

		$(this).addClass('animation-done').addClass(animation);

	}, {
		triggerOnce: true,
		offset: '85%'
	});

}


//	Hashchange & ScrollTo Plugin

function onHashChange() {
	$(window).bind('hashchange', function (e) {
		e.preventDefault();
		try {
			var target = '#' + window.location.hash.substring(1),
				$target = $(target);
		} catch (e) {
			// console.debug(e.message);
		}
		if ($target === undefined || !target || $target.length == 0) return false;

		$('body').scrollTo($target, 500, {
			easing: 'easeInQuad'
		}, function () {
			sticky_header();
		});
		return false;
	});
	$(window).trigger('hashchange');
	$('.menu li > a, .scrollto').on('click', function (e) {
		if ($(e.target) === undefined || $(e.target).length == 0) return false;
		$(window).unbind('hashchange');
		$('body').scrollTo($(this).attr('href'), 200, {
			easing: 'easeInQuad'
		});
		$(window).bind('hashchange');
	});
}

// Max-height in Gallary

function get_max($el) {
	/* Get max height */
	var max = 0;
	$el.each(function () {
		var this_h = $(this).outerHeight();
		if (this_h > max) max = this_h;
	});
	return max;
}


//	12 - Popup for images

$('.popup').magnificPopup({ 
	type: 'image',
	fixedContentPos: false,

	fixedBgPos: false,

	  removalDelay: 800,
	   mainClass: 'mfp-fade'

});

// Popup for soundcloud
$('.popup-soundcloud').magnificPopup({ 
	type: 'iframe',
	mainClass: 'soundcloud-popup'
});

// Popup for videos and google maps
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	fixedContentPos: false,
	fixedBgPos: false,
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false
});

// Popup for a normal inline element
$('.popup-inline').magnificPopup({
	type: 'inline'
});

// Popup for a project with rich content
$('.popup-project').magnificPopup({
	type: 'inline',
	alignTop: true
});

// Popup for an ajax popup without rich content
$('.popup-ajax').magnificPopup({
	type: 'ajax',
	alignTop: true
});

// no-touch animation
if($('html').hasClass('no-touch')){
	$('.gallery-item, .item-thumbnail').hover(function(){
		$(this).siblings().addClass('fade');
	}, function(){
		$(this).siblings().removeClass('fade');
	});
}

//	13 - Contact form

$(function () {
   'use strict';

	$('#contactform').submit(function () {
   'use strict';

		var action = $(this).attr('action');

		$('#message').slideUp(300,function() {
		$('#message').hide();

 		$('#submit')
			.after('<div class="loader"><i class="fa fa-cog fa-spin"></i><div>')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val(),
			verify: $('#verify').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown(300);
				$('#contactform img.loader').fadeOut(300,function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp(300);
			}
		);

		});

		return false;

	});

});


// Java Script END
})();

