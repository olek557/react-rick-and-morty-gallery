import React, { Component } from "react";
// import getData from "./api";
import "./App.css";
import Character from "./Character";

class App extends Component {
  state = {
    characters: [],
  }
  async componentDidMount() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    this.setState({characters: data.results});
  }

  updateNumber = () => {
    this.setState({x: 3});
  }

  render() {
    const {characters} = this.state;
    return (
      <div className="card-wrapper">
        {
          characters.map((character) => {
            return  <Character character={character}/>
          })
        }
      </div>
    );
  }
}

export default App;
