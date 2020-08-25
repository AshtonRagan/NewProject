import React from "react";

const StudentCard = (props) => {
  return (
    <div>
      {console.log(props)}
      <h3>Name: {props.props.name}</h3>
      <h4>Class: {props.props.cls}</h4>
      <label htmlFor="attendence">Attendence</label>
      <input type="checkbox" id="attendence"></input>
    </div>
  );
};

export default StudentCard;
