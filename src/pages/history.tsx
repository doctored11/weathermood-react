import React, { useCallback, useLayoutEffect, useState } from "react";
import { useMood } from "../context/MoodContext";
import { HistoryGrid } from "../components/HistoryGrid";
import { WeatherInsights } from "../components/WeatherInsights";

const MOBILE_DAYS = 168;
const DESKTOP_DAYS = 365;
const MEDIA_QUERY = "(max-width: 750px)";

export function History() {
  const { moodList } = useMood();
  const [daysToShow, setDaysToShow] = useState(() =>
    window.matchMedia(MEDIA_QUERY).matches ? MOBILE_DAYS : DESKTOP_DAYS
  );

  const handleMediaChange = useCallback((e: MediaQueryListEvent) => {
    setDaysToShow(e.matches ? MOBILE_DAYS : DESKTOP_DAYS);
  }, []);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA_QUERY);

    mediaQuery.addEventListener("change", handleMediaChange);
    setDaysToShow(mediaQuery.matches ? MOBILE_DAYS : DESKTOP_DAYS);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [handleMediaChange]);

  return (
    <div className="max-w-4xl mx-auto p-6 pt-20">
      <h1 className="text-2xl font-bold mb-4 text-center">История настроения</h1>

      <HistoryGrid moods={moodList} days={daysToShow} />

      <p className="text-sm text-gray-500 mt-4 text-center">
        Отображается история за последние <strong>{daysToShow}</strong> дней
      </p>
       <WeatherInsights />
    </div>
  );
}
