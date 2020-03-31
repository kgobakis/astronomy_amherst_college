import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Face";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <CssBaseline />

      <div style={styles.backgroundImage}>
        <AppBar position="static" color="inherit">
          <Toolbar style={styles.Toolbar}>
            <Button
              startIcon={<HomeIcon />}
              color="inherit"
              variant="outlined"
              href="/"
              style={{ marginRight: 10 }}
            >
              Home
            </Button>

            <Button
              startIcon={<AboutIcon />}
              color="inherit"
              variant="outlined"
              href="/about"
            >
              About
            </Button>
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

const styles = {
  backgroundImage: {
    backgroundImage: "url(" + require("./media/bg.jpg") + ")",
    backgroundColor: "#000000",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    width: "100%",
    height: "200vh",
    position: "absolute"
  },
  Toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
export default App;
