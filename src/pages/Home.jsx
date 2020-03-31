import React, { Component } from "react";
import SelectMultiple from "../components/SelectMultiple";
import ObjectsTable from "../components/ObjectsTable";
import OptionsTable from "../components/OptionsTable";
import Text from "@material-ui/core/Typography";
import { data as mockData, options } from "../mock/data";
import { names } from "../mock/names";
import { Alert, AlertTitle } from "@material-ui/lab";
import LinearBuffer from "../components/LinearBuffer";

// var axios = require("axios");

export default class Home extends Component {
  /*
  error: Holds possible errors from api calls.
  isLoaded: Boolean that turns true when we have hit database and received all Objects.
  itemsToSearch: Holds what the users has selected, works in conjuctions with <SelectMultiple/>.
  data: All Object objects that the api call returns from backend.
  toDownload: Holds a list of the Objects the user has selected and wants to download.
  selectedImages: Holds the types of images the user has selected and wants to download.
  timer: Holds seconds the user has to wait before they can submit another download.
  */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      itemsToSearch: [],
      apiCall: [],
      data: [],
      toDownload: [],
      selectedImages: [],
      timer: 0
    };
  }

  componentWillMount() {
    clearInterval(this.myInterval);
  }
  componentDidMount() {
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: false,
            apiCall: result.objects
          });
          console.log(result);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  getData = itemsToSearch => {
    let searchedData = [];
    for (let el in this.state.apiCall) {
      if (itemsToSearch.includes(el)) {
        for (let obs in this.state.apiCall[el]) {
          searchedData.push(this.state.apiCall[el][obs]);
        }
      }
    }

    this.setState({
      data: searchedData
    });
  };
  onSubmitSearch = itemsToSearch => {
    this.setState({
      itemsToSearch: itemsToSearch
    });
    this.getData(itemsToSearch);
  };
  getObjects = objects => {
    let obj = objects.map(el => el.Object_Name + "-" + el.Observation_Name);
    this.setState({
      toDownload: obj
    });
  };

  getTypes = types => {
    this.setState({
      selectedImages: types
    });
  };
  startTimer = () => {
    this.myInterval = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1
      });
    }, 1000);
  };
  postRequest = () => {
    if (
      this.state.toDownload.length > 0 &&
      this.state.selectedImages.length > 0
    ) {
      console.log(this.state.selectedImages);
      console.log(this.state.toDownload);
      this.setState({ timer: 60 });
      this.startTimer();
    }
  };
  render() {
    const { error, isLoaded, timer } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
      return <LinearBuffer />;
    } else if (this.state.timer > 0) {
      return (
        <Alert severity="success">
          <AlertTitle>
            Success You Can Download Again in {timer} Seconds.
          </AlertTitle>
        </Alert>
      );
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
              names={Object.keys(this.state.apiCall)}
            />
          </div>
          <div style={{ ...styles.tableContainer }}>
            {Object.keys(this.state.data).length > 0 ? (
              <ObjectsTable
                data={this.state.data}
                names={this.state.itemsToSearch}
                getObjects={this.getObjects}
              />
            ) : null}
            {Object.keys(this.state.data).length > 0 ? (
              <OptionsTable
                data={options}
                getTypes={this.getTypes}
                download={this.postRequest}
              />
            ) : null}
          </div>
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
