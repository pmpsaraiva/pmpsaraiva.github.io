
//Set up selector to create dashboard controller
const select = d3.select("select");

//Read is json data
const samples = d3.json("data/samples.json").then(function(data) {
    //Create callable objects & arrays out of the json file
    const names = data.names;
    const meta = data.metadata;
    const samples = data.samples;

    names.forEach(name => select.append("option").text(name));
    
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


    const card = d3.select("#sample-metadata");
    console.log(meta[0]);
    Object.entries(meta[0]).forEach(([key, value]) => card.append("p").attr("class", "panel-body::after").text(`${key}: ${value}`));
    
    // Create the data array for the plot
    var data_pie = [otu_pie];
    var data_bar = [otu_bar];

    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data_bar);

    // Plot the chart to a div tag with id "bubble"
    Plotly.newPlot("bubble", data_pie);

    //Switch function for dynamic plot control
    switch(name) {
        //Let first patient be default
        default:
            otu_bar = {
                x: samples[0].sample_values.reverse(),
                y: samples[0].otu_ids.map(id => `OTU ${id}`).reverse(),
                type: "bar",
                text: samples[0].otu_labels,
                orientation: "h",
                marker: {
                    line: {
                        color: "black",
                        width: 1
                    }
                }
            };
            otu_pie = {
                x: samples[0].otu_ids,
                y: samples[0].sample_values,
                mode: "markers",
                text: samples[0].otu_labels,
                marker: {
                    size: samples[0].sample_values,
                    color: samples[0].otu_ids
                }
            };
}
});

function optionChanged(newname) {
    // Fetch new data each time a new sample is selected
    var dropdownMenu = d3.select('#selDataset');
    var selDataset = optionChanged(newname);
  }
