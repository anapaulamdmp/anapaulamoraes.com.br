// src/lib/design-system.ts
// Design System Base
// This file contains design tokens, component configs, and can be used across your app

export const designTokens = {
  colors: {
    light: {
      background: "#FCFCFC",
      foreground: "#111214",
      muted: "#6B7280",
      border: "#E5E7EB",
      accent: "#3B82F6", // optional accent color
      text: {
        soft: "#686C73",       // paragraphs
        default: "#111214",    // titles
      },
    },
    dark: {
      background: "#0A0A0A",
      foreground: "#FCFCFC",
      muted: "#9CA3AF",
      border: "#2C2D2F",
      accent: "#2563EB",
      text: {
        soft: "#B6B9BE",       // paragraphs
        default: "#FCFCFC",    // titles
      },
    },
  },
  typography: {
    fontFamily: {
      primary: "var(--font-dmSans)", // replace with your variable if using Tailwind fonts
      serif: "var(--font-libre-baskerville)",
      secondary: "var(--font-dmSans)",
    },
  },
  spacing: {
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
    button: {
      //borderRadius: "9999px", // full rounded
      //padding: "0.5rem",
      //shadow: "0 4px 6px rgba(0,0,0,0.1)",
      //transition: "all 0.3s ease",
    },
  },
} as const;

export type DesignTokens = typeof designTokens;
