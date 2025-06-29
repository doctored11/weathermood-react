import React from "react";

interface SmilesControlProps {
  selectedSmile: string;
  setSmile: (emoji: string) => void;
}

export function SmilesControl({ selectedSmile, setSmile }: SmilesControlProps) {
  const emojis = ["😩", "😕", "😐", "🙂", "😄"];

  return (
    <div className="w-full flex justify-between text-3xl">
      {emojis.map((emoji) => (
        <button
          key={emoji}
          className={`transition hover:scale-110 ${
            selectedSmile === emoji ? "scale-125 ring-2 ring-blue-400" : ""
          }`}
          onClick={() => setSmile(emoji)}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}
