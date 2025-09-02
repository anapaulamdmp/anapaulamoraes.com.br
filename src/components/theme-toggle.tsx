"use client"

import { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { applyTheme } from "@/lib/theme"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Sync CSS variables on mount or theme change
  useEffect(() => {
    if (theme) {
      applyTheme(theme as "light" | "dark")
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    applyTheme(newTheme as "light" | "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full shadow-lg border-2 bg-background hover:bg-accent"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}


/*"use client"

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { applyTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (

    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full shadow-lg border-2 bg-background hover:bg-accent"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>

  )
}*/