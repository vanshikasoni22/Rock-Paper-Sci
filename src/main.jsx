import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react'

function RockPaperScissor(){

  let [urans, seturans]=useState("");
  let [computerans, setcomputerans]=useState("");
  let [result, setResult]=useState("");
  let choices=["ROCK🪨", "PAPER📄", "SCISSOR✂️"];
  let handleClick=(choice) => {
  seturans(choice);
  let randomselect=Math.floor(Math.random() * choices.length);
  let computerans=choices[randomselect];
  setcomputerans(computerans);
  if (choice===computerans) {
    setResult("Its a tie");
    } else if (
    (choice==="rock" && computerans==="scissor")||(choice==="paper" && computerans==="rock")||(choice==="scissor" && computerans==="paper")
    ) {
    setResult("You win");
    } else {
    setResult("Computer wins");
    }
  };
  return (
      <div>
        <h1>Rock Paper Scissor Game</h1>
        <br></br>
        <h1>COMPUTER VS YOU</h1>
        <h3>Let's find out who WINS</h3>
        <button onClick={()=> handleClick("ROCK🪨")}>Rock</button>
        <button onClick={()=> handleClick("PAPER📄")}>Paper</button>
        <button onClick={()=> handleClick("SCISSOR✂️")}>Scissor</button>
        <h2>Your choice is {urans}</h2>
        <h2>Computer's choice is {computerans}</h2>
        <h2>Result - {result}</h2>
      </div>
);
}
createRoot(document.getElementById("root")).render(<RockPaperScissor/>);

