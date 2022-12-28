fetch('https://data.covid19india.org/v4/min/data.min.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
