// src/lib/theme.ts
import { designTokens } from "./design-system";

export function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  const colors = designTokens.colors[theme];

  root.style.setProperty("--background", colors.background);
  root.style.setProperty("--foreground", colors.foreground);
  root.style.setProperty("--text-default", colors.text.default);
  root.style.setProperty("--text-soft", colors.text.soft);
  root.style.setProperty("--text-muted", colors.muted);
  root.style.setProperty("--border", colors.border);
  root.style.setProperty("--accent", colors.accent);


  // Apply general colors
  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === "string") {
      document.documentElement.style.setProperty(`--${key}`, value);
    }
  });

  document.documentElement.setAttribute("data-theme", theme);
}
