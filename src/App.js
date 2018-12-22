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
  state = {
    score: 0,
    topScore: 0,
    array: []
  };

  // handleClickChange = (event) => {
  //   const {name, value} = event.target;

  // }
  //This is the reason why you do not want to mutate state
  // let newArr = [...this.state.array]
  // newArr.push('something')
  // this.setState({array: newArr})

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleClickImage = elem => {
    //console.log(elem);
    var newArray = [...this.state.array];

    if (newArray.length === 0) {
      newArray.push(elem);
      if(this.state.score >= this.state.topScore){
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore + 1,
          array: newArray
        });
      }else {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore,
          array: newArray
        });
      }
      
    } else {
      const found = newArray.includes(elem);

      if (!found) {
        newArray.push(elem);
        if (this.state.score >= this.state.topScore){
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore + 1,
            array: newArray
          });
        }else {
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore,
            array: newArray
          });
        }
        
      } else {
        this.setState({
          score: 0,
          topScore: this.state.topScore,
          array: []
        });
      }
    }

    console.log(newArray);

    this.setState({
      
    });
  };

  // Every time a user click on the image, it should push the image to an array. A score will increment.
  // if a new click image has the same image name as the one in the array, it should return
  //and give 0 score

  // the top score is gonna increment until a mismatch found

  render() {
    return (
      <div>
        <div className="wrapper">
          {/* Sticky Header: Name(link), state, Score and Top Score */}
          <header className="bg-danger p-4 fixed-top">
            <div className="container d-flex justify-content-between text-white font-weight-bold">
              <div className="header-title">Clickling Game</div>
              <div className="header-midtitle">Click an Image to Start!</div>
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
            <BearCard
              image={pic1}
              handleClickImage={this.handleClickImage}
              data_id={pic1}
            />
            <BearCard
              image={pic2}
              handleClickImage={this.handleClickImage}
              data_id={pic2}
            />
            <BearCard
              image={pic3}
              handleClickImage={this.handleClickImage}
              data_id={pic3}
            />
            <BearCard
              image={pic4}
              handleClickImage={this.handleClickImage}
              data_id={pic4}
            />
            <BearCard
              image={pic5}
              handleClickImage={this.handleClickImage}
              data_id={pic5}
            />
            <BearCard
              image={pic6}
              handleClickImage={this.handleClickImage}
              data_id={pic6}
            />
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
