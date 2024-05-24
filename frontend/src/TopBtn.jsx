import React from "react";

function TopBtn({ setMonitorState }) {
  return (
    <div>
      <button
        onClick={() => {
          setMonitorState(false);
        }}
      >
        履歴
      </button>

      <button
        onClick={() => {
          setMonitorState(true);
        }}
      >
        スコア登録
      </button>
    </div>
  );
}

export default TopBtn;
