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

  const uppAllNames = () => {
    let a = peopleArr.map((ele) => {
      ele.name = ele.name[0].toUpperCase() + ele.name.slice(1);
      console.log(ele.name);
    });
  };

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

  const doChange = (id) => {
    peopleArr.forEach((ele) => {
      if (ele.id === id) {
        ele.atten = !ele.atten;
        console.log("Klick", ele.name[0].toUpperCase());
      }
    });
    setUpdate(true);
  };

  uppAllNames();
  return (
    <div>
      <h1>Students!</h1>
      <button>Add Students</button>
      <button onClick={sortByName}>by Name</button>
      <button onClick={sortByClass}>by Class</button>
      <div className="student-sect">
        {peopleArr.map((ele, index) => (
          <StudentCard key={index} changeAtten={doChange} props={ele} />
        ))}
      </div>
    </div>
  );
};

export default Student;
