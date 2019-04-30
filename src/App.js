import React, { Component } from "react";
// import getData from "./api";
import "./App.css";
import { Filters } from "./Filters";
import Character from "./Character";

class App extends Component {
  state = {
    originalList: [],
    listToRender: [],
    filteringOptions: {},
  }
  async componentDidMount() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    this.setState({
      originalList: data.results,
      listToRender: data.results,
    });
  }

  // shouldComponentUpdate(_nextProps, nextState) {
  //   if(this.state.filteredList === nextState.filteredList) {
  //     return false;
  //   }
  //   return true;
  // }

  searchInList = (option, value, isFulMatch) => {
    console.log(option, value, isFulMatch)
    const searchQuery = this.state.filteringOptions[option];
    const { listToRender } = this.state;
    const filtredList = listToRender.filter((character) => {
      return isFulMatch ? character[option].toLowerCase() === value.toLowerCase() : character[option].toLowerCase().includes(searchQuery);
    });
    this.setState({ listToRender: filtredList });
  }

  sorting = (event) => {
    const { characterList } = this.state;
    const typeOfSorting = event.target.name;
    const sortedList = characterList.sort((i, j) => {
      if (typeOfSorting === 'sort-name-acs') {
        return i.name > j.name ? 1 : -1;
      } else if (typeOfSorting === 'sort-name-desc') {
        return i.name > j.name ? -1 : 1;
      }
    });
    this.setState({ characterList: sortedList });
  }

  // filter = (event) => {
  //   const option = event.target.name;
  //   const value = event.target.value;
  //   const { originalCharacterList } = this.state;
  //   if (value === 'all') {
  //     this.setState({ characterList: originalCharacterList });
  //   }
  //   else {
  //     const filteredList = originalCharacterList.filter((character) => {
  //       return character[option].toLowerCase() === value;
  //     });
  //     this.setState({ characterList: filteredList });
  //   }
  // }

  performFilter = (event) => {
    const input = event.target;
    // const filteringOptions = this.state;
    let filteringOptions = Object.assign({}, this.state.filteringOptions);
    filteringOptions[input.name] = input.value;
    this.setState({filteringOptions: filteringOptions});
    Object.keys(filteringOptions).forEach(option => {
      this.searchInList(option, filteringOptions[option], false);
    });
  }

  render() {
    const {listToRender} = this.state;
    // console.log(this.state.listToRender.length, this.state.listToRender, this.state.originalList);
    return (
      <>
        <Filters handleFilter={this.performFilter}></Filters>
        <div className="card-wrapper">
          {
            listToRender.map((character) => {
              return <Character character={character} />
            })
          }
        </div>
      </>
    );
  }
}

export default App;
