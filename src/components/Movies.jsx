import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(el => el._id !== movie._id);
        this.setState({movies})
    }

    render() {
        const {movies} = this.state;
        if (movies.length === 0) return <p>There are no movies in the database.</p>
        return (
            <>
                <p>Showing {movies.length} movies in database.</p>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => {
                        const {_id, title, genre, numberInStock, dailyRentalRate} = movie;
                        return (
                            <tr key={_id}>
                                <td>{title}</td>
                                <td>{genre.name}</td>
                                <td>{numberInStock}</td>
                                <td>{dailyRentalRate}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm"
                                            onClick={() => this.handleDelete(movie)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Movies;