import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(){

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setLoading(false);
        setMovie(() => json.data.movie);
      };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
                <h2>{movie.title}</h2>
                <div>
                <img src={movie.medium_cover_image} alt={movie.title}/>
                </div>
                <p>{movie.description_intro}</p>
                <ul>
                    {movie.genres.map((genre)=>(
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
          </div>
        )}
      </div>
    )
}

export default Detail;