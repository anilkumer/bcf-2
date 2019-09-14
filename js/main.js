$(document).ready(function(){
	$('#home-slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		
		nav:true,
		navText:['<i class="fa fa-angle-left homeSlider_left" aria-hidden="true"></i>','<i class="fa fa-angle-right homeSlider_right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

   
    $('#latest-news').owlCarousel({
		loop:true,
		autoplay:true,
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left news_left" aria-hidden="true"></i>','<i class="fa fa-angle-right news_right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});


  $('#upcoming_events').owlCarousel({
		loop:true,
		autoplay: true,
        autoplayTimeout: 6000,  
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left event_left" aria-hidden="true"></i>','<i class="fa fa-angle-right event_right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	 $('#video_slider').owlCarousel({
		loop:true,
		autoplay: true,
        autoplayTimeout: 6000,  
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left event_left" aria-hidden="true"></i>','<i class="fa fa-angle-right event_right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});



	$('#team_slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:true,
		navText:['<i class="fa fa-chevron-left teamSlider_left" aria-hidden="true"></i>','<i class="fa fa-chevron-right teamSlider_right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	$('#partner_slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:false,
		navText:['<i class="fa fa-chevron-left homeSlider_left" aria-hidden="true"></i>','<i class="fa fa-chevron-right homeSlider_right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
})

/*	gallery */
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
   
  


