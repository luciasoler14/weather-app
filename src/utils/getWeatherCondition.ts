// weatherCode (0)
//       ↓
// getWeatherCondition(0)
//       ↓
// "Clear sky"

import { WeatherCode } from "../types/weather";

export const getWeatherCondition = (weatherCode: number): string => {
  switch (weatherCode) {
    case WeatherCode.ClearSky:
      return "Clear sky";

    case WeatherCode.MainlyClear:
      return "Mainly clear";

    case WeatherCode.PartlyCloudy:
      return "Partly cloudy";

    case WeatherCode.Overcast:
      return "Overcast";

    case WeatherCode.Fog:
      return "Fog";

    case WeatherCode.DepositingRimeFog:
      return "Depositing rime fog";

    case WeatherCode.DrizzleLight:
      return "Light drizzle";

    case WeatherCode.DrizzleModerate:
      return "Moderate drizzle";

    case WeatherCode.DrizzleDense:
      return "Dense drizzle";

    case WeatherCode.FreezingDrizzleLight:
      return "Light freezing drizzle";

    case WeatherCode.FreezingDrizzleDense:
      return "Dense freezing drizzle";

    case WeatherCode.RainSlight:
      return "Slight rain";

    case WeatherCode.RainModerate:
      return "Moderate rain";

    case WeatherCode.RainHeavy:
      return "Heavy rain";

    case WeatherCode.FreezingRainLight:
      return "Light freezing rain";

    case WeatherCode.FreezingRainHeavy:
      return "Heavy freezing rain";

    case WeatherCode.SnowFallSlight:
      return "Slight snow fall";

    case WeatherCode.SnowFallModerate:
      return "Moderate snow fall";

    case WeatherCode.SnowFallHeavy:
      return "Heavy snow fall";

    case WeatherCode.SnowGrains:
      return "Snow grains";

    case WeatherCode.RainShowersSlight:
      return "Slight rain showers";

    case WeatherCode.RainShowersModerate:
      return "Moderate rain showers";

    case WeatherCode.RainShowersViolent:
      return "Violent rain showers";

    case WeatherCode.SnowShowersSlight:
      return "Slight snow showers";

    case WeatherCode.SnowShowersHeavy:
      return "Heavy snow showers";

    case WeatherCode.ThunderstormSlightOrModerate:
      return "Thunderstorm";

    case WeatherCode.ThunderstormWithSlightHail:
      return "Thunderstorm with slight hail";

    case WeatherCode.ThunderstormWithHeavyHail:
      return "Thunderstorm with heavy hail";

    default:
      return "Unknown";
  }
};
