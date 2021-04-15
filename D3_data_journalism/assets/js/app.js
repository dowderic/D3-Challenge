// @TODO: YOUR CODE HERE!



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

// import data from CSV
d3.csv("../assets/data/data.csv").then(function(data) {
  console.log(data);
});


    // Adding X axis with Poverty Data
  var x = d3.scaleLinear()
    .domain([0, 30])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Adding Y axis with Lacks Healthcare %
  var y = d3.scaleLinear()
    .domain([0, 30])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(data.poverty); } )
      .attr("cy", function (d) { return y(data.healthcareLow); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")