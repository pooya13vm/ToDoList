import React from "react";
import Activity from "./mustdoList";

const Mustdo = ({ mustDo, deleted, actEditor }) => {
  return (
    <div>
      {mustDo.map((act) => (
        <Activity
          key={act.id}
          name={act.name}
          deleter={() => deleted(act.id)}
          changed={(event) => actEditor(event, act.id)}
        ></Activity>
      ))}
    </div>
  );
};

export default Mustdo;
