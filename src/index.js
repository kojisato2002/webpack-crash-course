import _ from "lodash";
// import { Name, Nijyou } from "./utilities";
// import * as utilities from "./utilities";
// import { Name as NAME_OF_HAM } from "./utilities";
import Tiger from "./utilities";

// console.log(utilities.Nijyou(3));
console.log(Tiger.say());

function component() {
  const element = document.createElement("div");
  const array = ["Hello", "Webpack", "!!"];
  element.innerHTML = _.join(array, " ");
  return element;
}

document.body.appendChild(component());
