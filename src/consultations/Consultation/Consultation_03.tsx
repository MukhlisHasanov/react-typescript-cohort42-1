import { useState } from "react";

import "./styles.css";

const animals = ["Dog", "Cat", "Pig", "Lion"];
// const dog = animals[0];
// const cat = animals[1];
// const pig = animals[2];
// const lion = animals[3];

const [dog, cat, pig, lion] = animals;
console.log(dog);
console.log(cat);
console.log(pig);
console.log(lion);













function Consultation_03() {
  const stateArray = useState();
  console.log(stateArray);

  return <div></div>;
}

export default Consultation_03;
