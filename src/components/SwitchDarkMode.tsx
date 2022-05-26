import React, { useEffect, useState } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/outline";
export interface SwitchDarkModeProps {
  className?: string;
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({ className = "" }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;
    if (isDark) {
      !html.classList.contains("dark") && html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${className}`}
    >
      <span className="sr-only">Enable dark mode</span>
      {isDark ? (
        <MoonIcon className="w-7 h-7" aria-hidden="true" />
      ) : (
        <SunIcon className="w-7 h-7" aria-hidden="true" />
      )}
    </button>
  );
};

export default SwitchDarkMode;
