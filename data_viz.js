
var vg_1 = "bar_chart.json";
var vg_2 = "choropleth_map.vg.json";
var vg_3 = "donut_chart.json";
var vg_4 = "radar_chart.json";
var vg_5 = "word_cloud.json";
var vg_6 = "box_plot.json";

// Embed the bar chart
vegaEmbed("#bar_chart", vg_1).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Bar chart loaded");
}).catch(console.error);

// Embed the choropleth map
vegaEmbed("#choropleth_map", vg_2).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Choropleth map loaded");
}).catch(console.error);

// Embed the pie chart
vegaEmbed("#donut_chart", vg_3).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Donut chart loaded");
}).catch(console.error);

// Embed the radar chart
vegaEmbed("#radar_chart", vg_4).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Radar chart loaded");
}).catch(console.error);

// Embed the word_cloud
vegaEmbed("#word_cloud", vg_5).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Word Cloud loaded");
}).catch(console.error);

// Embed the box_plot
vegaEmbed("#box_plot", vg_6).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Box Plot loaded");
}).catch(console.error);

