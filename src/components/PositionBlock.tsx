import React from "react";
import { YandexMap } from "./YandexMap";

interface WeatherData {
  temp: number;
  description: string;
}

interface Props {
  location: GeolocationPosition;
  weather: WeatherData | null;
}

export function PositionBlock({ location, weather }: Props) {
  return (
    <div className="w-full">
      <h2>Ваши координаты:</h2>
      <p>Широта: {location.coords.latitude.toFixed(4)}</p>
      <p>Долгота: {location.coords.longitude.toFixed(4)}</p>

      {weather ? (
        <div className="p-4 bg-blue-100 rounded shadow my-2">
          <h3 className="text-lg font-semibold">Погода</h3>
          <p>{weather.description}</p>
          <p>Температура: {weather.temp.toFixed(1)}°C</p>
        </div>
      ) : (
        <p>Загрузка погоды...</p>
      )}

      <YandexMap
        coords={[location.coords.latitude, location.coords.longitude]}
      />
    </div>
  );
}
