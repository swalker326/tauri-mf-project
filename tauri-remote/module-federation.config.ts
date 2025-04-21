export const mfConfig = {
  name: "tauri-remote",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: {
    react: {
      singleton: true
    },
    "react-dom": {
      singleton: true
    }
  }
};
