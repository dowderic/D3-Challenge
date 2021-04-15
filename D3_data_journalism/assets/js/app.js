// @TODO: YOUR CODE HERE!

// import data from CSV
d3.csv("../assets/data/data.csv").then(function(data) {
  console.log(data);
});


// creating dimensions for scatter plot graph

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;




// attaching on the scatter object to the main page
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");