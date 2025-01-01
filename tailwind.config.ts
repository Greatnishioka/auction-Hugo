import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        Noto:["Noto Sans CJK JP",]
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(255, 0, 84, 0.1), 0 2px 4px -1px rgba(255, 0, 84, 0.06)',
      },
      transitionProperty: {
        'max-height': 'max-height',
        
      },
      // backgroundImage: {
      //   'hukidashi-svg': 'url("data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"268.792\" height=\"282.001\" viewBox=\"0 0 268.792 282.001\"%3E%3Cg id=\"aa_1\" data-name=\"aa 1\" transform=\"translate(2690 -1226)\" fill=\"%23fff8ee\"%3E%3Cpath d=\"M-2446.00024 1507.50049H-2682c-4.13574 0-7.5-3.3645-7.5-7.50012v-266.00049c0-4.1355 3.36426-7.5 7.5-7.5h236c4.1355 0 7.5 3.3645 7.5 7.5v13.80847v.57053l.5664-.07608 15.65649-2.09851c.02954-.00399.05859-.00593.08618-.00593.2832 0 .43042.21607.47046.40112.02484.11694.04779.40515-.28415.55554l-16.202-.19829-.2937.13306-.2937.32236-.0667 1.00012v245.05157c0 4.1355-3.36426 7.5-7.5 7.5z\" fill=\"%23ff0054\"/%3E%3C/g%3E%3C/svg%3E")'
        
      // },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
