// weatherCode (0)
//       ↓
// getWeatherEmoji(0)
//       ↓
// "☀️"

import { WeatherCode } from "../types/weather";

export const getWeatherEmoji = (weatherCode: number): string => {
  switch (weatherCode) {
    case WeatherCode.ClearSky:
      return "☀️";

    case WeatherCode.MainlyClear:
      return "🌤️";

    case WeatherCode.PartlyCloudy:
      return "⛅";

    case WeatherCode.Overcast:
      return "☁️";

    case WeatherCode.Fog:
    case WeatherCode.DepositingRimeFog:
      return "🌫️";

    case WeatherCode.DrizzleLight:
    case WeatherCode.DrizzleModerate:
    case WeatherCode.DrizzleDense:
    case WeatherCode.FreezingDrizzleLight:
    case WeatherCode.FreezingDrizzleDense:
      return "🌦️";

    case WeatherCode.RainSlight:
    case WeatherCode.RainModerate:
    case WeatherCode.RainHeavy:
    case WeatherCode.FreezingRainLight:
    case WeatherCode.FreezingRainHeavy:
    case WeatherCode.RainShowersSlight:
    case WeatherCode.RainShowersModerate:
    case WeatherCode.RainShowersViolent:
      return "🌧️";

    case WeatherCode.SnowFallSlight:
    case WeatherCode.SnowFallModerate:
    case WeatherCode.SnowFallHeavy:
    case WeatherCode.SnowGrains:
    case WeatherCode.SnowShowersSlight:
    case WeatherCode.SnowShowersHeavy:
      return "❄️";

    case WeatherCode.ThunderstormSlightOrModerate:
    case WeatherCode.ThunderstormWithSlightHail:
    case WeatherCode.ThunderstormWithHeavyHail:
      return "⛈️";

    default:
      return "❓";
  }
};
