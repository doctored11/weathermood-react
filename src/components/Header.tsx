import { Link } from "react-router-dom";
import React from "react";

export function Header() {
  return (
    <nav
      className="w-full min-h-14 bg-slate-600 flex items-center justify-between px-10 md:min-h-16"
      role="navigation"
      aria-label="Main navigation"
    >

      <Link to="/" className="text-yellow-300 text-xl lg:text-4xl md:text-2xl hover:text-white"><span className="text-white">W</span>Mood</Link>
      <ul className="flex  text-gray-200 text-lg lg:text-3xl md:text-xl space-x-3 md:space-x-4">
        {[
          { to: "/", label: "pages" },
          { to: "/control", label: "control" },
          { to: "/history", label: "history" },
          { to: "/settings", label: "settings" },
        ].map((item) => (
          <li key={item.to} className="px-4 hover:text-green-400">
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
