export default function Scoreboard({ scoreboard }) {
  return (
    <div>
      <p>Score: {scoreboard.score}</p>
      <p>Best score: {scoreboard.bestScore}</p>
    </div>
  );
}
