import React, { Component } from "react";
import SelectMultiple from "../components/SelectMultiple";
import ObjectsTable from "../components/ObjectsTable";
import Text from "@material-ui/core/Typography";
import { data as mockData } from "../mock/data";
import { names } from "../mock/names";
var axios = require("axios");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    // var th = this;
    // this.serverRequest = axios.get(this.props.source).then(function(result) {
    //   th.setState({
    //     concerts: result.data.concerts
    //   });
    // });
  }

  // componentDidMount() {
  //   fetch("https://10")
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.s
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  onSubmitSearch = planets => {
    this.setState({
      items: planets
    });
  };
  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <div style={styles.container}>
        <h1 style={{ color: "#FFFFFF", textShadow: "2px 2px #000000" }}>
          What star would you like to learn more about today?
        </h1>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            width: window.innerWidth / 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: "15px"
          }}
        >
          <Text style={{ marginLeft: 10 }}>Select here:</Text>
          <div style={{ marginRight: 10 }}>
            <SelectMultiple
              onSubmitSearch={this.onSubmitSearch}
              names={names}
            />
          </div>
        </div>
        <div style={styles.tableContainer}>
          {<ObjectsTable data={mockData} names={this.state.items} />}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  tableContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  table: {
    marginRight: 2
  }
};
