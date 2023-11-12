import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

import TLK from './images/The Lion King.jpg';
import MK from './images/Mortal Kombat.jpg';
import CI from './images/Central Intelligence.jpg';
import F5 from './images/Fast Five.jpg';
import J from './images/Jumanji.jpg';

function App() {
  const movie = [
    {title: "The Lion King",
    description: "Animation",
    posterURL: TLK,
    rating: 5},

    {title: "Mortal Kombat",
    description: "Action",
    posterURL: MK,
    rating: 4},

    {title: "Central Intelligence",
    description: "Action-Comedy",
    posterURL: CI,
    rating: 4.5},

    //Added movies

    {title: "Fast Five",
    description: "Action",
    posterURL: F5,
    rating: 4.8},

    {title: "Jumanji",
    description: "Adventure",
    posterURL: J,
    rating: 4.4}
]

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
    </div>
  );
}

export default App;