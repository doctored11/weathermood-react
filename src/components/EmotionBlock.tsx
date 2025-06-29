import React, { useEffect, useState } from "react";
import { useMood } from "../context/MoodContext";
import type { MoodEntry } from "../context/MoodContext";
import { SmilesControl } from "./SmilesControl";
import { Control } from "./Control";
import { ConfirmModal } from "./ConfirmModal";

interface Props {
  weather: {
    temp: number;
    description: string;
  } | null;
}

export function EmotionBlock({ weather }: Props) {
  const { moodList, addMood } = useMood();

  const [mood, setMood] = useState(0);
  const [motivation, setMotivation] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [health, setHealth] = useState(50);
  const [note, setNote] = useState("");
  const [smile, setSmile] = useState("🙂");
  // const [weather, setWeather] = useState<{
  //   temp: number;
  //   description: string;
  // } | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [pendingEntry, setPendingEntry] = useState<MoodEntry | null>(null);

  const today = new Date().toISOString().slice(0, 10);
  const hasToday = moodList.some((m) => m.date.slice(0, 10) === today);

  const handleSave = () => {
    const newEntry: MoodEntry = {
      date: new Date().toISOString(),
      smile,
      mood,
      motivation,
      energy,
      health,
      note,
      weather: weather || undefined,
    };

    if (hasToday) {
      setPendingEntry(newEntry);
      setShowModal(true);
    } else {
      addMood(newEntry);
      setNote("");
    }
  };

  const confirmOverwrite = () => {
    if (!pendingEntry) return;

    const updated = moodList.map((m) =>
      m.date.slice(0, 10) === today ? pendingEntry : m
    );

    localStorage.setItem("moods", JSON.stringify(updated));
    addMood(pendingEntry);
    setNote("");
    setPendingEntry(null);
    setShowModal(false);
  };

  const cancelOverwrite = () => {
    setPendingEntry(null);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-center">
        Как ты себя чувствуешь?
      </h2>

      <SmilesControl selectedSmile={smile} setSmile={setSmile} />

      <Control
        header="Настроение"
        min={-10}
        max={10}
        step={0.5}
        value={mood}
        setValue={setMood}
      />
      <Control
        header="Мотивация"
        min={0}
        max={100}
        value={motivation}
        setValue={setMotivation}
      />
      <Control
        header="Бодрость"
        min={0}
        max={100}
        value={energy}
        setValue={setEnergy}
      />
      <Control
        header="Физическое самочувствие"
        min={0}
        max={100}
        value={health}
        setValue={setHealth}
      />

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Запиши, что хочешь вспомнить о сегодняшнем дне..."
        className="w-full h-32 p-2 border rounded resize-none"
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Сохранить
      </button>

      <ConfirmModal
        isOpen={showModal}
        message="Вы уже сохраняли данные за сегодня. Перезаписать?"
        onConfirm={confirmOverwrite}
        onCancel={cancelOverwrite}
      />
    </div>
  );
}
