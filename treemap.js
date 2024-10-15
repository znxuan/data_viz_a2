// Function to load CSV data
function loadData(url) {
    return fetch(url)
      .then((response) => response.text())
      .then((text) => {
        // Parse CSV
        const rows = text.split('\n').slice(1); // Remove header row
        const data = rows.map((row) => {
          const cols = row.split(',');
          return {
            name: cols[0],   // Manufacturer name
            value: parseFloat(cols[1]) || 0,  // Revenue value
          };
        });
        return data;
      });
}

// URL for the CSV dataset
const csvUrl = 'https://raw.githubusercontent.com/znxuan/data_viz_vegalite/refs/heads/main/revenue-of-the-leading-10-beauty-manufacturers-worldwide-2023.csv';

// Load and process the data
loadData(csvUrl).then((dataSet) => {

    // Sort the data in descending order (largest values first)
    dataSet.sort((a, b) => b.value - a.value);

    // Format data into a tree map structure
    const beautyData = [
      {
        name: "Beauty Manufacturers",
        children: dataSet
      }
    ];

    // Create a tree map chart and set the data
    var chart = anychart.treeMap(beautyData, "as-tree");

    // Set the maximum depth of the levels shown
    chart.maxDepth(2);

    // Set a custom color scale with dark to light beige-pink colors
    var customColorScale = anychart.scales.linearColor();
    customColorScale.colors(['#fff0f0','#9e7e73']); // Darker beige-pink to very light beige-pink
    chart.colorScale(customColorScale);
    chart.colorRange().enabled(true);
    chart.colorRange().length('90%');

    // Format the labels to show manufacturer names instead of revenue
    chart.labels().useHtml(true);
    chart.labels().format(
      "<span style=\"font-size: 14px; color: #000000\">{%name}</span>" // Display manufacturer name
    );

    // Format the tooltips
    chart.tooltip().format(
      "Revenue: {%value} Billion USD"
    );

    // Sort in descending order to show the largest value at the top-left
    chart.sort("desc");

    // Set the container id for the chart
    chart.container("container");

    // Initiate drawing the chart
    chart.draw();
});
