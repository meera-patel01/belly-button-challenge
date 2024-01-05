function getPlots(id) {
    d3.json("samples.json").then (sampledata =>{
        let ids = sampledata.samples[0].otu_ids;
        let sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
        var labels =  sampledata.samples[0].otu_labels.slice(0,10);
        let OTU_top = ( sampledata.samples[0].otu_ids.slice(0, 10)).reverse();
        let OTU_id = OTU_top.map(d => "OTU " + d);
        var labels =  sampledata.samples[0].otu_labels.slice(0,10);
        let trace = {
            x: sampleValues,
            y: OTU_id,
            text: labels,
            type:"bar",
            orientation: "h",
        };
        let data = [trace];
    
        let layout = {
            margin: {
                l: 150,
                r: 100,
                t: 100,
                b: 30
            }
        };
    
        Plotly.newPlot("bar", data, layout);

        let trace1 = {
            x: sampledata.samples[0].otu_ids,
            y: sampledata.samples[0].sample_values,
            mode: "markers",
            marker: {
                size: sampledata.samples[0].sample_values,
                color: sampledata.samples[0].otu_ids
            },
            text:  sampledata.samples[0].otu_labels
    
        };

        let layout_2 = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1000
        };

        let data1 = [trace1];

        Plotly.newPlot("bubble", data1, layout_2); 
        
    });
}  

function getDemoInfo(id) {
    d3.json("samples.json").then((data)=> {
        let metadata = data.metadata;
        let result = metadata.filter(meta => meta.id.toString() === id)[0];
        let demographicInfo = d3.select("#sample-metadata");
        
        demographicInfo.html("");

        Object.entries(result).forEach((key) => {   
            demographicInfo.append("h5").text(key[0] + ": " + key[1] + "\n");    
        });
    });
}

function optionChanged(id) {
    getPlots(id);
    getDemoInfo(id);
}
    
let dropdown = d3.select("#selDataset");
d3.json("samples.json").then((data)=> {
    data.names.forEach(function(name) {
        dropdown.append("option").text(name).property("value");
    });
    getPlots(data.names[0]);
    getDemoInfo(data.names[0]);
});
