

const MovieCard = ({movie}) => {
    return (
        <div className="moviecard">
            <h1>{movie.title}</h1>
            <img src={movie.posterUrl} alt="movie" height={"400px"} width={"300px"}/>
            <h2>Genre: {movie.description}</h2>
            <p><b>Rating: {movie.rating}</b></p>
        </div>
    )
}

export default MovieCard;