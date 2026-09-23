import type { Weather } from "../types/weather";
import { getWeatherCondition } from "../utils/getWeatherCondition";
import { getWeatherEmoji } from "../utils/getWeatherEmoji";
import styles from "./WeatherCard.module.css";

interface Props {
  city: string;
  weather: Weather | null;
}

export const WeatherCard = ({ city, weather }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.city}>{city}</p>

      <p className={styles.temperature}>{weather?.temperature}</p>

      <p className={styles.condition}>
        {weather && (
          <>
            {getWeatherEmoji(weather.weatherCode)} {' '}
            {getWeatherCondition(weather.weatherCode)}
          </>
        )}
      </p>

      <div className={styles.stats}>
        <div>
          <span>Humidity</span>
          <p className={styles.humidity}>{weather?.humidity} %</p>
        </div>

        <div>
          <span>Wind</span>
          <p className={styles.wind}>{weather?.windSpeed} km/h </p>
        </div>
      </div>
    </div>
  );
};
