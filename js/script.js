/* Author:
Draw
*/


var stickyNav = {

	init: function () {

		var $header = $('#site-nav'),
			$body = $('body');

		if(!($body.hasClass("oldie"))){

			$header.waypoint( function(direction) {

				if(direction === "down") {
					$body.addClass("sticky-nav");
				} else {
					$body.removeClass("sticky-nav");
				}

			}, {
				offset: 0
			});

		}

	}
};

var calendar = {

    init: function () {

        var $header = $('#site-nav'),
			$body = $('body');

        if (!($body.hasClass("oldie"))) {

            $header.waypoint(function (direction) {

                if (direction === "down") {
                    $body.addClass("sticky-nav");
                } else {
                    $body.removeClass("sticky-nav");
                }

            }, {
                offset: 0
            });

        }

    }
};

// Stats Slider settings
var statsSlider = {

    init: function () {

        //add an li on every 4 items 

        var $span = $(".bxslider .stat");
        for (var i = 0; i < $span.length; i += 2) {
           
            var $div = $("<li/>", {
                class: 'slide'
            });

            $span.slice(i, i + 2).wrapAll($div);
        }

        var $bxNext = $('#slider-next'),
        $bxPrev = $('#slider-prev'),
        $bigLine = $('#big-line');

        $bxNext.flexVerticalCenter({ cssAttribute: 'top' , verticalOffset: '25px' });
        $bxPrev.flexVerticalCenter({ cssAttribute: 'top' , verticalOffset: '25px' });
        $bigLine.flexVerticalCenter({ cssAttribute: 'top' , verticalOffset: '25px' });

        $('.stats-carousel-grid .bxslider').bxSlider({
          nextSelector: $bxNext,
          prevSelector: $bxPrev,
          nextText: '>',
          prevText: '<',
          pager: false,
          slideMargin: 5,
          autoReload: true,
          breaks: [{screen:0, slides:1},{screen:460, slides:2},{screen:768, slides:2}]
        });

    }

};

var disclaimer = {

    

    getParameterByName: function (name) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(name).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")); 
    },

    getPageNameFromPath: function (path) {
        if (path[path.length - 1] == '/') path = path.slice(0, -1);
        var pieces = path.split("/");
        return pieces[pieces.length - 1];
    },

    getCookieExpiryData: function () {
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        return d.toUTCString();
    },

    init: function () {

        var returnUrl = this.getParameterByName("returnUrl");
        var cookieName = this.getPageNameFromPath(returnUrl);
        var cookieExpires = this.getCookieExpiryData();

        $(".disclaimerBody").show();
        $(".disclaimerDeclined").hide();
        $(".btnAccept").attr("href", returnUrl);

        $(".btnDecline").click(function () {
            $(".disclaimerBody").hide();
            $(".disclaimerDeclined").show();
        });

        $(".btnAccept").click(function () {
            document.cookie = "disclaimer_" + cookieName + "=1; expires = " + cookieExpires + ";path=/";
        });

    }

};

$(document).ready(function(){



	stickyNav.init();

    calendar.init();

    disclaimer.init();

	$('#site-nav').slicknav({
		prependTo:'.mobile-nav',
		label:'',
		allowParentLinks: true,
		closedSymbol: '',
		openedSymbol: ''
	});

    statsSlider.init();

    // Vertically align text on banner on annual-report
    $('.annual-report .text').flexVerticalCenter({ cssAttribute: 'top'});

    //Equalize heights on footer boxes
    $('.footer-boxes .box').matchHeight();

});

//  Update July 2019

(function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
})();

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

const links = document.links;

[...links].map(item => {
  item.addEventListener('click', function(event) {
    console.log(item.getAttribute('href'));
    if(item.getAttribute('href').includes('.html')) {
      return;
    }
    event.preventDefault();
  });
});