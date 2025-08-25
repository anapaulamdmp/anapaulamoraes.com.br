"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full shadow-lg border-2 bg-background hover:bg-accent"
    >
      <span className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">☀️</span>
      <span className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">🌙</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
