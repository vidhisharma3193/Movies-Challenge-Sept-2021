import { useState } from "react"
import MovieDetails from "./movieDetails"

let MovieTile = (props) => {

    const [display,changeDisplay] = useState(false)
    return(<div>
        <h4>Movie</h4>
        <h3>Title: {props.original_title}</h3>
        <h3>Release Date: {props.release_date}</h3>

        <button onClick={() => changeDisplay(!display)}>
            {display ? "Hide" : "Show"} Details
        </button>
            
        {display ? <MovieDetails {...props}/> : null}
       

    </div>)
}

export default MovieTile