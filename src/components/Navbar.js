import React from "react";
import "../components/scss/Style.scss";
// import { data } from "../data";
import { addMoviesToList, handleMovieSearch } from "../actions";
import { StoreContext } from "..";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: false,
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMoviesToList(movie));
    this.setState({
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
    const { result: movie, showSearchResult } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResult && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />

                <div className="more-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
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

class NavbarWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          return (
            <Navbar dispatch={store.dispatch} search={this.props.search} />
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default NavbarWrapper;
