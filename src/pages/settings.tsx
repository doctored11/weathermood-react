import React from "react";
import { useMood } from "../context/MoodContext";

export function Settings() {
  const { addMood } = useMood();

  const clearHistory = () => {
    localStorage.removeItem("moods");
    window.location.reload();
  };

  const generateRandomData = () => {
    const smiles = ["😩", "😕", "😐", "🙂", "😄"];
    const newEntries = [];

    const today = new Date();
    for (let i = 0; i < 365; i++) {
      if (Math.random() < 0.3) continue;

      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const entry = {
        date: date.toISOString(),
        smile: smiles[Math.floor(Math.random() * smiles.length)],
        mood: +(Math.random() * 20 - 10).toFixed(1),
        motivation: Math.floor(Math.random() * 101),
        energy: Math.floor(Math.random() * 101),
        health: Math.floor(Math.random() * 101),
        note: Math.random() < 0.3 ? "Случайная заметка" : "",
        weather:
          Math.random() < 0.8
            ? {
                temp: +(Math.random() * 40 - 10).toFixed(1),
                description: ["ясно", "облачно", "дождь", "туман", "гроза"][
                  Math.floor(Math.random() * 5)
                ],
              }
            : undefined,
      };

      newEntries.push(entry);
    }

    localStorage.setItem("moods", JSON.stringify(newEntries));
    window.location.reload();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Настройки</h2>
      <button
        onClick={clearHistory}
        className="bg-red-500 text-white py-2 px-4 rounded mb-4 w-full hover:bg-red-600"
      >
        Очистить историю
      </button>
      <button
        onClick={generateRandomData}
        className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600"
      >
        Заполнить историю случайно
      </button>
    </div>
  );
}
