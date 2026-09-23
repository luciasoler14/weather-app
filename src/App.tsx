import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { getWeather, searchCity } from "./services/weatherApi";
import type { Weather } from "./types/weather";
import { Loading } from "./components/Loading";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError("");

    try {
      const coordinates = await searchCity(city);
      const weather = await getWeather(
        coordinates.latitude,
        coordinates.longitude,
      );

      setCity(city);
      setWeather(weather);
    } catch {
      setWeather(null);
      setError("Could not get the weather for that city");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <h1>Weather App</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loading />}
      {!loading && error && <p className="error">{error}</p>}
      {!loading && !error && weather && (
        <WeatherCard city={city} weather={weather} />
      )}
    </main>
  );
}

export default App;
