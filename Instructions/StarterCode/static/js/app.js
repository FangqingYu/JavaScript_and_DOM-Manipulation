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
  var keys = ['datetime', 'country', 'city', 'shape']
  var dom_keys = keys.map(x => "#".concat(x))
  //var dom_keys = ['#datetime', '#country', '#city', '#shape']
  var elements = dom_keys.map(x => d3.select(x))
  var inputs = elements.map(x => x.property("value"))
  // var inputElement1 = d3.select("#datetime");
  // // country input
  // var inputElement2 = d3.select("#country");
  // // city input
  // var inputElement3 = d3.select("#city");
  // // shape input
  // var inputElement4 = d3.select("#shape");

  // // Get the value property of the input element
  // var inputValue1 = inputElement1.property("value");
  // var inputValue2 = inputElement2.property("value");
  // var inputValue3 = inputElement3.property("value");
  // var inputValue4 = inputElement4.property("value");

  // console.log(inputValue1);
  // console.log(inputValue2);
  // console.log(inputValue3);
  // console.log(inputValue4);
  // //console.log(tableData);

  // var inputs = [inputValue1, inputValue2, inputValue3, inputValue4]
  var filteredData = tableData
  for(var i=0; i < inputs.length; i++){
    if(inputs[i]){
      filteredData = filteredData.filter(x => inputs[i] === x[keys[i]])
    }
  }
  
  // if(inputValue1){
  //   filteredData = tableData.filter(x => inputValue1 == x.datetime)
  // }
  // if(inputValue2){
  //   filteredData = filteredData.filter(x => inputValue2 == x.country)
  // }
  // var filteredData = tableData.filter(x => inputValue1 == x.datetime)
  // filteredData = filteredData.filter(x => inputValue2 == x.country)
  // var filteredData = tableData.filter( sighting => {
  //   if(inputValue1){
  //     if(inputValue2){
  //         if(inputValue3){
  //             if(inputValue4){
  //                 return sighting.datetime === inputValue1 && sighting.country === inputValue2 && sighting.city === inputValue3 && sighting.shape === inputValue4;
  //             }
  //             else{ 
  //                 return sighting.datetime === inputValue1 && sighting.country === inputValue2 && sighting.city === inputValue3;
  //             }
  
  //         }
  //         else {
  //             return sighting.datetime === inputValue1 && sighting.country === inputValue2;
  //         }
  
  //     }
  //     else {
  //         return sighting.datetime === inputValue1;
  //     }
  //   }
  //   else {
  //     return sighting;
  //   }

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



