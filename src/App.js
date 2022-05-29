import Drumpads from "./Components/Drumpads";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const drumpads = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [displayText, setDisplayText] = useState("Displayer");

  const keyHandler = (e) => {
    for (let i = 0; i < drumpads.length; i++) {
      if (e.key.toUpperCase() === drumpads[i].keyTrigger) {
        const keySound = new Audio(drumpads[i].url);
        keySound.play();
        setDisplayText(drumpads[i].id);
      }
    }
  };
  window.addEventListener("keydown", keyHandler);

  return (
    <div className="container">
      <header className="header row text-center mt-4 mb-2">
        <h1 className="title col-12 text-info">Drumpad Machine</h1>
      </header>
      <main className="main-content row justify-content-center mb-5">
        <Drumpads drumpads={drumpads} setDisplayText={setDisplayText} />
        <Display displayText={displayText} />
      </main>
      <footer className="footer row text-info text-center">
        <p>Developed by Raúl Navarro Uribe</p>
        <p>
          Code available at:{" "}
          <span className="text-light">
            https://github.com/r-navarrouribe/fcc-frontend-drumpad
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
