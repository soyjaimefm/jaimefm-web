"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Moon from '@/components/icons/Moon';
import Sun from '@/components/icons/Sun';

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
    <div className="w-12 cursor-pointer">
      {(theme == "light") ? <Moon onClick={() => setTheme('dark')} /> : <Sun  onClick={() => setTheme('light')}/>}
    </div>
  )
}