import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { mfConfig } from "./module-federation.config";
import { withZephyr } from "vite-plugin-zephyr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  build: {
    target: "chrome89"
  }
});
