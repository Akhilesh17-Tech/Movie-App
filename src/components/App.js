import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import "../components/scss/Style.scss";
import { addMovies, setShowFavorites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    //  make Api call
    // dispatch action
    store.dispatch(addMovies(data));
    // console.log("State", this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    const { favorites } = this.props.store.getState();
    const index = favorites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };

  render() {
    const { list, favorites, showFavorites } = this.props.store.getState();
    console.log("RENDER", this.props.store.getState());

    const displayMovie = showFavorites ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? "" : "active-tab"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? "active-tab" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {displayMovie.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
          {displayMovie.length === 0 ? (
            <div className="no-movies"> No movies to Display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
