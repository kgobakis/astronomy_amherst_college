import React, { Component } from "react";

const toPrint = (
  <h5 style={{ color: "#FFFFFF" }}>
    Kate Follette (Assistant Professor of Astronomy at Amherst College, MA) and
    her team have been gathering observations for the Giant Accreting
    Protoplanet Survey (GAPplanetS) since 2013. This database is intended to
    make it easy for you to access their data, both raw and processed, to
    reproduce their results or use it in your own research. For more details
    about the project and/or contact information, please consult Professor
    Follette's lab website, or her personal website.
  </h5>
);

export default class About extends Component {
  render() {
    return <div>{toPrint}</div>;
  }
}
