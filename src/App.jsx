import { useEffect, useState } from "react";
import "./App.css";
import words from "./data";

function App() {
  // const [theDraw, setDraw] = useState(
  //   document.getElementsByClassName("the-draw")
  // );
  const [count, setCount] = useState(6);
  const [gameStatus, setGameStatus] = useState("running");
  const [letter] = useState(words[Math.floor(Math.random() * words.length)]);
  const [enteredLetter, setEnteredLetter] = useState([]);

  const [currentLetters, setCurrentLetters] = useState(
    letter.split("").map(() => " _ ")
  );

  // useEffect(() => {
  //   setDraw(document.getElementsByClassName("the-draw"));
  // }, []);

  useEffect(() => {
    // console.log(theDraw.classList);
    // theDraw.classList?.add(`wrong-${6 - count}`);
    if (count === 0) {
      setGameStatus("lost");
      console.log("You Lost!");
    }
  }, [count]);

  useEffect(() => {
    if (!currentLetters.includes(" _ ")) {
      setGameStatus("win");
      console.log("You Save Him!");
    }
  }, [currentLetters]);

  const handleLetterChange = (e) => {
    if (gameStatus === "running") {
      if (enteredLetter.includes(e.target.value)) {
        return null;
      }
      setEnteredLetter([...enteredLetter, e.target.value]);
      const splitedLetter = letter.split("");
      if (splitedLetter.includes(e.target.value)) {
        e.target.style = "background-color: #176416; ";
        const indexes = splitedLetter.map((letter, index) => {
          if (letter === e.target.value) {
            return index;
          }
        });
        const filtered = currentLetters.map((letter, index) => {
          if (indexes.includes(index)) {
            return e.target.value;
          } else {
            return letter;
          }
        });
        setCurrentLetters(filtered);
      } else {
        setCount(count - 1);
        e.target.style = "background-color: #811919; ";
      }
    } else {
      return null;
    }
    // get value
    // add enteredLetter
    // check wwith letter -> in currentLetters entered letter position -> setCurrentLetter
  };

  const replayHandler = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="container">
        <div
          style={{ display: gameStatus === "win" ? "flex" : "none" }}
          className="win"
        >
          <h1>You Win</h1>
          <button onClick={replayHandler}>play again</button>
        </div>
        <div
          style={{ display: gameStatus === "lost" ? "flex" : "none" }}
          className="lost"
        >
          <div>
            <h1>You lose</h1>
            <h2>The Word Was {letter.toUpperCase()}</h2>
          </div>
          <button onClick={replayHandler}>try again</button>
        </div>
        <div className="hangman-draw">
          <div
            className="the-draw"
            style={6 - count >= 1 ? { display: "block" } : {}}
          >
            <div
              className="the-stand"
              style={6 - count >= 1 ? { display: "block" } : {}}
            ></div>
            <div
              className="the-hang"
              style={6 - count >= 2 ? { display: "block" } : {}}
            ></div>
            <div
              className="the-rope"
              style={6 - count >= 2 ? { display: "block" } : {}}
            ></div>
            <div className="the-man">
              <div
                className="head"
                style={6 - count >= 3 ? { display: "block" } : {}}
              ></div>
              <div
                className="body"
                style={6 - count >= 4 ? { display: "block" } : {}}
              ></div>
              <div
                className="hands"
                style={6 - count >= 5 ? { display: "block" } : {}}
              ></div>
              <div
                className="legs"
                style={6 - count >= 6 ? { display: "block" } : {}}
              ></div>
            </div>
          </div>
        </div>
        <div className="game">
          <h2>{count ? 6 - count + " Lies" : "Why Are You Lieing?"}</h2>
          <div>
            {currentLetters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
          <div className="buttons">
            <button onClick={handleLetterChange} value={"a"}>
              A
            </button>
            <button onClick={handleLetterChange} value={"b"}>
              B
            </button>
            <button onClick={handleLetterChange} value={"c"}>
              C
            </button>
            <button onClick={handleLetterChange} value={"d"}>
              D
            </button>
            <button onClick={handleLetterChange} value={"e"}>
              E
            </button>
            <button onClick={handleLetterChange} value={"f"}>
              F
            </button>
            <button onClick={handleLetterChange} value={"g"}>
              G
            </button>
            <button onClick={handleLetterChange} value={"h"}>
              H
            </button>
            <button onClick={handleLetterChange} value={"i"}>
              I
            </button>
            <button onClick={handleLetterChange} value={"j"}>
              J
            </button>
            <button onClick={handleLetterChange} value={"k"}>
              K
            </button>
            <button onClick={handleLetterChange} value={"l"}>
              L
            </button>
            <button onClick={handleLetterChange} value={"m"}>
              M
            </button>
            <button onClick={handleLetterChange} value={"n"}>
              N
            </button>
            <button onClick={handleLetterChange} value={"o"}>
              O
            </button>
            <button onClick={handleLetterChange} value={"p"}>
              P
            </button>
            <button onClick={handleLetterChange} value={"q"}>
              Q
            </button>
            <button onClick={handleLetterChange} value={"r"}>
              R
            </button>
            <button onClick={handleLetterChange} value={"s"}>
              S
            </button>
            <button onClick={handleLetterChange} value={"t"}>
              T
            </button>
            <button onClick={handleLetterChange} value={"u"}>
              U
            </button>
            <button onClick={handleLetterChange} value={"v"}>
              V
            </button>
            <button onClick={handleLetterChange} value={"w"}>
              W
            </button>
            <button onClick={handleLetterChange} value={"x"}>
              X
            </button>
            <button onClick={handleLetterChange} value={"y"}>
              Y
            </button>
            <button onClick={handleLetterChange} value={"z"}>
              Z
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
