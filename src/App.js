import React, { Component } from "react";
import getData from "./api";
import "./App.css";

console.log("getData", getData);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card-wrapper">
          <div className="card">
            <div className="card__image">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/183.jpeg"
                alt="rick"
              />
            </div>
            <div className="card__info">
              <div className="card__info-row">Name</div>
              <div className="card__info-row">Name</div>
              <div className="card__info-row">Name</div>
              <div className="card__info-row">Name</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
