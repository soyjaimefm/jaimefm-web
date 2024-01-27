"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-12">
      {(theme == "light") ? <FaMoon className="size-6" onClick={() => setTheme('dark')} /> : <FaSun className="size-6" onClick={() => setTheme('light')} />}
    </div>
  )
}