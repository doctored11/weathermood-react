import React from "react";
import { useGeoLocation } from "../hooks/useGeoLocation";

export function Control() {
  const { location, isLoading } = useGeoLocation();

  if (isLoading) return <div>Получаем ваше местоположение...</div>;
  
  if (!location) return null;

  return (
    <div>
      <h2>Ваши координаты:</h2>
      <p>Широта: {location.coords.latitude.toFixed(4)}</p>
      <p>Долгота: {location.coords.longitude.toFixed(4)}</p>
    </div>
  );

  //   return <p>Control</p>;
}
