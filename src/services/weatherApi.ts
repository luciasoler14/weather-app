import type { ApiResponse, Coordinates, Weather } from "../types/weather";

// Crear el servicio para consultar una ciudad y obtener sus coordenadas

// Operación asíncrona, porque debemos esperar la respuesta de la API
export const searchCity = async (city: string): Promise<Coordinates> => {
  /*
    Los parámetros importantes son:
      name → ciudad que buscamos
      count=1 → queremos un resultado
      language=es → nombres en español
      format=json → respuesta JSON
  */

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es&format=json`,
  );

  const data: ApiResponse = await response.json();

  const result = data.results?.[0];

  if (!result) {
    throw new Error(`City "${city}" not found`);
  }

  return {
    latitude: result.latitude,
    longitude: result.longitude,
  };
};

export const getWeather = async (
  latitude: number,
  longitude: number,
): Promise<Weather> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
  );

  const data = await response.json();
  const current = data.current;

  return {
    temperature: current.temperature_2m,
    humidity: current.relative_humidity_2m,
    windSpeed: current.wind_speed_10m,
    weatherCode: current.weather_code,
  };
};
