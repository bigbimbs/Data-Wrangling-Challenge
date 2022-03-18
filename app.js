const chartData = "http://localhost/dataset.csv";

async function moses() {
  await d3.csv(chartData, {
  mode: 'cors',
  credentials: 'include'
}).then((datapoints) => {
    console.log(datapoints);
    const area = [];
    const year = [];
    const country = [];
    const gdp = [];
    const population = [];
    const populationDensity = [];
    const roadsPerMillion = [];
    const totalRoads = [];
    const vehicleOwnership = [];
    for (i = 0; i < datapoints.length; i++) {
      area.push(datapoints[i].Area);
      country.push(datapoints[i].Country);
      gdp.push(datapoints[i].GDPperCapital);
      population.push(datapoints[i].Population);
      populationDensity.push(datapoints[i].PopulationDensity);
      roadsPerMillion.push(datapoints[i].RoaddeathsperMillionInhabitants);
      totalRoads.push(datapoints[i].Totalroaddeaths);
      vehicleOwnership.push(datapoints[i].VehicleOwnership);
      year.push(datapoints[i].Year);
    }
    const labels = country;
    console.log(area);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Road deaths per Million Inhabitants",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: roadsPerMillion,
        },
        {
          label: "Total road deaths",
          backgroundColor: "red",
          borderColor: "red",
          data: totalRoads,
        },
        {
          label: "Vehicle Ownership",
          backgroundColor: "grey",
          borderColor: "grey",
          data: vehicleOwnership,
        },
        {
          label: "Population Density",
          backgroundColor: "lightblue",
          borderColor: "lightblue",
          data: populationDensity,
        },
        {
          label: "GDP per Capital (0)",
          backgroundColor: "green",
          borderColor: "green",
          data: gdp,
        },
        {
          label: "Population (0,000)",
          backgroundColor: "darkblue",
          borderColor: "darkblue",
          data: population,
        },
        {
          label: "Area",
          backgroundColor: "yellow",
          borderColor: "yellow",
          data: area,
        },
        {
          label: "Year",
          backgroundColor: "lightgray",
          borderColor: "lightgray",
          data: year,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
    const myChart = new Chart(document.getElementById("myChart"), config);
  });
}

moses();
