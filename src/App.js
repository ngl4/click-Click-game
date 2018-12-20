import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* Sticky Header: Name(link), state, Score and Top Score */}
        <header className="bg-danger p-4 fixed-top">
          <div className="container d-flex justify-content-between text-white font-weight-bold">
            <div className="header-title">Clickling Game</div>
            <div className="header-midtitle">Click an Image to Start!</div>
            <div className="header-scoretitle">Score: 0 | Top Score: 0</div>
          </div>
        </header>

        {/* Heading */}
        <div class="jumbotron jumbotron-fluid mt-5 heading-background text-white">
          <div class="container mt-5 mb-5 text-center">
            <h1 class="display-4"><strong>Clickling Game </strong></h1>
            <p class="lead">
            Click on an image to earn points, but don't click on any more than once!
            </p>
          </div>
        </div>

        {/* Content: Clicky boxes */}
        


        {/* Footer - force bottom */}
        <footer className="container-fluid bg-danger text-white p-3">
          <div className="container">
            <p>Copyright 2018 React Clickling Game</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
