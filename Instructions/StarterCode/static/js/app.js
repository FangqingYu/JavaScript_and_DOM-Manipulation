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
  // date input
  var inputElement1 = d3.select("#datetime");
  // city input
  var inputElement2 = d3.select("#city");

  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");

  console.log(inputValue1);
  console.log(inputValue2);
  //console.log(tableData);

  var filteredData = tableData.filter( sighting => {

    // When there is a date input and 
    if(inputValue1) {
      // when there is also a city input, return entries that satisfy both condition
      if(inputValue2) {
        return sighting.datetime === inputValue1 && sighting.city === inputValue2
      }
      // when there is no city input, return entires that satisfy first condition
      else {
        return sighting.datetime === inputValue1
      }
    }
    // When there is no date input and
    else {
      //when there is a city input, return entries that satisfy the second condition
      if(inputValue2) {
        return sighting.city === inputValue2
      }
      // When no input are received, return entire dataset
      else {
        return sighting
      }
    }
  });

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



