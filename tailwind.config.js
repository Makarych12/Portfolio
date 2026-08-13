/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#09090B",
        slate2: "#0F0F12",
        slate3: "#18181B",
        zinc2: "#27272A",
        zinc3: "#3F3F46",
        amber2: "#F59E0B",
        emerald2: "#10B981",
        cyan2: "#06B6D4",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "scan-line": "scanLine 2s linear infinite",
        "blink": "blink 1s step-end infinite",
        "float": "float 3s ease-in-out infinite",
        "laser-scan": "laserScan 2.5s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.7", filter: "brightness(1.5)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        laserScan: {
          "0%": { top: "0%" },
          "50%": { top: "85%" },
          "100%": { top: "0%" },
        },
      },
    },
  },
  plugins: [],
};
