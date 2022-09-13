import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavourite } from '../../store/actions/index.js'
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies ?
              this.props.movies.map(el => {
                return (
                  <li key={el.id}>

                    <button onClick={() => this.props.removeMovieFavourite(el.id)}>
                      X
                    </button>

                    <Link to={`movie/${el.id}`}>
                      <h3>{el.title}</h3>
                    </Link>

                    <p>{el.year}</p>
                    <p>{el.type}</p>
                    <img src={el.poster} alt="poster" />
                  </li>
                )
              }) : <div>No hay favoritas</div>
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavourite: id => dispatch(removeMovieFavourite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
