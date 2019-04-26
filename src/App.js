import React, { Component } from "react";
// import getData from "./api";
import "./App.css";
import { Filters } from "./Filters";
import Character from "./Character";

class App extends Component {
  state = {
    characterList: [],
    originalCharacterList: [],

  }
  async componentDidMount() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    this.setState({
      characterList: data.results,
      originalCharacterList: data.results,
    });
  }

  searchInList = (event) => {
    event.preventDefault();
// console.log(this.state)
    const searchQuery = event.target.elements.searchQuery.value;
    const { characterList } = this.state;

    const filtredList = characterList.filter((character) => {
      return character.name.includes(searchQuery);
    });
    this.setState({characterList: filtredList});
  }

  render() {
    const { characterList } = this.state;
    // if (characterList) {
    //   characterList = originalCharacterList;
    // }
    return (
      <>
        <Filters onSearch={this.searchInList}></Filters>
        <div className="card-wrapper">
          {
            characterList.map((character) => {
              return <Character character={character} />
            })
          }
        </div>
      </>
    );
  }
}

export default App;
