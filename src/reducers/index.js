import {
  ADD_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SHOW_FAVORITE,
} from "../actions";

const initialMoviesState = {
  list: [],
  favorites: [],
  showFavorites: false,
};

export default function movies(state = initialMoviesState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case REMOVE_FROM_FAVORITES:
      const filteredArray = state.favorites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favorites: filteredArray,
      };
    case SET_SHOW_FAVORITE:
      return {
        ...state,
        showFavorites: action.val,
      };
    default:
      return state;
  }
}
