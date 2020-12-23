// Random background

(function($) {

    $.fn.RandBG = function(options) {
        var settings = $.extend({
            ClassPrefix: "bg",
            count: 10
        }, options);
        var index = Math.ceil(Math.random() * settings.count * settings.count) % settings.count;
        $(this).addClass(settings.ClassPrefix + index);
    };

}(jQuery));

$(".randombg").RandBG({
    ClassPrefix:"bg",
    count: 10
});


// Current date

	var date=new Date();
	var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
	var valDay=date.getDate();
	var valMonth=months[date.getMonth()];
	var valYear=date.getFullYear();
	$(document).ready(function(){
			$("#month").text(valMonth);
			$("#day").text(valDay);
			$("#year").text(valYear);
	});

 /**
   * Detect OS & browsers
   */
  /* Add class for OS */
  if(navigator.appVersion.indexOf("Win")!=-1) {
    jQuery('#os').addClass('windows-os');
  }
  if(navigator.platform.toUpperCase().indexOf('MAC')>=0) {
    jQuery('#os').addClass('mac-os');
  }
  if(navigator.appVersion.indexOf("Linux")!=-1) {
    jQuery('#os').addClass('linux-os');
  }
    if(navigator.appVersion.indexOf("Apple-iPhone")!=-1) {
    jQuery('#os').addClass('i-os');
  }
      if(navigator.appVersion.indexOf("Android")!=-1) {
    jQuery('#os').addClass('android-os');
  }
  /* Add class for all ie version */
  var trident = !!navigator.userAgent.match(/Trident\/7.0/);
  var net = !!navigator.userAgent.match(/.NET4.0E/);
  var IE11 = trident && net;
  var IEold = ( navigator.userAgent.match(/MSIE/i) ? true : false );
  if(IE11 || IEold){
    jQuery('#browser').addClass('ie');
  }
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
      jQuery('#browser').addClass('chrome');
    } else {
      jQuery('#browser').addClass('safari');
    }
  }
  var FF = !(window.mozInnerScreenX == null);
  if(FF) {
    jQuery('#browser').addClass('firefox'); 
  } else { 
    //jQuery('body').addClass('not-fire-fox');
  }
  
  // Weather
  
  $(document).ready(function() {
  // get location from user's IP address
  $.getJSON("https://ipinfo.io", function(info) {
    var locString = info.loc.split(", ");
    var latitude = parseFloat(locString[0]);
    var longitude = parseFloat(locString[0]);
    $("#location").html(
      info.city + ", " + info.country
    );
    $("#clientip").html(
      info.ip
    );

    // get weather using OpenWeatherMap API
    $.getJSON(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&units=metric&APPID=c9d1024b1304071dddfa30661e69da3d",
      function(data) {
        var windSpeedkmh = Math.round(data.wind.speed * 3.6);
        var Celsius = Math.round(data.main.temp);
        var iconId = data.weather[0].icon;
        var weatherURL = "https://openweathermap.org/img/w/" + iconId + ".png";

        var iconImg = "<img src='" + weatherURL + "'>";
        $("#sky-image").html(iconImg);
        $("#weather-id").html(data.weather[0].description);

        $("#temperature").html(Celsius);
        $("#toFahrenheit").click(function() {
          $("#temperature").html(Math.round(9 / 5 * Celsius + 32));
          $("#wind-speed").html(Math.round(windSpeedkmh * 0.621) + " mph");
        });

        $("#wind-speed").html(windSpeedkmh + " km/h");
        $("#humidity").html(data.main.humidity + " %");
      }
    );
  });
});


// Clock

jQuery( document ).ready(function() {
  currentDate = new Date();
  currentSeconds = currentDate.getSeconds();
  currentMinutes = currentSeconds + ( currentDate.getMinutes() * 60 );
  currentAnalogHours = ( currentDate.getHours() > 11 ) ? currentDate.getHours() - 12 : currentDate.getHours();
  currentHours = currentMinutes + ( currentAnalogHours * 3600 );
  currentZenitHours = currentMinutes + ( currentDate.getHours() * 3600 );
  jQuery( '.clock-second-hand' ).css( 'animation-delay', '-' + currentSeconds + 's' );
  jQuery( '.clock-minute-hand' ).css( 'animation-delay', '-' + currentMinutes + 's' );
  jQuery( '.clock-hour-hand' ).css( 'animation-delay', '-' + currentHours + 's' );
  jQuery( '.clock-zenit-hand' ).css( 'animation-delay', '-' + currentZenitHours + 's' );
});


