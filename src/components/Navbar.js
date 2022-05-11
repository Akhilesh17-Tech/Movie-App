import React from "react";
import "../components/scss/Style.scss";

import { data } from "../data";
import { addMoviesToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: true,
    };
  } 

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMoviesToList(movie));
    this.setState({
      showSearchResult: false,
      searchText: "",
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { showSearchResults } = this.state;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={data[0].Poster} alt="search-pic" />

                <div className="more-info">
                  <span>{data[0].Title}</span>
                  <button onClick={() => this.handleAddToMovies(data[0])}>
                    Add to movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
