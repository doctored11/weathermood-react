import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "control" },
    { to: "/history", label: "history" },
    { to: "/settings", label: "settings" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-slate-600 text-white px-6 py-4 shadow-md"
      role="navigation"
    >
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-yellow-300 text-xl lg:text-4xl md:text-2xl hover:text-white"
        >
          <span className="text-white">W</span>Mood
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden sm:flex text-gray-200 text-lg lg:text-3xl md:text-xl space-x-3 md:space-x-4">
          {navItems.map((item) => (
            <li key={item.to} className="px-4 hover:text-green-400">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-2 mt-4 sm:hidden text-lg">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 hover:bg-slate-700 rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
