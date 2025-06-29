import React from "react";
import { MoodEntry } from "../context/MoodContext";

interface DayDetailModalProps {
  isOpen: boolean;
  entry: MoodEntry | null;
  onClose: () => void;
}

export function DayDetailModal({ isOpen, entry, onClose }: DayDetailModalProps) {
  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-black"
        >
          ✖
        </button>

        <div className="text-center mb-4">
          <div className="text-4xl">{entry.smile}</div>
          <h2 className="text-xl font-bold">{new Date(entry.date).toLocaleDateString()}</h2>
        </div>

        <div className="space-y-2 text-sm">
          <p><strong>Настроение:</strong> {entry.mood}</p>
          <p><strong>Мотивация:</strong> {entry.motivation}</p>
          <p><strong>Бодрость:</strong> {entry.energy}</p>
          <p><strong>Физ. самочувствие:</strong> {entry.health}</p>

          {entry.note && (
            <p>
              <strong>Заметка:</strong> <br />
              <span className="whitespace-pre-line">{entry.note}</span>
            </p>
          )}

          {entry.weather && (
            <div className="mt-2 p-2 bg-blue-50 rounded">
              <p className="text-sm font-semibold">🌤 Погода</p>
              <p>Температура: {entry.weather.temp}°C</p>
              <p>Состояние: {entry.weather.description}</p>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
