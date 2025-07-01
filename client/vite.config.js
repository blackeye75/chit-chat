import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import daisyui from 'daisyui'
import themes from 'daisyui/theme/object'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),tailwindcss({
      config: {
        content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
        // plugins: [daisyui],
        daisyui: {
          themes: ["light", "dark", "cupcake", "bumblebee", "emerald","forest", "corporate", "synthwave", "retro", "cyberpunk", "valentine"], // Add your themes here
          darkTheme: "dark", // name of one of the included themes for dark modeh
        },
      },
    }),],
})
