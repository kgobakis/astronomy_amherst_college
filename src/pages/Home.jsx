import React, { Component } from "react";
import SelectMultiple from "../components/SelectMultiple";
import ObjectsTable from "../components/ObjectsTable";
import OptionsTable from "../components/OptionsTable";
import Text from "@material-ui/core/Typography";
import { data as mockData, options } from "../mock/data";
import { names } from "../mock/names";
import { Alert, AlertTitle } from "@material-ui/lab";
import LinearBuffer from "../components/LinearBuffer";
import { withStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
// var axios = require("axios");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      itemsToSearch: [],
      data: [],
      toDownload: [],
      selectedImages: []
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
  getData = itemsToSearch => {
    let adata = mockData.filter(row => itemsToSearch.includes(row.Object_Name));
    this.setState({
      data: adata
    });
  };
  onSubmitSearch = itemsToSearch => {
    this.setState({
      itemsToSearch: itemsToSearch
    });
    this.getData(itemsToSearch);
  };
  getObjects = objects => {
    this.setState({
      toDownload: objects
    });
  };

  getTypes = types => {
    this.setState({
      selectedImages: types
    });
  };

  postRequest = () => {
    if (
      this.state.toDownload.length > 0 &&
      this.state.selectedImages.length > 0
    ) {
    }
  };
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LinearBuffer />;
    } else {
      return (
        <div style={styles.container}>
          <h1 style={{ color: "#FFFFFF", textShadow: "2px 2px #000000" }}>
            What star would you like to learn more about today?
          </h1>
          <div style={{ color: "#FFFFFF" }}>
            <Text variant="caption">
              ** You can scroll up/down the list! **
            </Text>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              width: window.innerWidth / 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: "15px"
            }}
          >
            <SelectMultiple
              onSubmitSearch={this.onSubmitSearch}
              names={names}
            />
          </div>
          <div style={{ ...styles.tableContainer }}>
            {this.state.data.length >= 0 ? (
              <ObjectsTable
                data={this.state.data}
                names={this.state.itemsToSearch}
                getObjects={this.getObjects}
              />
            ) : null}
            {
              <OptionsTable
                data={options}
                getTypes={this.getTypes}
                download={this.postRequest}
              />
            }
          </div>
          {this.state.toDownload.length > 0 &&
          this.state.selectedImages.length > 0 ? (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert — check it out!
            </Alert>
          ) : null}
          <Button onClick={this.postRequest}>Submit</Button>
        </div>
      );
    }
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
  },
  root: {
    position: "relative"
  }
};
