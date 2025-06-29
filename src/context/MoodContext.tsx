import React, { createContext, useContext, useState, ReactNode } from "react";

export interface MoodEntry {
  date: string;
  mood: number;
  motivation: number;
  energy: number;
  health: number;
  smile: string;
  note: string;
  weather?: {
    temp: number;
    description?: string;
  };
}


export interface MoodContextType {
  moodList: MoodEntry[];
  addMood: (entry: MoodEntry) => void;
  clearMoods: () => void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error("нужен провайдер");
  }
  return context;
}

export function MoodProvider({ children }: { children: ReactNode }) {
  const [moods, setMoods] = useState<MoodEntry[]>(() => {
    const stored = localStorage.getItem("moods");
    return stored ? JSON.parse(stored) : [];
  });

  const addMood = (entry: MoodEntry) => {
    const today = new Date().toISOString().slice(0, 10);

    const hasToday = moods.some((m) => m.date.slice(0, 10) === today);

    if (hasToday) {

      const updated = moods.map((m) =>
        m.date.slice(0, 10) === today ? entry : m
      );

      setMoods(updated);
      localStorage.setItem("moods", JSON.stringify(updated));
    } else {
      const updated = [...moods, entry];
      setMoods(updated);
      localStorage.setItem("moods", JSON.stringify(updated));
    }
  };

  const clearMoods = () => {
    setMoods([]);
    localStorage.removeItem("moods");
  };

  return (
    <MoodContext.Provider value={{ moodList: moods, addMood, clearMoods }}>
      {children}
    </MoodContext.Provider>
  );
}
