import React from "react";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { YandexMap } from "../components/YandexMap";

import { Control } from "../components/Control";
import { SmilesControl } from "../components/SmilesControl";
import { EmotionBlock } from "../components/EmotionBlock";
import { PositionBlock } from "../components/PositionBlock";
export function ControlPage() {
  const { location, isLoading } = useGeoLocation();

  if (isLoading) return <div>Получаем ваше местоположение...</div>;

  if (!location) return null;

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-around gap-4 py-8">
     
      <div className=" w-full sm:w-1/3">
        <PositionBlock location={location} />
      </div>
      <div className="w-full sm:w-1/3">
        <EmotionBlock />
      </div>
    </div>
  );
}
