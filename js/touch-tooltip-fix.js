Highcharts.Chart.prototype.callbacks.push(function(chart) {
  var hasTouch = hasTouch = document.documentElement.ontouchstart !== undefined,
      mouseTracker = chart.tracker,
      container = chart.container,
      mouseMove;

  mouseMove = function (e) {
    // let the system handle multitouch operations like two finger scroll
    // and pinching
    if (e && e.touches && e.touches.length > 1) {
      return;
    }

    // normalize
    //e = mouseTracker.normalizeMouseEvent(e);
    if (!hasTouch) { // not for touch devices
        e.returnValue = false;
        return;
    } 
    if (e.chartY > (upperChartHeight + lowerChartHeight)) {
        return false;
    }
  }
  
  touchStart = function (e) {

  };
  touchEnd = function (e) {

  };
  container.ontouchmove = mouseMove;
  container.ontouchstart = touchStart;
  container.ontouchend = touchEnd;

});