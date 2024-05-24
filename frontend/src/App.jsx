import { useEffect, useState, useTransition } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopBtn from "./TopBtn";
import ScoreRegister from "./ScoreRegister";
import ScoreLog from "./ScoreLog";

function App() {
  const [count, setCount] = useState(0);
  const [players, setPlayer] = useState([]);
  const [course, setCourse] = useState([]);
  const [monitorState, setMonitorState] = useState(true);
  const [scores, setScores] = useState([]);

  async function getname() {
    const player = await fetch(" http://localhost:8080/player").then((res) =>
      res.json()
    );
    setPlayer(player);
  }
  useEffect(() => {
    getname();
  }, []);

  async function getCourse() {
    const course = await fetch(" http://localhost:8080/course").then((res) =>
      res.json()
    );
    setCourse(course);
  }
  useEffect(() => {
    getname();
    getCourse();
    (async () => {
      await fetch("http://localhost:8080/scores")
        .then((res) => res.json())
        .then((res) => setScores(res));
    })();
  }, []);

  console.log({ players });
  console.log({ course });
  return (
    <>
      <h1>Scores Memo</h1>
      <div>
        <TopBtn setMonitorState={setMonitorState}></TopBtn>
        {monitorState ? (
          <ScoreRegister course={course} players={players}></ScoreRegister>
        ) : (
          <ScoreLog scores={scores}></ScoreLog>
        )}
      </div>
    </>
  );
}

export default App;
