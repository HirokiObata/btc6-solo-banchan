import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function ScoreRegister({ course, players }) {
  const [inScore, setInScore] = useState();
  const [outScore, setOutScore] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState();

  const postButton = () => {
    // fetch post request
    console.log("post");
    fetch("http://localhost:8080/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player_id: selectedPlayer,
        "IN-score": inScore,
        "OUT-score": outScore,
        golf_course: selectedCourse,
        date: new Date(),
      }),
    });
  };

  return (
    <>
      <Form.Label>コース選択</Form.Label>

      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          setSelectedCourse(e.target.value);
        }}
      >
        <option>コースを選んでね</option>
        {course.map((ele) => {
          return <option value={ele.id}>{ele.course_name}</option>;
        })}
      </Form.Select>
      <br />
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          setSelectedPlayer(e.target.value);
        }}
      >
        <option>人選んでね</option>
        {players.map((ele) => {
          return <option value={ele.id}>{ele.name}</option>;
        })}
      </Form.Select>
      <Form.Control
        onChange={(e) => {
          console.log(e.target.value);
          setOutScore(e.target.value);
        }}
      ></Form.Control>
      <Form.Control
        onChange={(e) => {
          console.log(e.target.value);
          setInScore(e.target.value);
        }}
      ></Form.Control>
      <br />
      <button onClick={postButton}>submit</button>
    </>
  );
}
export default ScoreRegister;
