function buildMetadata(data) {

//Read is json data
d3.json("data/samples.json").then(function(data) {
  
      // Use d3 to select the panel with id of `#sample-metadata`
      var sample_metadata = d3.select("#sample-metadata");
  
      const card = d3.select("#sample-metadata");
      console.log(meta[0]);
      Object.entries(meta[0]).forEach(([key, value]) => card.append("p").attr("class", "panel-body::after").text(`${key}: ${value}`));
      });
  
  function buildCharts(data) {
  

//FIRST CHART - PIE CHART
    
    var otu_bar = {
        x: data.samples[0].sample_values.slice(0,10).sort((a,b)=>a-b),
        y: data.samples[0].otu_ids.slice(0,10).map(id => `OTU_${id}`).reverse(),
        type: "bar",
        text: data.samples[0].otu_labels,
        orientation: "h",
        marker: {
            line: {
                color: "green",
                width: 1
            }
        }
    };

var data = [otu_bar];
// Plot the chart to a div tag with id "plot"
Plotly.newPlot("bar", data);
   

  //SECOND CHART - PIE CHART
  var otu_pie = {
      x: data.samples[0].otu_ids,
      y: data.samples[0].sample_values,
      mode: "markers",
      text: data.samples[0].otu_labels,
          marker: {
              size: samples[0].sample_values,
              color: samples[0].otu_ids,
              line: {
                  color: "green",
                  width: 1
              }
          }  
          
      };
var data = [otu_pie];
// Plot the chart to a div tag with id "bubble"
Plotly.plot('bubble', otu_pie);

/* function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  
  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((data) => {
      selector
        .append("option")
        .text(data)
        .property("value", data);
    });
  
    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}
  
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

init(); */

    }