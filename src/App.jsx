import "./styles/App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [scoreboard, setScoreboard] = useState({ score: 0, bestScore: 0 });
  return (
    <div>
      <Header scoreboard={scoreboard} />
      <Game setScoreboard={setScoreboard} />
    </div>
  );
}

export default App;
