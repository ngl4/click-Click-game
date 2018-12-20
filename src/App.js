import React, { Component } from "react";
import "./App.css";
import BearCard from "./components/BearCard";
import pic1 from "./images/pic1.jpeg";
import pic2 from "./images/pic2.jpeg";
import pic3 from "./images/pic3.jpeg";
import pic4 from "./images/pic4.jpeg";
import pic5 from "./images/pic5.jpeg";
import pic6 from "./images/pic6.jpeg";



class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
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
        <div className="container clicky-wrap">
          <BearCard image={pic1}/>
          <BearCard image={pic2}/>
          <BearCard image={pic3}/>
          <BearCard image={pic4}/>
          <BearCard image={pic5}/>
          <BearCard image={pic6}/>
        </div>

        {/* Footer - force bottom */}
        <footer className="container-fluid bg-danger text-white p-3">
          <div className="container">
            <p>Copyright 2018 React Clickling Game</p>
          </div>
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
