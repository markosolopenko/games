import React, { useEffect } from "react";
import Games from "./pages/Games/Games";

function App() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.httpEquiv = "Content-Security-Policy";
    meta.content =
      "default-src * 'self' blob: data: gap:; style-src * 'self' 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src 'none'; img-src * 'self' 'unsafe-inline' blob: data: gap:; connect-src 'self' * 'unsafe-inline' blob: data: gap:; frame-src * 'self' blob: data: gap:;";
    document.head.append(meta);
  }, []);

  return (
    <div className="App">
      <Games />
    </div>
  );
}

export default App;
