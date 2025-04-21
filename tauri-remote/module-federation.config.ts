export const mfConfig = {
  name: "tauriremote",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: ["react", "react-dom"]
};
