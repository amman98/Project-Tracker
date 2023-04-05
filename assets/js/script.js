// Attempt at storing items into local storage
    // localStorage.setItem()
    // localStorage.getItem()

var projectFormEl = $('#project-form');
var submitBtn = $('#submit-btn');

var projects = [];


function storeData() {


    var projectx = $("/////").text();
    projects.push(projectx);
    localStorage.setItem("projectsArray", JSON.stringify(projects));
}

function retrieveData() {

    var parsedArray = JSON.parse(localStorage.getItem("projectsArray"));

    if (parsedArray !== null) {
        projects = parsedArray;
    }
}

// Create past, present, future comparison tags

var projectx = {
    name: $('name'),
    type: $('type'),
    due: $('date'),
}

function submit(event) {
    projects.push(projectx);
}

function render() {

}
var timeEl = $('#current-date-and-time');

// calculates current time and updates every second
var timeInterval = setInterval(function() {
    var currentTime = dayjs().format("MMM DD YYYY" + " at " + "hh:mm:ss a");
    timeEl.text(currentTime); // displays time in header
}, 1000);

submitBtn.on('submit', submit);