// {
//   type: "ADD_MOVIES",
// }

// {
//   type: "DECREASE_COUNT",
// }

// action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_SHOW_FAVORITE = "SET_SHOW_FAVORITE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
// action creator
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavorite(movie) {
  return {
    type: ADD_TO_FAVORITES,
    movie: movie,
  };
}
export function removeFromFavorites(movie) {
  return {
    type: REMOVE_FROM_FAVORITES,
    movie: movie,
  };
}

export function setShowFavorites(val) {
  return {
    type: SET_SHOW_FAVORITE,
    val: val,
  };
}

export function addMoviesToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie: movie,
  };
}

export function handleMovieSearch(movie) {
  console.log("hi", movie);
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=537bf77d&t=${movie}`;
  fetch(url)
    .then((response) => response.json())
    .then((movie) => {
      console.log(movie);

      // dispatch an action
      // dispatch({type :"ADD_SEARCH_RESULT", movie})
    });
}
