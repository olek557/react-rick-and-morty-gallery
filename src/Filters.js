import React, { Component } from "react";
import './Filters.css';

export class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <form onChange={(event) => { this.props.handleFilter(event) }}>
          <div className="input-group">
            <input name="nameSearch" type="text" placeholder="Search by Name" className="input-field" />
            <input name="locationSearch" type="text" placeholder="Search by Location" className="input-field" />
            <div>
              Gender
              <select onChange={this.props.onFilter} name="gender">
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
          </div>
        </form>

        <form onSubmit={(ev) => { this.props.onSearch(ev) }}>
          <input name="searchQuery" type="text" placeholder="Name" className="input-field" />
          <input type="submit" value="Search" />
        </form>
        <button onClick={this.props.onSort} name="sort-name-acs">Sort by Name ASC</button>
        <button onClick={this.props.onSort} name="sort-name-desc">Sort by Name DESC</button>
        <div>
          Gender
          <select onChange={this.props.onFilter} name="gender">
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
    )
  }
}