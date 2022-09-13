export function addMovieFavourite(payload) {
  return {
    type: "ADD_MOVIE_FAVOURITE",
    payload
  }
}

export function removeMovieFavourite(payload) {
  return {
    type: "REMOVE_MOVIE_FAVOURITE",
    payload
  }
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=6b428af4&s=${titulo}`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "GET_MOVIES",
          payload: res.Search
        })
      })
  }
}

export function getDetails(id) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=6b428af4&i=${id}`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "GET_DETAILS",
          payload: res
        })
      })
  }
}

export function clearDetail() {
  return {
    type: "CLEAR"
  }
}

