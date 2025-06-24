import React from "react";
import { YandexMap } from "./YandexMap";

interface Props {
  location: GeolocationPosition;
}

export function PositionBlock({ location }: Props) {

  const posBlock = (
    <div className="w-full">
      <h2>Ваши координаты:</h2>
      <p>Широта: {location.coords.latitude.toFixed(4)}</p>
      <p>Долгота: {location.coords.longitude.toFixed(4)}</p>
      <YandexMap
        coords={[location.coords.latitude, location.coords.longitude]}
      />
    </div>
  );
  return posBlock;
}
