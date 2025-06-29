import React from "react";

interface ControlProps {
  header: string;
  min: number;
  max: number;
  value: number;
  setValue: (val: number) => void;
  step?: number;
}

export function Control({
  header,
  min,
  max,
  step = 1,
  value,
  setValue,
}: ControlProps) {
  return (
    <div className="mb-4">
      
      <label className="block mb-2 text-lg font-medium">{header}</label>

      <div className="flex items-center gap-4">
        <input
          type="range"
          className="w-full"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <span className="w-12 text-right">{value}</span>
      </div>
    </div>
  );
}
