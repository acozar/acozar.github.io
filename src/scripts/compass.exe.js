      var byId = function (id) {
        return document.getElementById(id);
      };
      var text = function (id, value) {
        byId(id).innerHTML = value;
      };
      var transform = function (id, commands) {
        var props = ['transform', 'webkitTransform', 'mozTransform',
                     'msTransform', 'oTransform'];
        var node  = byId(id);
        for (var i = 0; i < props.length; i ++) {
          if ( typeof(node.style[props[i]]) != 'undefined' ) {
            node.style[props[i]] = commands;
            break;
          }
        }
      };
      var round = function (value) {
        return Math.round(value * 100) / 100;
      };

      Compass.noSupport(function () {
        text('text', 'no support');
      }).needGPS(function () {
        text('text', 'need GPS');
      }).needMove(function () {
        text('text', 'need move');
      }).init(function (method) {
        if ( method == 'orientationAndGPS' ) {
          text('meta', 'GPS diff: ' + round(Compass._gpsDiff));
        }
      }).watch(function (heading) {
        text('text', round(heading));
        transform('compass', 'rotate(' + (-heading) + 'deg)');
      });