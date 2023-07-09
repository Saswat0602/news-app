import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress }
            // onLoaderFinished={() => setProgress(0)}
          />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress}
                  key="general"
                  pageSize={9}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News setProgress={setProgress}
                  key="business"
                  pageSize={9}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress}
                  key="entertainment"
                  pageSize={9}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News setProgress={setProgress}
                  key="health"
                  pageSize={9}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News setProgress={setProgress}
                  key="science"
                  pageSize={9}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress}
                  key="sports"
                  pageSize={9}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress}
                  key="technology"
                  pageSize={9}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

// 90c395b806384ca0b8b42958fc861b0d
