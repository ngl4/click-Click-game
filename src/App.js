import React, { Component } from "react";
import "./App.css";
import BearCard from "./components/BearCard";
import pic1 from "./images/pic1.jpeg";
import pic2 from "./images/pic2.jpeg";
import pic3 from "./images/pic3.jpeg";
import pic4 from "./images/pic4.jpeg";
import pic5 from "./images/pic5.jpeg";
import pic6 from "./images/pic6.jpeg";

// set up an array for shuffling purpose
const images = [pic1, pic2, pic3, pic4, pic5, pic6];

//TODO: Add a setTimeout method for stating with "Click an image to Start" everytime the score is back to 0
//TODO: Animating Effect for incorrect answer
class App extends Component {
  state = {
    score: 0,
    
    topScore: 0,
    array: [],
    guessedCorrect: "true",
    guessedIncorrect: "false"
  };

  //This is the reason why you do not want to mutate state
  // let newArr = [...this.state.array]
  // newArr.push('something')
  // this.setState({array: newArr})

  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClickImage = elem => {
    //console.log(elem);
    var newArray = [...this.state.array];

    if (newArray.length === 0) {
      newArray.push(elem);
      this.setState({
        guessedCorrect: "true"
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore + 1,
          array: newArray,
          guessedCorrect: "true"

        });
        console.log("%cyou guessed correctly", "color: green");
      } else {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore,
          array: newArray
        });
        console.log("%cyou guessed correctly", "color: green");
      }
    } else {
      const found = newArray.includes(elem);

      if (!found) {
        newArray.push(elem);
        if (this.state.score >= this.state.topScore) {
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore + 1,
            array: newArray,
            guessedCorrect: "true"
          });
          console.log("%cyou guessed correctly", "color: green");
        } else {
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore,
            array: newArray,
            guessedCorrect: "true"

          });
          console.log("%cyou guessed correctly", "color: green");
        }

      } else {
        this.setState({
          score: 0,
          topScore: this.state.topScore,
          array: [],
          guessedCorrect: "false"
        });
        console.log("%cyou guessed incorrectly", "color: red");
      }
    }

    console.log(newArray);
    this.shuffleArray(images);
  };

  render() {

    let title;

    if (!this.state.guessedCorrect){
      title = <h2 style={{color: "pink"}}>You Guessed Incorrectly</h2>;
    }else if (this.state.array.length === 0){
      title = "Click an image to Start!";
    }else if (this.state.guessedCorrect) {
      title = <h2 style={{color: "lightgreen"}}>You Guessed Correctly</h2>;
    }


    return (
      <div>
        <div className="wrapper">
          {/* Sticky Header: Name(link), state, Score and Top Score */}
          <header className="bg-danger p-4 fixed-top">
            <div className="container d-flex justify-content-between text-white font-weight-bold">
              <div className="header-title">Clickling Game</div>
              <div className="header-midtitle">{title}</div>
              <div className="header-scoretitle">
                Score: {this.state.score} | Top Score: {this.state.topScore}{" "}
              </div>
            </div>
          </header>

          {/* Heading */}
          <div className="jumbotron jumbotron-fluid mt-5 heading-background text-white">
            <div className="container mt-5 mb-5 text-center">
              <h1 className="display-4">
                <strong>Clickling Game </strong>
              </h1>
              <p className="lead">
                Click on an image to earn points, but don't click on any more
                than once!
              </p>
            </div>
          </div>

          {/* Content: Clicky boxes */}
          <div className="container clicky-wrap">
            {images.map((pic) => (<BearCard
              image={pic}
              handleClickImage={this.handleClickImage}
              key={pic}
            />))}
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
