import React from "react";
import Job from "./doneList";

const Donejob = ({ hasDone, deleting }) => {
  return (
    <div>
      {hasDone.map((jobs) => (
        <Job
          key={jobs.id}
          name={jobs.name}
          delet={() => deleting(jobs.id)}
        ></Job>
      ))}
    </div>
  );
};
export default Donejob;
