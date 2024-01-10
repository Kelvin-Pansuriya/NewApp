// https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=51099226a1984b299129d12352be845a
// https://newsapi.org/v2/top-headlines?country=in&apiKey=51099226a1984b299129d12352be845a
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar
            webName="NewsApp"
            General="General"
            Business="Business"
            Entertainment="Entertainment"
            Health="Health"
            Science="Science"
            Sports="Sports"
            Technology="Technology"
          />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" />}>
              {/* <News key="general" category="general" /> */}
            </Route>
            <Route exact path="/general" element={<News key="general" category="general" />}>
              {/* <News key="general" category="general" /> */}
            </Route>
            <Route exact path="/business" element={<News key="Business" category="business" />}>
              {/* <News key="Business" category="business" /> */}
            </Route>
            <Route exact path="/entertainment" element={<News key="Entertainment" category="entertainment" />}>
              {/* <News key="Entertainment" category="entertainment" /> */}
            </Route>
            <Route exact path="/health" element={<News key="Health" category="health" />}>
              {/* <News key="Health" category="health" /> */}
            </Route>
            <Route exact path="/science" element={<News key="Science" category="science" />}>
              {/* <News key="Science" category="science" /> */}
            </Route>
            <Route exact path="/sports" element={<News key="Sports" category="sports" />}>
              {/* <News key="Sports" category="sports" /> */}
            </Route>
            <Route exact path="/technology" element={<News key="Technology" category="technology" />}>
              {/* <News key="Technology" category="technology" /> */}
            </Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
