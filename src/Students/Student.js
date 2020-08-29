import React, { useState, useEffect } from "react";
import people from "./test-people";
import StudentCard from "./Students-card";
import "./Student.css";

const Student = () => {
  const [peopleArr, setpeopleArr] = useState(people);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    // setpeopleArr(peopleArr);
    setUpdate(false);
  }, [update]);

  const sortByName = () => {
    let arr = peopleArr;
    arr.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    setpeopleArr(arr);
    setUpdate(true);
  };

  const sortByClass = () => {
    let arr = peopleArr;
    arr.sort((a, b) => a.cls.toLowerCase().localeCompare(b.cls.toLowerCase()));
    setpeopleArr(arr);
    setUpdate(true);
  };
  return (
    <div>
      <h1>Students!</h1>
      <button>Add Students</button>
      <button onClick={sortByName}>by Name</button>
      <button onClick={sortByClass}>by Class</button>
      <div className="student-sect">
        {peopleArr.map((ele, index) => (
          <StudentCard key={index} props={ele} />
        ))}
      </div>
    </div>
  );
};

export default Student;
