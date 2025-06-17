import { Link } from "react-router-dom";
import React from "react";

export function Header() {
  return (
    <nav
      className="w-full min-h-14 bg-slate-600 flex items-center px-10"
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="flex text-red-600 lg:text-gray-500 text-5xl sm:text-2xl md:text-xl lg:text-base">
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
