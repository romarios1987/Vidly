import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMovies} from "../services/fakeMovieService";
import Pagination from "./Pagination";
import {paginate} from "../utils/paginate";

// import Like from "./UI/Like";

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(el => el._id !== movie._id);
        this.setState({movies})
    }
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked;

        this.setState({movies})
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    render() {
        const {movies, pageSize, currentPage} = this.state;
        if (movies.length === 0) return <p>There are no movies in the database.</p>

        const moviesPaginate = paginate(movies, currentPage, pageSize)

        return (
            <>
                <p><strong>Showing {movies.length} movies in database.</strong></p>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Like</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {moviesPaginate.map(movie => {
                        const {_id, title, genre, numberInStock, dailyRentalRate, liked} = movie;
                        const likeIcon = liked ? 'fas' : 'far';
                        return (
                            <tr key={_id}>
                                <td>{title}</td>
                                <td>{genre.name}</td>
                                <td>{numberInStock}</td>
                                <td>{dailyRentalRate}</td>
                                <td>
                                    <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => this.handleLike(movie)}
                                                     icon={[likeIcon, 'heart']}/>
                                    {/*<Like/>*/}
                                </td>
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
                <Pagination
                    itemsCount={movies.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </>
        );
    }
}

export default Movies;