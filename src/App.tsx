import { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import CurrentWeather from "./components/current/CurrentWeather";

function App() {
  const [currentWeatherFrom, setCurrentWeatherFrom] = useState(null);
  const [currentWeatherTo, setCurrentWeatherTo] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChangeFrom = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeatherFrom({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  const handleOnSearchChangeTo = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeatherTo({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <div>
        <Search onSearchChange={handleOnSearchChangeFrom} />
        {currentWeatherFrom && <CurrentWeather data={currentWeatherFrom} />}
      </div>
      <div>
        <Search onSearchChange={handleOnSearchChangeTo} />
        {currentWeatherTo && <CurrentWeather data={currentWeatherTo} />}
      </div>
      {/* {forecast && <Forecast data={forecast} />} */}
    </div>
  );
}

export default App;
