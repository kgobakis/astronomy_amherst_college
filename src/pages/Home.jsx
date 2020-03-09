import React, { Component } from "react";
import SelectMultiple from "../components/SelectMultiple";
import Table from "../components/Table";
import Text from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: ["2", " 2"],
      objectsToSearch: [
        {
          name: "PLane",
          id: "123123",
          lastname: "antigone"
        },
        {
          name: "funky",
          id: "029",
          lastname: "asapolw"
        }
      ]
    };
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
  //       // exceptions from actual bugs in components.
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }
  renderTableData = () => {
    return this.state.items.map((items, index) => {
      // const { id, name, age, email } = objectsToSearch; //destructuring
      return <Table object={items} />;
    });
  };
  onSubmitSearch = text => {
    this.setState({
      items: text
    });
    console.log(this.state.items);
    this.renderTableData();
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
        <h1 style={{ color: "#FFFFFF" }}>
          What star would you like to learn more about today?
          {SelectMultiple.planet}
        </h1>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            width: 600,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Text style={{ position: "center", marginRight: 100, marginLeft: 2 }}>
            Select here:
          </Text>
          <div style={{ position: "center" }}>
            <SelectMultiple onSubmitSearch={this.onSubmitSearch} />
          </div>
        </div>
        <div style={styles.tableContainer}>{this.renderTableData()}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  tableContainer: {
    marginTop: 10,
    // marginLeft: 2,
    padding: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};
