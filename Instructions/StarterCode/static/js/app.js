// from data.js
var tableData = data;

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

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter( sighting => sighting.datetime === inputValue);

  console.log(filteredData);
  
  // Display filtered data
  
  
  var tbody = d3.select("tbody");

  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 


});

/* function buildTable(Data) {
 tbody.html("");
  var tbody = d3.select("tbody");

  Data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);v
};

buildTable(filteredDatav); */

