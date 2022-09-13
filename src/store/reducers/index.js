
const initialState = {
  moviesLoaded: [],
  moviesFavourites: [],
  moviesDetail: []
}

function rootReducer(state = initialState, action) {

  if (action.type === "ADD_MOVIE_FAVOURITE") {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.concat(action.payload)
    }
  }

  if (action.type === "REMOVE_MOVIE_FAVOURITE") {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter(el => el.id !== action.payload)
    }
  }

  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload
    }
  }

  if (action.type === "GET_DETAILS") {
    return {
      ...state,
      moviesDetail: action.payload
    }
  }

  if (action.type === "CLEAR") {
    return {
      ...state,
      moviesDetail: {}
    }
  }

  else return state
}

export default rootReducer

