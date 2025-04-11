import { useRef, useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setenteredPlayerName] = useState('');
  const playerName = useRef();

  function handleClick() {
    setenteredPlayerName(playerName.current.value);
  }


  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
