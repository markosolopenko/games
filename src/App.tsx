import React, { useEffect } from "react";
import Games from "./pages/Games/Games";

function App() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = "upgrade-insecure-requests";
    document.head.append(meta);
  }, []);

  return (
    <div className="App">
      <Games />
    </div>
  );
}

export default App;
