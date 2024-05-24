import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function ScoreRegister({ course, players }) {
  const [inScore, setInScore] = useState();
  const [outScore, setOutScore] = useState();
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState();

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
        {course.map((ele, index) => {
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
        {players.map((ele, index) => {
          return <option value={ele.id}>{ele.name}</option>;
        })}
      </Form.Select>
      <Form.Control></Form.Control>
      <Form.Control></Form.Control>
      <br />
      <button>submit</button>
    </>
  );
}
export default ScoreRegister;
