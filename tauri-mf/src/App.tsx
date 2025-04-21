import { Suspense } from "react";
import "./App.css";
import React from "react";

//@ts-expect-error
const Remote = React.lazy(() => import("tauriremote/App"));

function App() {
  return (
    <main className="container">
      <h1>Remote...</h1>
      <Suspense fallback={<div>Loading remote app...</div>}>
        <Remote />
      </Suspense>
    </main>
  );
}

export default App;
