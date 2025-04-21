import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";
import { mfConfig } from "./module-federation.config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation(mfConfig)],
  build: {
    target: "chrome89"
  }
});
