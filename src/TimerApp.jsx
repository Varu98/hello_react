import { useState } from "react";

export const TimerApp = () => {
  const [start, setStart] = useState(0);
  const [pauseTimer, setPauseTimer] = useState();

  const startTimer = () => {
    let starterFunction = setInterval(
      () => setStart((timer) => timer + 1),
      1000
    );
    setPauseTimer(starterFunction);
  };

  const resetTimer = () => {
    clearInterval(pauseTimer);
    setStart(0);
  };
  return (
    <div className="flex-center">
      <header>
        <h1>Timer App</h1>
        <p>Create a timer app that has three btns start, pause, reset</p>
        <ul className="text-align-left">
          <li>clicking on start should start the timer</li>
          <li>clicking on pause should pause the timer</li>
          <li>clicking on reset should reset the timer to zero</li>
        </ul>
      </header>
      <timerCountdown>
        <h1>{start}</h1>
      </timerCountdown>
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={() => clearInterval(pauseTimer)}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
    </div>
  );
};
