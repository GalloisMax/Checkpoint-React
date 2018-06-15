import React, { Component } from "react";
import { Container } from "reactstrap";
import ListTargets from "./ListTargets";

class Panier extends Component {
  constructor() {
    super();
    this.state = {
      targets: [
        {
          name: "Leia Organa",
          status: "alive",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/5.jpg"
        },
        {
          name: "C-3PO",
          status: "alive",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/2.jpg"
        },
        {
          name: "Biggs Darklighter",
          status: "dead",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/9.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <Container>
        <ListTargets targets={this.state.targets} />
      </Container>
    );
  }
}

export default Panier;