/**
 * jquery.timer.js
 *
 * Copyright (c) 2011 Jason Chavannes <jason.chavannes@gmail.com>
 *
 * http://jchavannes.com/jquery-timer
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

;(function($) {

    $.timer = Timer;

    /**
     * First parameter can either be a function or an object of parameters.
     *
     * @param {function | {
     *   action: function,
     *   time: int=,
     *   autostart: boolean=
     * }} action
     * @param {int=} time
     * @param {boolean=} autostart
     * @returns {Timer}
     */
    function Timer(action, time, autostart) {

        if (this.constructor != Timer || this.init) {
            return new Timer(action, time, autostart);
        }

        this.set(action, time, autostart);

        return this;

    }

    /**
     * @see Timer
     *
     * @param {function | {
     *   action: function,
     *   time: int=,
     *   autostart: boolean=
     * }} action
     * @param {int=} time
     * @param {boolean=} autostart
     * @returns {Timer}
     */
    Timer.prototype.set = function(action, time, autostart) {

        this.init = true;

        if (typeof action == "object") {

            if (action.time) {
                time = action.time;
            }

            if (action.autostart) {
                autostart = action.autostart;
            }

            action = action.action;

        }

        if (typeof action == "function") {
            this.action = action;
        }

        if (!isNaN(time)) {
            this.intervalTime = time;
        }

        if (autostart && this.isReadyToStart()) {
            this.isActive = true;
            this.setTimer();
        }

        return this;

    };

    Timer.prototype.isReadyToStart = function() {

        var notActive = !this.active;
        var hasAction = typeof this.action == "function";
        var hasTime   = !isNaN(this.intervalTime);

        return notActive && hasAction && hasTime;

    };

    /**
     * @param {int=} time
     * @returns {Timer}
     */
    Timer.prototype.once = function(time) {

        var timer = this;

        if (isNaN(time)) {
            timer.action();
            return this;
        }

        setTimeout(fnTimeout, time);
        return this;

        function fnTimeout() {
            timer.action();
        }

    };

    /**
     * @param {boolean=} reset
     * @returns {Timer}
     */
    Timer.prototype.play = function(reset) {

        if (this.isReadyToStart()) {

            if (reset) {
                this.setTimer();
            }
            else {
                this.setTimer(this.remaining);
            }

            this.isActive = true;

        }

        return this;

    };

    /**
     * @returns {Timer}
     */
    Timer.prototype.pause = function() {

        if (this.isActive) {

            this.isActive   = false;
            this.remaining -= new Date() - this.last;

            this.clearTimer();

        }

        return this;

    };

    /**
     * @returns {Timer}
     */
    Timer.prototype.stop = function() {

        this.isActive  = false;
        this.remaining = this.intervalTime;

        this.clearTimer();

        return this;

    };

    /**
     * @param {boolean=} reset
     * @returns {Timer}
     */
    Timer.prototype.toggle = function(reset) {

        if (this.isActive) {
            this.pause();
        }
        else if (reset) {
            this.play(true);
        }
        else {
            this.play();
        }

        return this;

    };

    /**
     * @returns {Timer}
     */
    Timer.prototype.reset = function() {

        this.isActive = false;
        this.play(true);

        return this;

    };

    /**
     * @returns {Timer}
     */
    Timer.prototype.clearTimer = function() {
        clearTimeout(this.timeoutObject);
        return this;
    };

    /**
     * @returns {Timer}
     */
    Timer.prototype.setTimer = function(time) {

        var timer = this;

        if (isNaN(time)) {
            time = this.intervalTime;
        }

        this.remaining = time;
        this.last      = new Date();

        this.clearTimer();

        this.timeoutObject = setTimeout(fnTimeout, time);

        return this;

        function fnTimeout() {
            timer.execute();
        }

    };

    /**
     * @returns {Timer}
     */
    Timer.prototype.execute = function() {

        if (this.isActive) {

            try {
                this.action();
            }
            finally {
                this.setTimer();
            }

        }

        return this;

    };
    
})(jQuery);

/* Chronometer */

var Example1 = new (function() {
    var $stopwatch, // Stopwatch element on the page
        incrementTime = 70, // Timer speed in milliseconds
        currentTime = 0, // Current time in hundredths of a second
        updateTimer = function() {
            $stopwatch.html(formatTime(currentTime));
            currentTime += incrementTime / 10;
        },
        init = function() {
            $stopwatch = $('#stopwatch');
            Example1.Timer = $.timer(updateTimer, incrementTime, true);
        };
    this.resetStopwatch = function() {
        currentTime = 0;
        this.Timer.stop().once();
    };
    $(init);
});

/*Countdown */

var Example2 = new (function() {
    var $countdown,
        $form, // Form used to change the countdown time
        incrementTime = 70,
        currentTime = 3000,
        updateTimer = function() {
            $countdown.html(formatTime(currentTime));
            if (currentTime == 0) {
                Example2.Timer.stop();
                timerComplete();
                Example2.resetCountdown();
                return;
            }
            currentTime -= incrementTime / 10;
            if (currentTime < 0) currentTime = 0;
        },
        timerComplete = function() {
            alert('Countdown timer complete!');
        },
        init = function() {
            $countdown = $('#countdown');
            Example2.Timer = $.timer(updateTimer, incrementTime, false);
            $form = $('#example2form');
            $form.bind('submit', function() {
                Example2.resetCountdown();
                return false;
            });
        };
    this.resetCountdown = function() {
        var newTime = parseInt($form.find('input[type=text]').val()) * 100;
        if (newTime > 0) {currentTime = newTime;}
        this.Timer.stop().once();
    };
    $(init);
});

// Common functions
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60),
        hundredths = pad(time - (sec * 100) - (min * 6000), 2);
    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
}
