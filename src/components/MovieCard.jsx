

const MovieCard = ({movie}) => {
    return (
        <div className="moviecard">
            <h1>{movie.title}</h1>
            <img src={movie.posterURL} alt="movie" height={"300px"} width={"260px"}/>
            <h2>Genre: {movie.description}</h2>
            <p><b>Rating: {movie.rating}</b></p>
        </div>
    )
}

export default MovieCard;