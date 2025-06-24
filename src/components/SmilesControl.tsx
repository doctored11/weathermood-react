import React from "react";

export function SmilesControl() {
  const block = (
    <div className=" w-full flex justify-between text-3xl">
      {["😩", "😕", "😐", "🙂", "😄"].map((emoji, idx) => (
        <button key={idx} className="hover:scale-110 transition">
          {emoji}
        </button>
      ))}
    </div>
  );
  return block
}
