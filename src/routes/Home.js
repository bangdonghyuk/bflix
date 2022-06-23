import React, {useEffect, useState} from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import Movie from "../components/Movie";
// import Suggestion from "../components/Suggestion";
import Header from "../components/layout/Header";
// import {Link} from "react-router-dom";


function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [suggestions, setSuggestions] = useState([]);


  const getMovies = async () => {


    const moviesJson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=50&`
      )
    ).json();


    const randomNum = Math.floor(Math.random() * 42981 + 1);
    const randomNum2 = Math.floor(Math.random() * 4);
    const suggestionsJson = await (await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${randomNum}`)).json();
 
    const aa = suggestionsJson.data.movies[randomNum2];
    setSuggestions(aa);
    setMovies(moviesJson.data.movies);
    setLoading(false);
  };

  console.log(suggestions);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='wrap'>
      <Header></Header>

      <div className='visual'  style={{ backgroundImage: `url(${suggestions.background_image})` }}>
        <div className='visual_title'>비주얼 <div>{suggestions.id}</div></div>
       
      </div>
      {loading ? (
        <h1 className='loading'><AiOutlineLoading /></h1>
      ) : (
        <div className='movie_box'>
            <div className='movie_list'>
              {movies && movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                  rating={movie.rating}
                />
              ))}
            </div>
  
        </div>
      )}
    </div>
  );
}

export default Home;