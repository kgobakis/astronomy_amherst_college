import React, { Component } from "react";
import Img from "react-image";

import Follette from "../media/kate-follette.jpeg";
const toPrint = (
  <h3 style={{ color: "#FFFFFF" }}>
    Kate Follette (Assistant Professor of Astronomy at Amherst College, MA) and
    her team have been gathering observations for the Giant Accreting
    Protoplanet Survey (GAPplanetS) since 2013. This database is intended to
    make it easy for you to access their data, both raw and processed, to
    reproduce their results or use it in your own research. For more details
    about the project and/or contact information, please consult Professor
    Follette's <a href="http://www.follettelab.com/"> lab website</a>, or her
    <a href="http://www.katefollette.com/"> personal website</a>.
  </h3>
);

export default class About extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={{ margin: 2 }}>
          <Img src={Follette} />
        </div>
        <div style={{ marginLeft: 10, width: 450 }}>{toPrint}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",

    flexDirection: "row",
  },
};
