import React from "react";
import { useWeather } from "../hooks/useWeather";

interface Props {
  location: GeolocationPosition;
}

export function WeatherBlock({ location }: Props) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;

  const weather = useWeather(lat, lon);

  if (!weather) return <div>Загрузка погоды...</div>;

  return (
    <div className="p-4 bg-blue-100 rounded shadow">
      <h3 className="text-lg font-semibold">Погода</h3>
      <p>{weather.description}</p>
      <p>Температура: {weather.temp.toFixed(1)}°C</p>
    </div>
  );
}
