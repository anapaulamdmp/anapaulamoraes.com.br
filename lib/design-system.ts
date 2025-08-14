// Design System Base
// This file will contain all design tokens and system configurations

export const designTokens = {
  colors: {
    light: {
      background: "#FDFCFC",
      foreground: "#1F2937",
      muted: "#6B7280",
      border: "#E5E7EB",
    },
    dark: {
      background: "#0F0F0F",
      foreground: "#F9FAFB",
      muted: "#9CA3AF",
      border: "#374151",
    },
  },
  typography: {
    fontFamily: {
      primary: "var(--font-inter)",
    },
  },
  spacing: {
    // Add spacing tokens here as needed
  },
  // Add more design tokens as needed
} as const

export type DesignTokens = typeof designTokens
