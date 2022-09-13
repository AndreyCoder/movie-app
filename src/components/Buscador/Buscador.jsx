import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavourite, getMovies } from '../../store/actions/index.js'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>

        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies ?
              this.props.movies.map(el => {
                return (
                  <li key={el.imdbID}>

                    <Link to={`movie/${el.imdbID}`}>
                      <h2>{el.Title}</h2>
                    </Link>

                    <button onClick={() =>
                      this.props.addMovieFavourite({
                        id: el.imdbID,
                        title: el.Title,
                        year: el.Year,
                        type: el.Type,
                        poster: el.Poster
                      })}>
                      FAV
                    </button>

                    <p>{el.Year}</p>
                    <p>{el.Type}</p>
                    <img src={el.Poster} alt="poster" />

                  </li>
                )
              }) : <h3>No hay peliculas</h3>
          }
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavourite: movie => dispatch(addMovieFavourite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

