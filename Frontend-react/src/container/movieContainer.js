import { useEffect, useState } from "react"
import MovieTile from "../components/movieTile"

let MovieContanier = () => {

    const [movies,changeMovies] = useState([])
    const [displayMovies,changeDisplayMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => {
            changeMovies(data)
            changeDisplayMovies(data)
        }) }, [])

    // console.log(movies)

    let showSearchMovies = (searchTerm) => {
        let searchMovies = movies.filter(movie => movie.original_title.toLowerCase().includes(searchTerm.toLowerCase()))

        changeDisplayMovies(searchMovies)
    }

    return(<div>
        MovieContanier Component
        Search: <input onChange={(e) => showSearchMovies(e.target.value)} placeholder="Serch a Movie by title" /> 
        {displayMovies.map(movie => <MovieTile {...movie} />)}
    </div>)
}

export default MovieContanier