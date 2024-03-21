import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="countries-container w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-10 p-10 bg-slate-800">

      {countries.map((country, index) => (
        <div key={country.name.common + index} className="w-[400px] md:w-full lg:w-full h-full flex flex-col justify-center items-start border-2 rounded-lg border-white">
          <img className="w-[400px] h-[210px] md:w-[440px] lg:w-[300px] lg:h-[180px]"
            src={country.flags.png}
            alt={country.name.common}
          />
          <p className="ml-4 text-white text-xl">Region: {country.region}</p>
          <p className="ml-4 text-white text-lg">Name: {country.name.common}</p>
          <p className="ml-4 text-white text-lg">Capital City: {country.capital}</p>
          <p className="ml-4 text-white text-lg">population: {country.population}</p>

        </div>
      ))}
    </div>
  );
};

export default Countries;
