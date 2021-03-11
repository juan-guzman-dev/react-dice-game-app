import React, { useState } from "react";
import "./Dice.css";
import Die from "./Die.js";
import ChangeHighlight from "react-change-highlight";

/** A game can be any number of Dies, all with random values. */

function Dice(props) {

  const [values, setValue] = useState(Array.from({ length: props.numDice }));
  const [highScore, setHighScore] = useState(0)

  /** roll a new set of random numbers */

  const roll = () => {
    setValue(curValues =>
      curValues.map(n => Math.floor(Math.random() * props.maxVal) + 1)
    );
  };

  // calculate score
  let score = values.reduce((acc, nextValue) => acc + nextValue)

  // set high score
  if (score > highScore) setHighScore(score)

  return (
    <section className="Dice">
      <h1>{props.title}</h1>
      <div>
        {values.map((n, idx) => (
          <Die value={n} key={idx} />
        ))}
      </div>
      <button onClick={roll}>Roll</button>
      {!isNaN(score) &&
        <>
          <h3>Your Score: {score}</h3>
          <div className="highScore">
            <ChangeHighlight>
              <small>High Score: </small>
              <small ref={React.createRef()}>{highScore}</small>
            </ChangeHighlight>
          </div>
        </>
      }

    </section >
  );
};

Dice.defaultProps = {
  title: "Main Game",
  numDice: 6,
  maxVal: 20
}

export default Dice;
