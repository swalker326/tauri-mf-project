export const mfConfig = {
  name: "tauri-host",
  filename: "remoteEntry.js",
  remotes: {
    "tauriremote": {
      name: "tauriremote",
      entry: "http://localhost:5173/remoteEntry.js",
      type: "module"
    }
  },
  shared: ["react", "react-dom"]
};
