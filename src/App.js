import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <CssBaseline />

      <div style={styles.backgroundImage}>
        <AppBar position="static" color="#FFFFFF">
          <Toolbar style={styles.Toolbar}>
            <Link to="/" style={{ color: "inherit" }}>
              <Button color="inherit">Home</Button>
            </Link>

            <Link to="/about" style={{ color: "inherit" }}>
              <Button color="inherit">About</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
{
}
const styles = {
  backgroundImage: {
    backgroundImage: "url(" + require("./images/bg.jpg") + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    width: "100vw",
    height: "100vh",
    position: "absolute"
  },
  Toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
export default App;
