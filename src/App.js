import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

import TLK from './images/The Lion King.jpg';
import MK from './images/Mortal Kombat.jpg';
import CI from './images/Central Intelligence.jpg';

function App() {
  const [movie, setMovie] = useState([
    {title: "The Lion King",
    description: "Animation",
    posterUrl: TLK,
    rating: 5},

    {title: "Mortal Kombat",
    description: "Action",
    posterUrl: MK,
    rating: 4},

    {title: "Central Intelligence",
    description: "Action-Comedy",
    posterUrl: CI,
    rating: 4.5},
]);

const addMovieToList = (movie) => {
  setMovie((previous) => [...previous, movie])
  } 

const [filteredInput, setFilteredInput] = useState({title: "", rating: ""})

const handleMovieFilter = (filterType, filterValue) => (
  setFilteredInput({...filteredInput, [filterType]:filterValue})
)

const filteredMovies = movie.filter((oneMovie) => (
  oneMovie.title.toLowerCase().includes(filteredInput.title.toLowerCase()) && oneMovie.rating.toString().includes(filteredInput.rating)
))

  return (
    <div className="App">
      <header><b className='movietitle'>Movie.net</b><Filter handleFilter={handleMovieFilter}/></header>
      <MovieList movies={filteredMovies}/>
      <AddMovie addMovie={addMovieToList}/>
    </div>
  );
}

export default App;