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
    		return 'All changes will be lost';
    	});

        