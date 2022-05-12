import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies, setShowFavorites } from "../actions";
import { connect } from "react-redux";
// import { StoreContext } from "../index";

class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   console.log("UPDATED");
    //   this.forceUpdate();
    // });
    //  make Api call
    // dispatch action
    this.props.dispatch(addMovies(data));
    // console.log("State", this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    const { movies } = this.props; // { movies : {}, search: {}}
    const index = movies.favorites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavorites(val));
  };

  render() {
    const { movies, search } = this.props; //{movies:{}, search : {}}
    const { list, favorites, showFavorites } = movies;
    const displayMovie = showFavorites ? favorites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? "active-tabs" : ""}`}
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
                dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//           return <App store={store} />;
//         }}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default AppWrapper;

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
