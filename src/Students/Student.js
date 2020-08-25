import React from "react";
import people from "./test-people";
import StudentCard from "./Students-card";

const Student = () => {
  return (
    <div>
      <h1>Students!</h1>
      <div>
        {people.map((ele, index) => (
          <StudentCard props={ele} />
        ))}
      </div>
    </div>
  );
};

export default Student;
