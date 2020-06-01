import React from "react";
import "../styles/listStyle.css";

const Activity = ({ name, deleter, changed }) => {
  return (
    <div className="list">
      <h3 id="list-title" style={{ color: "#d291bc" }}>
        Not Complited :
      </h3>
      <div className="item">
        <div className="doing">{`${name}`}</div>
        <input
          className="edit-box"
          type="text"
          placeholder={name}
          onChange={changed}
        />
        <button className="edit" title="Edit">
          <i className="fas fa-edit"></i>
        </button>
        <button className="tik" title="Has done" onClick={deleter}>
          <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Activity;
