import React from "react";
import "../styles/listStyle.css";

const Job = ({ name, delet }) => {
  return (
    <div className="done">
      <h3 id="list-title" style={{ color: "#aacfcf" }}>
        Complited :
      </h3>
      <div className="item">
        <div className="doing">{`${name}`}</div>
        <button className="delete" title="delete" onClick={delet}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Job;
