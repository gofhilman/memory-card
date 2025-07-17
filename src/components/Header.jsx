import Scoreboard from "./Scoreboard";

export default function Header(props) {
  return (
    <div>
      <div>
        <h1>Pokémon Memory Card Game</h1>
        <p>
          Earn points by catching Pokémon shown on cards, but don't catch
          the same one more than once!
        </p>
      </div>
      <Scoreboard {...props} />
    </div>
  );
}
