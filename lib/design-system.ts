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
  components: {
    project: {
      borderRadius: "8px",
      hoverScale: "1.02",
      transitionDuration: "500ms",
      imageAspectRatio: {
        desktop: "16/10",
        mobile: "4/3",
      },
      content: {
        padding: {
          mobile: "1rem",
          desktop: "2rem",
        },
        yearFontSize: "0.875rem", // text-sm
        titleFontSize: {
          mobile: "1.25rem", // text-xl
          desktop: "1.5rem", // text-2xl
        },
      },
    },
  },
  // Add more design tokens as needed
} as const

export type DesignTokens = typeof designTokens
