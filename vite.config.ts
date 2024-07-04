import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@api": "/src/api",
      "@components": "/src/components"
    },
  },
});
