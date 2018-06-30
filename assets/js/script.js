
/* CSS Browser */

function css_browser_selector(u) {
    var ua = u.toLowerCase(), is = function (t) {
            return ua.indexOf(t) > -1
        }, g = 'gecko', w = 'webkit', s = 'safari', o = 'opera', m = 'mobile', h = document.documentElement,
        b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
    c = b.join(' ');
    h.className += ' ' + c;
    return c;
};css_browser_selector(navigator.userAgent);

/* CSS Browser */

$(function () {
    $.scrollify({
        section: "section",
        sectionName: "",
        scrollbars: true,
        scrollSpeed: 1000,

        before: function (index) {

            items = $('section');
            item = $($('section').get(index));
            //console.log(item);
            items.removeClass('selected');
            item.addClass('selected');

            if (item.attr('class') == 'project-nwpharma selected') {
                //console.log('true');
                $('.completed-projects').addClass('black-overlay3');
            }
            else {
                $('.completed-projects').removeClass('black-overlay3');
            }
						
						if (item.attr('class') == 'home-intro-main selected') {
                //console.log('true');
                $("#awwwards").addClass('show');
            }
            else {
                $("#awwwards").removeClass('show');
            }

            if (item.attr('class') == 'completed-projects selected') {
                $('body').addClass('dark');
            }
            else {
                $('body').removeClass('dark');
            }

            // if (item.attr('class') == 'completed-projects selected') {
            //     console.log('true');
            //     $('body').addClass('dark');
            //     setTimeout(function () {
            //         item.removeClass('selected');
            //         item.next().addClass('selected');
            //         $('body').removeClass('dark');
            //     },4000);
            // }
            //
            // else {
            //     $('body').removeClass('dark');
            // }

        },

    });
});

// DISABLE-SCROLIFY-MOBILE

if (screen && screen.width < 1023) {
    $.scrollify.disable()
}

// FOR-NAVIGATION

document.addEventListener("DOMContentLoaded", function () {
    Typed.new(".typed-txt", {
        strings: ["design.", "dream big.", "visualize.", "beautify."],
        typeSpeed: 90,
        backSpeed: 50,
        startDelay: 2000,
        backDelay: 2000,
        loop: true,
    });
});


//MOUSE-ANIMATION
$('.movement').parallax();


//PRELOADER
$(window).on('load', function () {
    $('#preloader').delay(350);
    $('body').delay(350).css({'overflow': 'visible'});
    $('body').addClass('loaded');
})


$(document).ready(function () {
    $(".msg-btn, .sayhello").click(function () {
				if($(".completed-projects").hasClass("selected")) {
					$(".completed-projects").addClass("fadeOutSection");
					setTimeout(function(){
						$(".contact").addClass("open");
					}, 1000);
				}
				else {				
	        $(".contact").addClass("open");
				}
    });
		
		$(".close-contact").click(function () {				
				if($(".completed-projects").hasClass("selected")) {
					$(".contact, .about-me").removeClass("open");					
					setTimeout(function(){
						$(".completed-projects").removeClass("fadeOutSection");
					}, 600);
				}
				else {			
	        $(".contact, .about-me").removeClass("open");
				}
    });
		
		$(".about-popup").click(function () {
				if($(".completed-projects").hasClass("selected")) {
					$(".completed-projects").addClass("fadeOutSection");
					setTimeout(function(){
						$(".about-me").addClass("open");
					}, 1000);
				}
				else {
	        $(".about-me").addClass("open");
				}
    });
		
		$(".btn-intro").click(function () {
        $(".home-intro-main").removeClass("selected");
        $(".project-irequest").addClass("selected");
    });
});


// Wow-Animation
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();


$(window).on("scroll touchmove",function() {
    if($(window).scrollTop() + $(window).height() == $(document).height() ) {
        $('.next-project').addClass('show-project-div');
    } else {
        $('.next-project').removeClass('show-project-div');
    }
});


if (screen && screen.width < 1024) {

    var $animation_elements = $('section');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('faded');
            }
            // else {
            //     $element.removeClass('faded');
            // }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');



    $(".btn-intro").click(function() {
        $('html, body').animate({
            scrollTop: $(".project-irequest").offset().top
        }, 2000);
    });


    $(function () {
        $('.auto-height').css({'height': (($(window).height())) + 'px'});
        $(window).resize(function () {
            $('.auto-height').css({'height': (($(window).height())) + 'px'});
        });
    });

    $(function () {
        $('.next-project').css({'height': (($(window).height())) + 'px'});
        $(window).resize(function () {
            $('.next-project').css({'height': (($(window).height())) + 'px'});
        });
    });

    $(function () {
        $('.content-btm-full').css({'height': (($(window).height())) + 'px'});
        $(window).resize(function () {
            $('.content-btm-full').css({'height': (($(window).height())) + 'px'});
        });
    });
		
		$(function () {
        setInterval(function(){
					$('.contact-section, .contact-section .slide-content').css({'height': (($(window).height() + 45)) + 'px'});
					$('.next-project').css({'height': (($(window).height() + 60)) + 'px'});

					//console.log("yess");
				},50);
    });

}


