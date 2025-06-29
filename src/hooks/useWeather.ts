import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  description: string;
}

export function useWeather(lat: number, lon: number) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey || !lat || !lon) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при загрузке погоды");
        return res.json();
      })
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
        });
      })
      .catch((err) => {
        console.error("Ошибка получения погоды:", err);
        setWeather(null);
      });
  }, [lat, lon]);

  return weather;
}
