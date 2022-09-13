import React from 'react';
import { connect } from 'react-redux';
import { getDetails, clearDetail } from '../../store/actions/index';

import './Movie.css';

class Movie extends React.Component {

  componentDidMount() {
    const movieId = this.props.match.params.id
    this.props.getDetails(movieId)
  }

  componentWillUnmount() {
    this.props.clearDetail()
  }

  render() {
    return (
      <div className="movie-detail">
        Detalle de la pelicula

        <h2>{this.props.movies.Title}</h2>
        <img src={this.props.movies.Poster} alt={`imagen de la pelicula ${this.props.movies.Title}`} />
        <p>año: {this.props.movies.Year}</p>
        <p>Genre: {this.props.movies.Genre}</p>
        <p>Actors: {this.props.movies.Actors}</p>
        <p>Sipnosis: {this.props.movies.Plot}</p>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDetails: id => dispatch(getDetails(id)),
    clearDetail: () => dispatch(clearDetail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);