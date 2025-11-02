// astro.config.mjs
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  quietDeps: true, // ✅ hide bootstrap's deprecation warnings
              },
          },
      },

      plugins: [tailwindcss()],
    },
});