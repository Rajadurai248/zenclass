// Fetch the data from the API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === "Asia");
    console.log("Countries from Asia:", asiaCountries);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", smallPopulationCountries);

    // Print the following details name, capital, flag, using forEach function
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.svg);
    });

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD !== undefined);
    console.log("Country that uses US dollars:", countryWithUSD);
  })
  .catch(error => console.log("Error fetching data:", error));