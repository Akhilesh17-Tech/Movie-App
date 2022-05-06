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
