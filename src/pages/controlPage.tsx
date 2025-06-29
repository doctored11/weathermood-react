import React from "react";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { useWeather } from "../hooks/useWeather";
import { EmotionBlock } from "../components/EmotionBlock";
import { PositionBlock } from "../components/PositionBlock";

export function ControlPage() {
  const { location, isLoading } = useGeoLocation();

  const weather = useWeather(
    location?.coords.latitude ?? 0,
    location?.coords.longitude ?? 0
  );

  if (isLoading) return <div>Получаем ваше местоположение...</div>;
  if (!location) return <div>Не удалось определить координаты</div>;

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-around gap-4 py-8">
      <div className="w-full sm:w-1/3">
        <PositionBlock location={location} weather={weather} />
      </div>
      <div className="w-full sm:w-1/3">
        <EmotionBlock weather={weather} />
      </div>
    </div>
  );
}
