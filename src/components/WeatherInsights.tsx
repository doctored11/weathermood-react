import React from "react";
import { useMood } from "../context/MoodContext";

export function WeatherInsights() {
  const { moodList } = useMood();

  const filtered = moodList.filter(
    (m) => m.weather && typeof m.mood == "number" && m.mood > 7
  );

  if (filtered.length == 0) return null;

  const temps = filtered.map((m) => m.weather!.temp).sort((a, b) => a - b);
  const minTemp = temps[0];
  const maxTemp = temps[temps.length - 1];

  const medianTemp =
    temps.length % 2 === 1
      ? temps[Math.floor(temps.length / 2)]
      : (temps[temps.length / 2 - 1] + temps[temps.length / 2]) / 2;

  const descriptionCount = filtered.reduce((acc: Record<string, number>, m) => {
    const desc = m.weather?.description;
    if (desc) {
      acc[desc] = (acc[desc] || 0) + 1;
    }
    return acc;
  }, {});

  const mostFrequentWeather = Object.entries(descriptionCount).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];

  return (
    <div className="mt-8 p-4 bg-blue-100 border border-blue-500 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-gray-600">
        Погодные наблюдения
      </h2>
      <p className="mb-1">
        Хорошее настроение чаще всего было при температуре от
        {minTemp.toFixed(1)}°C до 
        {maxTemp.toFixed(1)}°C
      </p>
      <p className="mb-1">Медианная температура : {medianTemp.toFixed(1)}°C</p>
      <p className="mb-1">
        Также хорошее настроение чаще всего совпадало с погодой:
        {mostFrequentWeather}
      </p>
    </div>
  );
}
