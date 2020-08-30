function person(id, name, cls, atten = false) {
  this.id = id;
  this.name = name;
  this.cls = cls;
  this.atten = atten;
}

const people = [
  new person(0, "jane", "Muaythai"),
  new person(1, "jon", "Bjj"),
  new person(2, "tim", "Bjj"),
  new person(3, "trish", "Muaythai"),
  new person(4, "chris", "Bjj", true),
  new person(5, "sara", "Muaythai"),
];

export const peopleTwo = [
  new person(1, "jess", "Bjj"),
  new person(2, "ttammy", "Bjj"),
  new person(3, "trish", "Muaythai"),
  new person(5, "shareit", "Muaythai"),
];

export default people;
