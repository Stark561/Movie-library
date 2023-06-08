import Loading from 'components/Loading/Loading';
import Title from 'components/Title/Title';
import Notiflix from 'notiflix';
import { Suspense, memo, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Back, Card, ErrorMsg, Text } from './styles/MovieDetails.styled';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const backLocation = useRef(location.state?.from || '/');
  const standartImage =
    'http://dummyimage.com/150x60/99cccc.gif&text=The+image!';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function () {
        Notiflix.Notify.failure('Happened ERROR, TRY AGAIN IN SOME TIME');
        setErr(true);
      })
      .finally(function () {
        setLoading(false);
      });

    return () => {};
  }, [movieId]);

  return (
    <>
      <Back to={backLocation.current}>Go back</Back>

      {Object.keys(movie).length !== 0 && (
        <div>
          <Card>
            <img
              style={{ width: 200 }}
              src={
                movie.poster_path || movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w200${
                      movie.poster_path || movie.backdrop_path
                    }`
                  : standartImage
              }
              alt={movie.title ?? movie.name}
            />
            <div>
              <Title text={movie.title ?? movie.name}></Title>

              {movie.vote_average > 0 && (
                <Text>User Score: {Math.round(movie.vote_average)}%</Text>
              )}

              {movie.overview && (
                <>
                  <h2>Overview</h2>
                  <Text>{movie.overview}</Text>
                </>
              )}

              {movie.genres[0] && (
                <>
                  <h3>Genres</h3>
                  <Text>
                    {movie.genres.map(el => {
                      return <span key={el.id}>{el.name} </span>;
                    })}
                  </Text>
                </>
              )}
            </div>
          </Card>

          <p>Additional information</p>
          
         
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>              
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      )}

      {loading && <Loading />}
      {err && <ErrorMsg>ERROR, PAGE NOT FOUND</ErrorMsg>}
    </>
  );
}

export default memo(MovieDetails);
