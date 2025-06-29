import React, { useState } from "react";
import { MoodEntry } from "../context/MoodContext";
import { DayDetailModal } from "./DayDetaillModal";

interface HistoryGridProps {
  moods: MoodEntry[];
  days: number;
}


function getColor(mood: number) {
  if (mood > 5) return "bg-green-500";
  if (mood > 0) return "bg-green-300";
  if (mood === 0) return "bg-gray-300";
  if (mood > -5) return "bg-red-300";
  return "bg-red-500";
}

export function HistoryGrid({ moods, days }: HistoryGridProps) {
  const [selectedEntry, setSelectedEntry] = useState<MoodEntry | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const moodByDate = moods.reduce((acc, entry) => {
    acc[entry.date.slice(0, 10)] = entry;
    return acc;
  }, {} as Record<string, MoodEntry>);

  const today = new Date();
 const daysToShow = days;


  const daysArray = Array.from({ length: daysToShow }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (daysToShow - i - 1));
    const key = d.toISOString().slice(0, 10);
    return {
      date: key,
      entry: moodByDate[key] ?? null,
    };
  });

  const handleClick = (entry: MoodEntry | null) => {
    if (!entry) return;
    setSelectedEntry(entry);
    setModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-rows-7 grid-flow-col gap-[2px] justify-center">
        {daysArray.map(({ date, entry }) => (
          <div
            key={date}
            className={`w-3 h-3 rounded-sm cursor-pointer ${
              entry ? getColor(entry.mood) : "bg-gray-100"
            }`}
            onClick={() => handleClick(entry)}
            title={`${date} — ${entry ? `настроение: ${entry.mood}` : "нет данных"}`}
          ></div>
        ))}
      </div>

      <DayDetailModal
        isOpen={modalOpen}
        entry={selectedEntry}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
