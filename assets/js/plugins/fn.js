/* set main height
* ======================================================================== */
function contentHeight() {
  var currentHeight = $('#main').height();
  $('#main').css('min-height', currentHeight);
}

/* reload page from 'back to top' link
* ======================================================================== */
function refreshPage() {
	$('.to-the-top').click(function() {
    window.location.replace("http://www.marissarivera.com");
	});
}

/* add class to about and contact a-tags on page load
* ======================================================================== */
function aboutContactAddClass() {
	$('li.about-nav a').addClass('about-nav');
	$('li.contact-nav a').addClass('about-nav');
}

/* remove z-index from all projects page
* ======================================================================== */
function changeZindex() {
	$('#all-projects').css({'z-index': '1'});
}

/* remove z-index from all projects page
* ======================================================================== */
function activeCarousel() {
	$('.carousel-inner .item:first').addClass('active');
}

/* downward arrow
* ======================================================================== */
function movingArrow() {
var $arrow = $(".arrow img");
bounce();
function bounce() {
    $arrow.animate({
        top: "20"
    }, 500, function() {
        $arrow.animate({
            top: "-20"
        }, 500, function() {
            bounce();
        })
    });
}
}


/* add hide class to down arrow
* ======================================================================== */
function removeArrow() {
  $(window).bind('DOMMouseScroll mousewheel', function() {
      var div = $(".portfolio-sliders:first-child"),
          top = div.position().top,
          display = top < 400 ? 'none' : '';
      $('.scrl-dwn').css({ 'display': display });
  });
}


/* remove overflow from html for about and contact links
* ======================================================================== */

/*function firstScroll() {
		$('body').removeClass('overflow');
    $('a[href^=#]').bind("click", jump);


    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $('html, body').show();
    }
}*/
/*function testScroll() {
	var jump=function(e) {
	   if (e){
	       e.preventDefault();
	       var target = $(this).attr("href");
	   }else{
	       var target = location.hash;
	   }
	   $('html,body').animate({
	       scrollTop: $(target).offset().top
	   },2000,function() {
	      location.hash = target;
	   });
	}
}
*/
