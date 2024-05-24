import React, { useEffect, useState } from "react";

function ScoreLog({ scores }) {
  console.log({ scores });
  return (
    <div>
      <table>
        <tr>
          <th>人</th>
          <th>course</th>
          <th>IN</th>
          <th>OUT</th>
          <th>Total</th>
        </tr>
        {scores.map((ele) => {
          return (
            <tr>
              <td>{ele.name}</td>
              <td>{ele.course_name}</td>
              <td>{ele["IN-score"]}</td>
              <td>{ele["OUT-score"]}</td>
              <td>{ele["IN-score"] + ele["OUT-score"]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default ScoreLog;
