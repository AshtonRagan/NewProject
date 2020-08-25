import React from "react";

function person(id, name, cls) {
  this.id = id;
  this.name = name;
  this.cls = cls;
}

let jon = new person(0, "jon", "Bjj");
let jane = new person(0, "jane", "Muaythia");

const people = [new person(0, "jane", "Muaythia"), new person(1, "jon", "bjj")];

export default people;
