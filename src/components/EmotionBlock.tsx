import React from "react";
import { SmilesControl } from "./SmilesControl";
import { Control } from "./Control";

export function EmotionBlock() {
  const block = (
    <div className="flex flex-col gap-4 p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-center">
        Как ты себя чувствуешь?
      </h2>

      <SmilesControl />

      <Control
        header="Температура по ощущениям"
        min={-10}
        max={10}
        step={0.5}
      ></Control>

      <Control
        header="Уровень энергии"
        min={0}
        max={100}
        defaultValue={50}
      ></Control>

      <textarea
        placeholder="Запиши, что хочешь вспомнить о сегодняшнем дне..."
        className="w-full h-32 p-2 border rounded resize-none"
      />

      <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Сохранить
      </button>
    </div>
    
  );

  return block
}
