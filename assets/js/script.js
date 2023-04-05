var timeEl = $('#timer');

// calculates current time and updates every second
var timeInterval = setInterval(function() {
    var currentTime = dayjs().format("MMM DD YYYY" + " at " + "hh:mm:ss a");
    timeEl.text(currentTime); // displays time in header
}, 1000);