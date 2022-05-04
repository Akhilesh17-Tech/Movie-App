import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import "../components/scss/Style.scss";
import { addMovies } from "../actions";

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

  render() {
    const { list } = this.props.store.getState();
    console.log("RENDER", this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
