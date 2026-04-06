import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react'

function RockPaperScissor(){

  let [urans, seturans]=useState("");
  let [computerans, setcomputerans]=useState("");
  let [result, setResult]=useState("");
  let choices=["rock", "paper", "scissor"];
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
        <button onClick={()=> handleClick("rock")}>Rock</button>
        <button onClick={()=> handleClick("paper")}>Paper</button>
        <button onClick={()=> handleClick("scissor")}>Scissor</button>
        <h2>Your choice is {urans}</h2>
        <h2>Computer's choice is {computerans}</h2>
        <h2>Result - {result}</h2>
      </div>
);
}
createRoot(document.getElementById("root")).render(<RockPaperScissor/>);

