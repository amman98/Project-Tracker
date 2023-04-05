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