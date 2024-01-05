# belly-button-challenge
--------------------------
GITHUB DIRECT CODE LINK (app.js): https://github.com/meera-patel01/belly-button-challenge/blob/main/static/js/app.js

## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
Complete the following steps:
  1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
  2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
      - Use sample_values as the values for the bar chart.
      - Use otu_ids as the labels for the bar chart.
      - Use otu_labels as the hovertext for the chart.
    
![image](https://github.com/meera-patel01/belly-button-challenge/assets/80857225/9fc84849-c75a-49cc-baa3-4f31bd2dad46)
  3. Create a bubble chart that displays each sample.
      - Use otu_ids for the x values.
      - Use sample_values for the y values.
      - Use sample_values for the marker size.
      - Use otu_ids for the marker colors.
      - Use otu_labels for the text values.
        
![image](https://github.com/meera-patel01/belly-button-challenge/assets/80857225/12e18305-d90d-4252-96d4-1d851a5ab0ca)
  4. Display the sample metadata, i.e., an individual's demographic information.
  5. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://github.com/meera-patel01/belly-button-challenge/assets/80857225/9f9685b1-50b8-4d16-abd9-b09cc0d1751d)

  6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:
![image](https://github.com/meera-patel01/belly-button-challenge/assets/80857225/198b5300-c3db-4e33-8bb5-d5dce1738250)
  7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a   thorough README.md file


