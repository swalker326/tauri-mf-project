export const mfConfig = {
  name: "tauri-host",
  filename: "remoteEntry.js",
  remotes: {
    "tauri-remote": {
      entry: "http://localhost:5174/remoteEntry.js",
      type: "module"
    }
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
