import React, { Component } from "react";
import "./SearchMovies.css";

class SearchMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.searchMovies(this.state.value);
  };

  render() {
    return (
      <section className="search-input-box">
        <label className="form-label" htmlFor="search-bar">
          Search
        </label>
        <form className="search-input-field">
          <input
            className="search-field"
            type="text"
            placeholder="SEARCH MOVIES"
            id="search-bar"
            name="search bar"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </section>
    );
  }
}

export default SearchMovies;
