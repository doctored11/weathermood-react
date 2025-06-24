import React, { useState } from "react";

interface ControlProps {
  header: string;
  max: number;
  min:number;
  step?: number;
  defaultValue?:number;
}

export function Control({ header, max, min=0, step = 1, defaultValue }: ControlProps) {
  const [value, setValue] = useState(defaultValue||0);

  return (
    <div className="mb-4">
      {/* Первая строка: заголовок */}
      <label className="block mb-2 text-lg font-medium">{header}</label>

      {/* Вторая строка: ползунок + число */}
      <div className="flex items-center gap-4 justify-between">
        <input
          type="range"
          className="w-10/12"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <p className="w-1/12 text-right">{value}</p>
      </div>
    </div>
  );
}
