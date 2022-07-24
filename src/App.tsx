import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Demo from "./pages/Demo/Demo";
import Games from "./pages/Games/Games";

function App() {
  const { DEMO, GAMES } = ROUTES;
  return (
    <div className="App">
      <Routes>
        <Route path={GAMES} element={<Games />} />

        <Route path={DEMO} element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
