export type Weather = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number; // código numérico que representa el estado del clima
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type ApiResponse = {
  results?: {
    latitude: number;
    longitude: number;
  }[];
};

export const WeatherCode = {
  ClearSky: 0,
  MainlyClear: 1,
  PartlyCloudy: 2,
  Overcast: 3,
  Fog: 45,
  DepositingRimeFog: 48,
  DrizzleLight: 51,
  DrizzleModerate: 53,
  DrizzleDense: 55,
  FreezingDrizzleLight: 56,
  FreezingDrizzleDense: 57,
  RainSlight: 61,
  RainModerate: 63,
  RainHeavy: 65,
  FreezingRainLight: 66,
  FreezingRainHeavy: 67,
  SnowFallSlight: 71,
  SnowFallModerate: 73,
  SnowFallHeavy: 75,
  SnowGrains: 77,
  RainShowersSlight: 80,
  RainShowersModerate: 81,
  RainShowersViolent: 82,
  SnowShowersSlight: 85,
  SnowShowersHeavy: 86,
  ThunderstormSlightOrModerate: 95,
  ThunderstormWithSlightHail: 96,
  ThunderstormWithHeavyHail: 99,
} as const;
