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
    if(navigator.platform.toUpperCase().indexOf('IPHONE')>=0) {
    jQuery('#os').addClass('i-os');
  }
      if(navigator.platform.toUpperCase().indexOf('IPAD')>=0) {
    jQuery('#os').addClass('i-os');
  }
      if(navigator.platform.toUpperCase().indexOf('IPOD')>=0) {
    jQuery('#os').addClass('i-os');
  }
  if(navigator.appVersion.indexOf("Linux")!=-1) {
    jQuery('#os').addClass('linux-os');
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


        // WORDS & CHARACTERS COUNTER

        (function($) {
        	var wordCounter = {
        		init: function() {
        			this.DOM();
        			this.events();
        		},
        		DOM: function() {
        			this.textbox = $("#work-textarea");
        			this.wordCount = $("#wordCount");
        			this.charCount = $("#charCount");
        		},
        		events: function() {
        			this.textbox.on("input", this.count.bind(this));
        		},
        		count: function() {
        			var words = this.textbox.val().split(" "),
        				chars = this.textbox.val();
        			//DELETE EMPTY STRINGS
        			for (var i = 0; i < words.length; i++) {
        				while (words[i] === "") {
        					words.splice(i, 1);
        				}
        			}
        			//COUNT WORDS
        			if (words.length === 1) {
        				this.wordCount.text(words.length + " word");
        			} else {
        				this.wordCount.text(words.length + " words");
        			}
        			//COUNT CHARACTERS
        			if (chars.length < 0) {
        				words = [];
        			} else if (chars.length === 1) {
        				this.charCount.text(chars.length + " character");
        			} else {
        				this.charCount.text(chars.length + " characters");
        			}
        		}
        	}
        	wordCounter.init();
        }(jQuery));
        
        // SAVING FILES
        
        $('#btnSave').click(function() {
          if ('Blob' in window) {
            var fileName = prompt('Please enter file name to save', 'Untitled.txt');
            if (fileName) {
              var textToWrite = $('#work-textarea').val().replace(/n/g, 'rn');
              var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        
              if ('msSaveOrOpenBlob' in navigator) {
                navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
              } else {
                var downloadLink = document.createElement('a');
                downloadLink.download = fileName;
                downloadLink.innerHTML = 'Download File';
        		
                if ('webkitURL' in window) {
                  // Chrome allows the link to be clicked without actually adding it to the DOM.
                  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
                } else {
                  // Firefox requires the link to be added to the DOM before it can be clicked.
                  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                  downloadLink.click(function(){
                  	document.body.removeChild(event.target);
                  }); 
        		  
                  downloadLink.style.display = 'none';
                  document.body.appendChild(downloadLink);
                }
                downloadLink.click();
              }
            }
          } else {
            alert('Your browser does not support the HTML5 Blob.');
          }
        });

        // OPEN FILES
        
        $('#btnOpen').click(function() {
          if ('FileReader' in window) {
            	$('#exampleInputFile').click();
          } else {
            alert('Your browser does not support the HTML5 FileReader.');
          }
        });
        
        $('#exampleInputFile').change(function(event) {
          var fileToLoad = event.target.files[0];
        
          if (fileToLoad) {
            var reader = new FileReader();
            reader.onload = function(fileLoadedEvent) {
              var textFromFileLoaded = fileLoadedEvent.target.result;
        	  console.log("loaded " + textFromFileLoaded);
              $('#work-textarea').val(textFromFileLoaded);
            };
            reader.readAsText(fileToLoad, 'UTF-8');
        }
        });
        
        // INCREASE & DECREASE FONT SIZE
        
        (function ($) {
        
            function FontSize(dom, options) {
                var defaultSettings = {
                    step: 2,
                    increaseTimes: 2, // 放大次数
                    reduceTimes: 2, // 缩小次数
                    increaseBtn: '.zoomin',
                    reduceBtn: '.zoomout'
                };
                this.settings = $.extend({}, defaultSettings, options);
                this.container = dom;
                // 
                this.noFontTags = ['svg', 'IMG', 'use', 'BR', 'VIDEO', 'AUDIO', 'STYLE', 'SCRIPT'];
                this._init();
                this.$increaseBtn = $(this.settings.increaseBtn);
                this.$reduceBtn = $(this.settings.reduceBtn);
                var that = this;
                this.$increaseBtn.on('click', function () {
                    if (that.fontIncrease() === false) {
                        that.$increaseBtn.addClass('disable');
                    }
                    that.$reduceBtn.removeClass('disable');
                });
                this.$reduceBtn.on('click', function () {
                    if (that.fontReduce() === false) {
                        that.$reduceBtn.addClass('disable');
                    }
                    that.$increaseBtn.removeClass('disable');
                });
            }
            // 
            FontSize.prototype._init = function () {
                this._loopNode(this.container, function () {
                    $(this).css('font-size', $(this).css('font-size'));
                });
                this.zoom = 0;
                this.maxZoom = this.settings.step * this.settings.increaseTimes;
                this.minZoom = -this.settings.step * this.settings.reduceTimes;
            };
            // 
            FontSize.prototype._loopNode = function (node, fn) {
                var type = node.nodeType,
                    childNodes,
                    noFontTags = this.noFontTags;
                // 
                if (type === 1) {
                    childNodes = node.childNodes;
                    if (noFontTags.indexOf(node.nodeName) === -1) {
                        fn && fn.call(node);
                    }
                    for (var i = 0, l = childNodes.length; i < l; i++) {
                        this._loopNode(childNodes[i], fn);
                    }
                }
            };
            // 
            FontSize.prototype.fontIncrease = function (step) {
                step = step ? step : this.settings.step;
                if (this.zoom >= this.maxZoom) {
                    return false;
                }
                if (this.zoom + step > this.maxZoom) {
                    step = this.maxZoom - this.zoom;
                }
                this._loopNode(this.container, function () {
                    $(this).css('font-size', $(this).css('font-size').slice(0, -2) - 0 + step + 'px');
                });
                this.zoom += step;
            };
            // 
            FontSize.prototype.fontReduce = function (step) {
                step = step ? step : this.settings.step;
                if (this.zoom <= this.minZoom) {
                    return false;
                }
                if (this.zoom - step < this.minZoom) {
                    step = Math.abs(this.zoom - this.minZoom);
                }
                this._loopNode(this.container, function () {
                    $(this).css('font-size', $(this).css('font-size').slice(0, -2) - 0 - step + 'px');
                });
                this.zoom -= step;
            };
            // 
            FontSize.prototype.clearZoom = function () {
                var zoom = this.zoom;
                console.log(this.zoom);
                this._loopNode(this.container, function () {
                    $(this).css('font-size', $(this).css('font-size').slice(0, -2) - 0 - zoom + 'px');
                });
                this.zoom = 0;
            };
            $.fn.FontSize = function (options, param) {
                if (typeof options == 'string') {
                    var method = $.fn.FontSize.methods[options];
                    if (method) {
                        return method(this, param);
                    }
                }
                return this.each(function () {
                    if (!$.data(this, 'FontSize')) {
                        $.data(this, 'FontSize', new FontSize(this, options));
                    }
                });
            };
            $.fn.FontSize.methods = {
                fontIncrease: function (jq, step) {
                    return jq.each(function () {
                        $.data(this, 'FontSize').fontIncrease(step);
                    });
                },
                fontReduce: function (jq, step) {
                    return jq.each(function () {
                        $.data(this, 'FontSize').fontReduce(step);
                    });
                },
                clearZoom: function (jq) {
                    return jq.each(function () {
                        $.data(this, 'FontSize').clearZoom();
                    });
                }
            };
        })(jQuery);
        $('#work-textarea').FontSize({
          increaseTimes: 5,
          reduceTimes: 5
        });

        // PREVENT LOSE CHANGES
        	$(window).bind('beforeunload', function(){
                if($("#work-textarea").val().trim().length > 1)
                {
                    return 'All changes will be lost';
                }
        	});


        // RSS Feeds
        
(function(d){var e=function(a,b,c,f){this.target=a;this.url=b;this.html=[];this.effectQueue=[];this.options=d.extend({ssl:!1,host:"www.feedrapp.info",limit:null,key:null,layoutTemplate:"<ul>{entries}</ul>",entryTemplate:'<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>',tokens:{},outputMode:"json",dateFormat:"dddd MMM Do",effect:"show",offsetStart:!1,offsetEnd:!1,error:function(){console.log("jQuery RSS: url doesn't link to RSS-Feed")},onData:function(){},success:function(){}},
c||{});this.options.ssl&&"www.feedrapp.info"===this.options.host&&(this.options.host="feedrapp.herokuapp.com");this.callback=f||this.options.success};e.htmlTags="doctype,html,head,title,base,link,meta,style,script,noscript,body,article,nav,aside,section,header,footer,h1-h6,hgroup,address,p,hr,pre,blockquote,ol,ul,li,dl,dt,dd,figure,figcaption,div,table,caption,thead,tbody,tfoot,tr,th,td,col,colgroup,form,fieldset,legend,label,input,button,select,datalist,optgroup,option,textarea,keygen,output,progress,meter,details,summary,command,menu,del,ins,img,iframe,embed,object,param,video,audio,source,canvas,track,map,area,a,em,strong,i,b,u,s,small,abbr,q,cite,dfn,sub,sup,time,code,kbd,samp,var,mark,bdi,bdo,ruby,rt,rp,span,br,wbr".split(",");
e.prototype.load=function(a){var b="https"+(this.options.ssl?"s":"")+"://"+this.options.host+"?callback=?&q="+encodeURIComponent(this.url);this.options.offsetStart&&this.options.offsetEnd&&(this.options.limit=this.options.offsetEnd);null!==this.options.limit&&(b+="&num="+this.options.limit);null!==this.options.key&&(b+="&key="+this.options.key);d.getJSON(b,a)};e.prototype.render=function(){var a=this;this.load(function(b){try{a.feed=b.responseData.feed,a.entries=b.responseData.feed.entries}catch(c){return a.entries=
[],a.feed=null,a.options.error.call(a)}b=a.generateHTMLForEntries();a.target.append(b.layout);0!==b.entries.length&&(d.isFunction(a.options.onData)&&a.options.onData.call(a),a.appendEntriesAndApplyEffects(d("entries",b.layout),b.entries));0<a.effectQueue.length?a.executeEffectQueue(a.callback):d.isFunction(a.callback)&&a.callback.call(a)})};e.prototype.appendEntriesAndApplyEffects=function(a,b){var c=this;d.each(b,function(b,e){var d=c.wrapContent(e);"show"===c.options.effect?a.before(d):(d.css({display:"none"}),
a.before(d),c.applyEffect(d,c.options.effect))});a.remove()};e.prototype.generateHTMLForEntries=function(){var a=this,b={entries:[],layout:null};d(this.entries).each(function(){var c=a.options.offsetStart,f=a.options.offsetEnd;c&&f?index>=c&&index<=f&&a.isRelevant(this,b.entries)&&(c=a.evaluateStringForEntry(a.options.entryTemplate,this),b.entries.push(c)):a.isRelevant(this,b.entries)&&(c=a.evaluateStringForEntry(a.options.entryTemplate,this),b.entries.push(c))});b.layout=this.options.entryTemplate?
this.wrapContent(this.options.layoutTemplate.replace("{entries}","<entries></entries>")):this.wrapContent("<div><entries></entries></div>");return b};e.prototype.wrapContent=function(a){return 0!==d.trim(a).indexOf("<")?d("<div>"+a+"</div>"):d(a)};e.prototype.applyEffect=function(a,b,c){switch(b){case "slide":a.slideDown("slow",c);break;case "slideFast":a.slideDown(c);break;case "slideSynced":this.effectQueue.push({element:a,effect:"slide"});break;case "slideFastSynced":this.effectQueue.push({element:a,
effect:"slideFast"})}};e.prototype.executeEffectQueue=function(a){var b=this;this.effectQueue.reverse();var c=function(){var f=b.effectQueue.pop();f?b.applyEffect(f.element,f.effect,c):a&&a()};c()};e.prototype.evaluateStringForEntry=function(a,b){var c=a,f=this;d(a.match(/(\{.*?\})/g)).each(function(){var a=this.toString();c=c.replace(a,f.getValueForToken(a,b))});return c};e.prototype.isRelevant=function(a,b){var c=this.getTokenMap(a);return this.options.filter?this.options.filterLimit&&this.options.filterLimit===
b.length?!1:this.options.filter(a,c):!0};e.prototype.getTokenMap=function(a){if(!this.feedTokens){var b=JSON.parse(JSON.stringify(this.feed));delete b.entries;this.feedTokens=b}this.formattedDate="undefined"!==typeof moment?moment(new Date(a.publishedDate)).format(this.options.dateFormat):this.options.dateFormatFunction?this.options.dateFormatFunction(a.publishedDate):a.publishedDate;return d.extend({feed:this.feedTokens,url:a.link,author:a.author,date:this.formattedDate,title:a.title,body:a.content,
shortBody:a.contentSnippet,bodyPlain:function(a){for(var a=a.content.replace(/<script[\\r\\\s\S]*<\/script>/mgi,"").replace(/<\/?[^>]+>/gi,""),b=0;b<e.htmlTags.length;b++)a=a.replace(RegExp("<"+e.htmlTags[b],"gi"),"");return a}(a),shortBodyPlain:a.contentSnippet.replace(/<\/?[^>]+>/gi,""),index:d.inArray(a,this.entries),totalEntries:this.entries.length,teaserImage:function(a){try{return a.content.match(/(<img.*?>)/gi)[0]}catch(b){return""}}(a),teaserImageUrl:function(a){try{return a.content.match(/(<img.*?>)/gi)[0].match(/src="(.*?)"/)[1]}catch(b){return""}}(a)},
this.options.tokens)};e.prototype.getValueForToken=function(a,b){var c=this.getTokenMap(b),d=a.replace(/[\{\}]/g,""),d=c[d];if("undefined"!==typeof d)return"function"===typeof d?d(b,c):d;throw Error("Unknown token: "+a+", url:"+this.url);};d.fn.rss=function(a,b,c){(new e(this,a,b,c)).render();return this}})(jQuery);

jQuery(function($) {
    $("#rss-wired").rss("https://www.wired.com/feed/rss",
    {
        limit: 5,
        dateFormat: 'D [de] MMMM',
        entryTemplate:'<ul><li><a href="{url}" title="Open in new window" target="blank">{title}</a></li></ul>'
    })
})


// TO-DO

$(document).ready(function () {
	$('#list-items').html(localStorage.getItem('listItems'));
	$('.add-items').submit(function(event) 
	{
		event.preventDefault();
		var item = $('#todo-list-item').val();
		if(item) 
		{
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
			localStorage.setItem('listItems', $('#list-items').html());
			$('#todo-list-item').val("");
		}
	});
	$(document).on('change', '.checkbox', function() 
	{
		if($(this).attr('checked')) 
		{
			$(this).removeAttr('checked');
		} 
		else 
		{
			$(this).attr('checked', 'checked');
		}
		$(this).parent().toggleClass('completed');
		localStorage.setItem('listItems', $('#list-items').html());
	});
	$(document).on('click', '.remove', function() 
	{
		$(this).parent().remove();
		localStorage.setItem('listItems', $('#list-items').html());
	});
});

    // End