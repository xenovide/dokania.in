$(document).ready(function() {
    
    $(".need-more").animate({
        bottom: 50,
        opacity:1
    });
    
    $(".eight").animate({
        bottom: 0,
        opacity:1
    });
    
    // Smooth Scroll Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top -  200
        }, 500);
    });
    
    $('.scrollTop').on('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    
    /* Give everything the before Class first */
    $('.practice a.internal').addClass('before');
    $('.first a.internal').addClass('before');
    $('.second a.internal').addClass('before');
    $('.third a.internal').addClass('before');
    
    $.fn.toggleClick = function(funcArray) {
      return this.click(function() {
        var elem = $(this);
        var index = elem.data('index') || 0;

        funcArray[index]();
        elem.data('index', (index + 1) % funcArray.length);
      });
    };

    $('.main .need-more').toggleClick([
      function() {
        $('.main .narrow p span').css({
                fontSize: '1.3rem',
                lineHeight: '2.5rem'
            });
        $( '.first .eight' ).removeClass('visible');
        $( '.first .eight' ).addClass('hidden');
        $( '.first .seven' ).removeClass('hidden');
        $( '.first .seven' ).addClass('visible');
      }, function() {
        $( '.third .eight' ).removeClass('visible');
        $( '.third .eight' ).addClass('hidden');
        $( '.third .seven' ).removeClass('hidden');
        $( '.third .seven' ).addClass('visible');
      }, function() {
        $( '.second .eight' ).removeClass('visible');
        $( '.second .eight' ).addClass('hidden');
        $( '.second .seven' ).removeClass('hidden');
        $( '.second .seven' ).addClass('visible');
      }, function() {
        $( '.first .seven' ).removeClass('visible');
        $( '.first .seven' ).addClass('hidden');
        $( '.first .six' ).removeClass('hidden');
        $( '.first .six' ).addClass('visible');
      }, function() {
        $( '.second .seven' ).removeClass('visible');
        $( '.second .seven' ).addClass('hidden');
        $( '.second .six' ).removeClass('hidden');
        $( '.second .six' ).addClass('visible');
      }, function() {
        $( '.third .seven' ).removeClass('visible');
        $( '.third .seven' ).addClass('hidden');
        $( '.third .six' ).removeClass('hidden');
        $( '.third .six' ).addClass('visible');
      }, function() {
        $( '.second .six' ).removeClass('visible');
        $( '.second .six' ).addClass('hidden');
        $( '.second .five' ).removeClass('hidden');
        $( '.second .five' ).addClass('visible');
      }, function() {
        $( '.first .six' ).removeClass('visible');
        $( '.first .six' ).addClass('hidden');
        $( '.first .five' ).removeClass('hidden');
        $( '.first .five' ).addClass('visible');
      }, function() {
        $( '.third .six' ).removeClass('visible');
        $( '.third .six' ).addClass('hidden');
        $( '.third .five' ).removeClass('hidden');
        $( '.thirds .five' ).addClass('visible');
      }, function() {
        $( '.first .five' ).removeClass('visible');
        $( '.first .five' ).addClass('hidden');
        $( '.first .four' ).removeClass('hidden');
        $( '.first .four' ).addClass('visible');
      }, function() {
        $( '.second .five' ).removeClass('visible');
        $( '.second .five' ).addClass('hidden');
        $( '.second .four' ).removeClass('hidden');
        $( '.second .four' ).addClass('visible');
      }, function() {
        $( '.third .five' ).removeClass('visible');
        $( '.third .five' ).addClass('hidden');
        $( '.third .four' ).removeClass('hidden');
        $( '.third .four' ).addClass('visible');
      }, function() {
        $( '.second .four' ).removeClass('visible');
        $( '.second .four' ).addClass('hidden');
        $( '.second .three' ).removeClass('hidden');
        $( '.second .three' ).addClass('visible');
      }, function() {
        $( '.third .four' ).removeClass('visible');
        $( '.third .four' ).addClass('hidden');
        $( '.third .three' ).removeClass('hidden');
        $( '.third .three' ).addClass('visible');
      }, function() {
        $( '.first .four' ).removeClass('visible');
        $( '.first .four' ).addClass('hidden');
        $( '.first .three' ).removeClass('hidden');
        $( '.first .three' ).addClass('visible');
      }, function() {
        $( '.first .three' ).removeClass('visible');
        $( '.first .three' ).addClass('hidden');
        $( '.first .two' ).removeClass('hidden');
        $( '.first .two' ).addClass('visible');
      }, function() {
        $( '.second .three' ).removeClass('visible');
        $( '.second .three' ).addClass('hidden');
        $( '.second .two' ).removeClass('hidden');
        $( '.second .two' ).addClass('visible');
      }, function() {
        $( '.third .three' ).removeClass('visible');
        $( '.third .three' ).addClass('hidden');
        $( '.third .two' ).removeClass('hidden');
        $( '.third .two' ).addClass('visible');
      }, function() {
        $( '.first .two' ).removeClass('visible');
        $( '.first .two' ).addClass('hidden');
        $( '.first .one' ).removeClass('hidden');
        $( '.first .one' ).addClass('visible');
      }, function() {
        $( '.second .two' ).removeClass('visible');
        $( '.second .two' ).addClass('hidden');
        $( '.second .one' ).removeClass('hidden');
        $( '.second .one' ).addClass('visible');
      }, function() {
        $( '.third .two' ).removeClass('visible');
        $( '.third .two' ).addClass('hidden');
        $( '.third .one' ).removeClass('hidden');
        $( '.third .one' ).addClass('visible');
        $('.need-more').removeClass('visible');
        $('.need-more').addClass('hidden');
        $('.more-end').removeClass('hidden');
        $('.more-end').addClass('visible');
      }
    ]);
    // Remove practice and scroll to work 
    if ($('.practice').hasClass('visible')) {
        $('.work-click').on('click', function(){
            $( '.practice ').fadeOut(500);
            $( '.main' ).fadeIn(500);
        });
    }
    
    if ($(window).width() > 900) {
    //Parallax Scroll Effect
      $(window).on("load scroll", function() {
        var parallaxElement = $(".parallax_scroll"),
          parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function() {
          for (var i = 0; i < parallaxQuantity; i++) {
            var currentElement = parallaxElement.eq(i),
              windowTop = $(window).scrollTop(),
              elementTop = currentElement.offset().top,
              elementHeight = currentElement.height(),
              viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
              scrolled = windowTop - elementTop + viewPortHeight;
            currentElement.css({
              transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
            });
          }
        });
      });
    
    $(window).on("load scroll", function() {
        var parallaxElement = $(".parallax_scroll_slow"),
          parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function() {
          for (var i = 0; i < parallaxQuantity; i++) {
            var currentElement = parallaxElement.eq(i),
              windowTop = $(window).scrollTop(),
              elementTop = currentElement.offset().top,
              elementHeight = currentElement.height(),
              viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
              scrolled = windowTop - elementTop + viewPortHeight;
            currentElement.css({
              transform: "translate3d(0," + scrolled * 0.1 + "px, 0)"
            });
          }
        });
      });
        
        $(window).on("load scroll", function() {
        var parallaxElement = $(".parallax_scroll_mid"),
          parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function() {
          for (var i = 0; i < parallaxQuantity; i++) {
            var currentElement = parallaxElement.eq(i),
              windowTop = $(window).scrollTop(),
              elementTop = currentElement.offset().top,
              elementHeight = currentElement.height(),
              viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
              scrolled = windowTop - elementTop + viewPortHeight;
            currentElement.css({
              transform: "translate3d(0," + scrolled * 0 + "px, 0)"
            });
          }
        });
      });
    }
    
    
    $(window).on('resize scroll', function() {
        
        var footerTop = $('footer').offset().top;
        var windowHeight = $(window).height();

        //white until scroll
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('html').css({
                background: '#080808'
            });
        } else {
            $('html').css({
                background: '#FAFAFA'
            });
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('p').css({
                color: '#ffffff'
            });
        } else {
            $('p').css({
                color: '#080808'
            });
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('a').css({
                color: '#ffffff'
            });
        } else {
            $('a').css({
                color: '#080808'
            });
        }
        
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('h2').css({
                color: '#ffffff'
            });
        } else {
            $('h2').css({
                color: '#080808'
            });
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('h1').css({
                color: '#ffffff'
            });
        } else {
            $('h1').css({
                color: '#080808'
            });
        }
        
         if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('.need-more').css({
                border: '3px solid rgba(255, 255, 255, 1.0)',
                color: '#ffffff'
            });
        } else {
            $('.need-more').css({
                border: '3px solid rgba(32, 32, 32, 1.0)',
                color: '#202020'
            });
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('.need-more:hover').css({
                background: '#ffffff!important',
                color: '#202020!important',
                opacity:'1.0!important'
            });
        } else {
            $('.need-more:hover').css({
                background: '#202020!important',
                color: '#ffffff!important',
                opacity:'1.0!important'
            });
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('.more-end').css({
                border: '3px solid rgba(255, 255, 255, 1.0)',
                color: '#ffffff'
            });
        } else {
            $('.more-end').css({
                border: '3px solid rgba(32, 32, 32, 1.0)',
                color: '#202020'
            });
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('.after:before').css({
                background: '#ffffff'
            });
        } else {
            $('.after:before').css({
                background: '#080808'
            });
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
        
        if ($(window).scrollTop() > (footerTop - windowHeight +100)) {
            $('.hide-on-scroll').addClass('hidden');
        } else {
            $('.hide-on-scroll').removeClass('hidden');
        }

        
        if ($(window).scrollTop() > (100)) {
            $('.home-page').addClass('scrolled-light');
        } else {
            $('.home-page').removeClass('scrolled-light');
        }
    }); 
    
    
/* End */
});