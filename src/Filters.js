import React, {Component} from "react";
import './Filters.css';

export class Filters extends Component {
    // handleSubmit(event) {
    //     event.preventDefault();
    //     const searchQuery = event.target.elements.searchQuery.value;

    // }
    render() {

        return <div className="filters">
                    <form onSubmit={(ev) => {this.props.onSearch(ev)}}>
                        <input name="searchQuery" type="text" placeholder="Name" className="input-field"/>
                        <input type="submit" value="Search" />
                    </form>
                </div>
    }
}