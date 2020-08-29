import React from "react";
import "./Student.css";

const StudentCard = (props) => {
  return (
    <div className="student-card">
      {/* {console.log(props)} */}
      <div>
        <h3>Name: {props.props.name}</h3>
      </div>
      <div className="student-class">
        <h4>Class: {props.props.cls}</h4>
      </div>
      <div className="atten">
        <label htmlFor="attendence">Attendence</label>
        <input type="checkbox" id="attendence"></input>
      </div>
    </div>
  );
};

export default StudentCard;
