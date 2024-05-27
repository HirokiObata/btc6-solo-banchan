import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": process.env.PORT
      "/api": "https://btc6-solo-banchan.onrender.com",
      //  "http://localhost:8080"
    },
  },
});
