// from data.js
var tableData = data;

// Default display: entire dataset
var tbody = d3.select("tbody");

  tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 

// YOUR CODE HERE!
//console.log(tableData);
//var table = d3.select("table");
// Change table style
//table.attr("class", "table table-striped");


// Select the "filter table" button
var submit = d3.select("#filter-btn");
submit.on("click", function() {

  //Empty results from previous search on click;
  var tbody = d3.select("tbody");
  tbody.html(' ');

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Define search types
  keys = ["datetime", "country", "state", "city", "shape"]
  // Manipulate string element add #
  input_ids = keys.map( key => "#".concat(key))
  // Create d3 objects for ids and save input values
  inputs = input_ids.map(id => d3.select(id).property("value"))
 
  // Initiate filteredData to the entire dataset
  var filteredData = tableData
  for(var i=0; i < inputs.length; i++){
    // loop through inputs and filteredData
    if(inputs[i]){
      filteredData = filteredData.filter(x => x[keys[i]] === inputs[i] )
    }
  }

  console.log(filteredData);
 
  // Display filtered data
  // redefine tbody, overwrite default display with filtered data
  var tbody = d3.select("tbody");

  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 

});


