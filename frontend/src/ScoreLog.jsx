import React, { useEffect, useState } from "react";

function ScoreLog({ scores, setScores }) {
  useEffect(() => {
    (async () => {
      await fetch("/scores")
        .then((res) => res.json())
        .then((res) => setScores(res));
    })();
  }, []);

  console.log({ scores });
  return (
    <div>
      <table>
        <tr>
          <th scope="col">人</th>
          <th scope="col">course</th>
          <th scope="col">OUT</th>
          <th scope="col">IN</th>
          <th scope="col">Total</th>
        </tr>
        {scores.map((ele) => {
          return (
            <tr>
              <th scope="col">{ele.name}</th>
              <td>{ele.course_name}</td>
              <td>{ele["OUT-score"]}</td>
              <td>{ele["IN-score"]}</td>
              <td>{ele["IN-score"] + ele["OUT-score"]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default ScoreLog;
