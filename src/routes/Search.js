import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { AiOutlineSearch } from "react-icons/ai";
import Movie from "../components/Movie";

function Search() {

  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState(null);
  const [searchDataPage, setSearchDataPage] = useState(1);
  const [url, setUrl] = useState(
    `https://yts.mx/api/v2/list_movies.json?page=${searchDataPage}&query_term=${query}`,
  );

  useEffect(() => {
      const getSearchMovies = async () => {
        const json = await (await fetch(url)).json();
      setSearchMovies(json.data.movies); 
    };  
    getSearchMovies();
  }, [searchDataPage,query,url]);


  const searchClick = (e) => {
    e.preventDefault();
    setUrl(`https://yts.mx/api/v2/list_movies.json?page=${searchDataPage}&query_term=${query}`);
  };


  return (
    <div className="wrap">
      <Header></Header>
      <div className="search">
        <div className="search_box">
          <form>
            <input className="search_input" type="text" value={query} onChange={event => setQuery(event.target.value)}/>
            <button className="search_btn" onClick={searchClick}><AiOutlineSearch></AiOutlineSearch></button>
          </form>
        </div>
      </div>
      <div className="movie_box">
            <div className="movie_list">
              {searchMovies &&
                searchMovies.map((searchMovie) => (
                  <Movie
                    key={searchMovie.id}
                    id={searchMovie.id}
                    coverImg={searchMovie.medium_cover_image}
                    title={searchMovie.title}
                    summary={searchMovie.summary}
                    genres={searchMovie.genres}
                    rating={searchMovie.rating}
                  />
                ))}
            </div>
          </div>
    </div>
  );
}

export default Search;
