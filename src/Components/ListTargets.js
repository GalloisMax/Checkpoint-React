import React from "react";
import { ListGroup } from "reactstrap";

import Targets from "./Targets";

const ListTargets = ({ targets }) => (
  <ListGroup>
    {targets.map((target, index) => <Targets key={index} {...target} />)}
  </ListGroup>
);

export default ListTargets;

// const Targets = [
//   {
//       name: "Leia Organa",
//       status: "alive",
//       picture: "https://starwars-visualguide.com/assets/img/characters/5.jpg"

//   },
//   {
//       name: "C-3PO",
//       status: "alive",
//       picture: "https://starwars-visualguide.com/assets/img/characters/2.jpg"
//   },
//   {
//       name: "Biggs Darklighter",
//       status: "dead",
//       picture: "https://starwars-visualguide.com/assets/img/characters/9.jpg"
//   }
// ]
