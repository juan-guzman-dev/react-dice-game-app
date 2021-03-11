import React from "react";
import "./App.css";
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <h1>Dice Game</h1>
      <p>In this app we have some number of dices showing up, and a button to roll. When we click roll we get new numbers.
        <br></br>
        We can control how many dices should display (6), and what the range of values is (1-20).</p>
      <Dice />
      <Dice numDice={4} title="Mini Dice" maxVal={20} />
    </div>
  );
}

export default App;
