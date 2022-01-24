// Your code here
// I have provided the solution for the first  task to get you going.
class WorldWiki {
	// in the task below I am passing a name and then searching through the data
	// to find the name. and if its finds it just console.log it.
	// you can follow similar structure for the rest of the tasks

	searchByName(name) {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				// looping through data once its resolved
				data.map((country) => {
					// plz check first how the country object look like by using console.log()
					if (country.name.common === name) {
						console.log(country.name.common);
					}
				});
			});
	}

	getAllCountries() {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((countries) => {
				const countryNames = countries.map((country) => {
					return country.name.common;
				});
				console.log(countryNames);
			});
	}

	getBorderingCountriesByCountryName(name) {
		fetch(`https://restcountries.com/v3.1/name/${name}`)
			.then((response) => response.json())
			.then((countries) => {
				if (countries.length) {
					const country = countries[0];
					const borders = country.borders;
					if (borders && borders.length) {
						fetch(
							`https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
						)
							.then((response) => response.json())
							.then((borderCountries) => {
								const borderCountriesNames = borderCountries.map((country) => {
									return country.name.common;
								});
								console.log(borderCountriesNames);
							});
					} else {
						console.log(`Borders for the country: ${name} not found`);
					}
				} else {
					console.log("Country not found");
				}
			});
	}

	findCountriesByPopulation(population) {
		const popMillions = population * 1000000;
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((countries) => {
				const filteredCountries = countries.filter((country) => {
					return country.population > popMillions;
				});
				if (filteredCountries.length) {
					const countriesNames = filteredCountries.map((country) => {
						return country.name.common;
					});
					console.log(countriesNames);
				} else {
					console.log(
						`Countries not found with more population than ${population} millions`
					);
				}
			});
	}
}

const obj = new WorldWiki();

obj.searchByName("Finland");

obj.getAllCountries();

obj.getBorderingCountriesByCountryName("Germany");

obj.findCountriesByPopulation(50);
