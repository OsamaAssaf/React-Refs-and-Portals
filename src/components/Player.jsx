import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleClick() {
    const playerNameInput = playerName.current;
    setEnteredPlayerName(playerNameInput.value);
    playerNameInput.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
