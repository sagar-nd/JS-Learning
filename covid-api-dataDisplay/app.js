fetch("https://data.covid19india.org/v4/min/data.min.json")
  .then(response => response.json())
  .then(data => {


    let array1 = [];
    let array2 = [];
    let array3 = [];
    let array4 = [];
 
    for (var key of Object.keys(data)) {
      for (var value of Object.values(data[key])) {
        if (value.confirmed != undefined) {
          array1.push(value.confirmed);
        }
        if (value.recovered != undefined) {
          array2.push(value.recovered);
        }
        if (value.vaccinated1 != undefined) {
          array3.push(value.vaccinated1);
        }
        if (value.vaccinated2 != undefined) {
          array4.push(value.vaccinated2);
        }
      }
    }
    // console.log(array1);
    const totalCases = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const recoveredCases = array2.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const totalVaccinated1 = array3.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const totalVaccinated2 = array4.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    const totalVaccinated = totalVaccinated1 + totalVaccinated2;
    // console.log(totalVaccinated);
    document.getElementById("TotalCases").innerHTML = totalCases;
    document.getElementById("recovered").innerHTML = recoveredCases;
    document.getElementById("totalVaccinated").innerHTML = totalVaccinated;
    document.getElementById("band").innerHTML = totalVaccinated;
  });
